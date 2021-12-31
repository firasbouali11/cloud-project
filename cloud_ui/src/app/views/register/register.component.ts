import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstantes } from '../../constantes';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  alert:string = ""
  public register(username,email,password,confirmed){
    this.http.post(GlobalConstantes.api + "auth/create",{
      name:username, email,password, password_confirmation:confirmed
    }).toPromise().then(resp => {
        localStorage.setItem("t",resp["token"])
        localStorage.setItem("name",resp["user"].name)
        this.router.navigateByUrl("/dashboard")
    }).catch(err => this.alert = err.error.message)
  }
  constructor(private http:HttpClient ,private router:Router) { }

  

}
