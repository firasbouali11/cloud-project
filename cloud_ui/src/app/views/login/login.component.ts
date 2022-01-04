import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { GlobalConstantes } from '../../constantes';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',

})
export class LoginComponent { 

  constructor(private http:HttpClient,private router:Router){}
  response : any
  alert:string = ""
  navigationExtras: NavigationExtras

  public async login(email){
    let password:string = (<HTMLInputElement>document.getElementById("password")).value
    await this.http.post(GlobalConstantes.api+"auth/",{
      email:email,
      password: password,
    },{headers:{"Accept":"application/json"}}).toPromise().then(resp => this.response = resp).catch(err => this.response = err)
    
    if(!this.response.error){
      this.navigationExtras = {
        state: this.response
      }
       localStorage.setItem("t",this.response.token)
       localStorage.setItem("name",this.response.user.name)
       this.alert=""
     return this.router.navigate(["/"],this.navigationExtras)
    }else {
      this.alert = this.response.error.message
    }
  }
}
