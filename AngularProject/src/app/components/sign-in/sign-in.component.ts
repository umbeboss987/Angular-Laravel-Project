import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { ToastrService } from 'ngx-toastr';
import {select, Store} from '@ngrx/store';
import { UserLoginAction, UserSignUpAction} from 'src/app/store/actions/user.actions';
import { IAppState } from 'src/app/store/state/app.state';
import { selectUserResponse, selectUserResponseMessage } from 'src/app/store/selectors/user.selector';
import { UserAuth } from 'src/app/model/userAuth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { selectShareDataResponse } from 'src/app/store/selectors/shared.selector';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formGroup: FormGroup;

  formUserSignIn: FormGroup;

  clicked? = false;

  showFormSignIn = false;

  showFormSignUp = true;

  constructor(private toastr: ToastrService,  private fb: FormBuilder, private store: Store<IAppState>, private router: Router) {  
    this.formGroup = this.fb.group({
      name: ["",[Validators.required, Validators.minLength(4)]],
      email: ["",[Validators.required, Validators.email ,Validators.minLength(4)]],
      password: ["",[Validators.required]],
      role: 'user'
    }) 
    
    this.formUserSignIn = this.fb.group({
      name: ["",[Validators.required, Validators.minLength(4)]],
      password: ["",[Validators.required]],
    }) 
  }

  ngOnInit(): void {
  }


  signUp() {
    let formUser: User = {
      'name': this.formGroup.value.name,
      'email': this.formGroup.value.email,
      'password': this.formGroup.value.password,
      'role': this.formGroup.value.role
    }
    console.log(formUser);
    this.store.dispatch(UserSignUpAction({ user: formUser }));
  }


  signIn() {
    let form: User = this.formUserSignIn.value;
    this.store.dispatch(UserLoginAction({ user: form }));
  }

  login() {
    this.clicked = true;
      if(this.clicked){
        this.clicked = false;
        this.showFormSignUp = false;
        return this.showFormSignIn = true;       
      } else {
        return false;
      }
  }

  register() {
    this.clicked = true;
      if(this.clicked){
        this.clicked = false;
        this.showFormSignUp = true;
        return this.showFormSignIn = false;       
      } else {
        return false;
      }
  }

  yellowDiv(){
    let registerLink = (document.getElementById('register-form-link') as HTMLAnchorElement);
    if (this.showFormSignUp === true){
      registerLink.setAttribute('checked', 'yellow');
    }else{
      registerLink.setAttribute('checked', '');
    } 
  }

}
