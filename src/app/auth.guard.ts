import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthserviceService,private route:Router){

  }
  canActivate(){
    if(this.auth.isLoggedIn()){
      return true;
    }
    else{
      this.route.navigate(['home']);
      return false;
    }
  }
  
}
