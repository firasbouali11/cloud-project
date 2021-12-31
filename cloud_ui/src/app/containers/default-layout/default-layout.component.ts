import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

  
  name = localStorage.getItem("name")
  loggedin:boolean = false
  
  public logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")
    
  }
  constructor(private router:Router){
    if(localStorage.getItem("t")) this.loggedin = true  
    else this.router.navigateByUrl("/login")
  }
}
