import { Component, OnInit,ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalConstantes } from '../../constantes';


@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  infos: any
  data: any
  reponse: any = null

  name:string
  constructor(private http: HttpClient,private router:Router){ 
    const navigation = this.router.getCurrentNavigation()
    const state = navigation.extras.state
    if(state){
      this.infos = state
    }
    
   }
  response:string
  public fetchData(){
    return  this.http.get(GlobalConstantes.api,{headers:new HttpHeaders().set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("t")}`)}).toPromise().then( resp => {
      this.data = resp
    }).catch(err => console.log(err))
    // return this.router.navigateByUrl("/login")
  }

  public addEmployee(name,occupation,cin){
    return this.http.post(GlobalConstantes.api,{
      name,occupation,CIN:cin
    },{headers:{"Accept":"application/json","Authorization":`Bearer ${localStorage.getItem("t")}`}}).toPromise().then(resp => {
      this.addModal.hide()
      this.fetchData()
    }).catch(err => console.log(err))
  }

  public deleteEmployee(id){
    return this.http.delete(GlobalConstantes.api+id,
    {headers:{"Accept":"application/json","Authorization":`Bearer ${localStorage.getItem("t")}`}}).toPromise()
    .then(resp => {
      console.log(resp)
      this.fetchData()
    })
    .catch(err => console.log(err))
  }

  public updateEmployee(){
    const name = (<HTMLInputElement> document.getElementById("name") ).value ;
    const occupation = (<HTMLInputElement> document.getElementById("occupation") ).value ;
    const CIN = (<HTMLInputElement> document.getElementById("cin") ).value;  
    const id = (<HTMLInputElement> document.getElementById("id") ).value;      
    return this.http.put(GlobalConstantes.api+id,{
      name,occupation,CIN
    },{headers:{"Accept":"application/json","Authorization":`Bearer ${localStorage.getItem("t")}`}})
    .toPromise().then(resp => {
      console.log(resp)
      this.fetchData()
      this.updateModal.hide()
    }).catch(err => console.log(err))
  }

  public fillUpdateModal(employee){
    this.updateModal.show();
    (<HTMLInputElement> document.getElementById("name") ).value = employee.name ;
    (<HTMLInputElement> document.getElementById("occupation") ).value = employee.occupation ;
    (<HTMLInputElement> document.getElementById("cin") ).value = employee.CIN ;
    (<HTMLInputElement> document.getElementById("id") ).value = employee.id ;
  }


  @ViewChild('addModal') public addModal: ModalDirective;
  @ViewChild('updateModal') public updateModal: ModalDirective;
  ngOnInit(): void {
    if(localStorage.getItem("t")){
      this.fetchData()
    }
  }
}
