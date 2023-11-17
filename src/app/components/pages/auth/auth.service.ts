import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loggedUser$ = new BehaviorSubject<User>({} as User);

  get loggedUser$(): Observable<User>  {
    return this._loggedUser$.asObservable()
  }

  set loggedUser(user: User) {
    this._loggedUser$.next(user)
  }


  constructor() { 
    if (this.isLoggedIn) {
      this.loggedUser = JSON.parse(localStorage.getItem('user')!)
    }
  }

  logIn(user: User) {
    this.loggedUser = user
    localStorage.setItem('user', JSON.stringify(user))
  }

  logOut() {
    localStorage.removeItem('user')
  }

  get isLoggedIn(): boolean {
    const isLogged = localStorage.getItem('user')
    return !!isLogged
  }

}
