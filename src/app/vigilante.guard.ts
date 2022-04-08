import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
   private tipo: boolean;
   constructor(private router: Router) {
   }

   // METODO QUE NOS PERMITE REDIRECCIONAR
  private redireccionar(f: boolean): any{
    if (!f){
      this.router.navigate(['/', 'login']);
    }
  }
  // FIN
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const e1 = 'jbarbieri@wallypos.com';
    const email: string = localStorage.getItem('email');
    if (email === e1) {
      this.tipo = true;
    }else{
      this.tipo = false;
    }
    this.redireccionar(this.tipo);
    return this.tipo;
  }
}
