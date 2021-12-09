import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { AppConstants } from '../app.constants';

const Url = 'http://127.0.0.1:8000/api/signUp';
const signIn_Url = 'http://127.0.0.1:8000/api/auth/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user? : User;
  constructor(private http : HttpClient) { }


  signUp (user: User) : Observable<User>{
   return  this.http.post<User>(Url, user);
  }

  signIn (user: User) : Observable<User>{
    return this.http.post<User>(signIn_Url, user);
  }

  getToken (){
    return localStorage.getItem('token');
  }

  updateUser(user: User) : Observable<User>{
    return this.http.put<User>(`${AppConstants.SERVICES_BASE_URL}/users`, user);
  }

  getUser() : Observable<User>{
    return this.http.get<User>('http://127.0.0.1:8000/api/auth/getId');
  }

  getAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(`${AppConstants.SERVICES_BASE_URL}/users`);
  }

  deleteUser (user_id: number) : Observable<unknown>{
    return this.http.delete(`${AppConstants.SERVICES_BASE_URL}/users/${user_id}`);
  }


}
