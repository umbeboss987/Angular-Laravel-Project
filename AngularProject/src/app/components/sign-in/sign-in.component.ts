import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { ToastrService } from 'ngx-toastr';
import {select, Store} from '@ngrx/store';
import { UserLoginAction, UserSignUpAction} from 'src/app/store/actions/user.actions';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {checkPasswords} from '../../Validators/CustomValidators'

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

  constructor(private fb: FormBuilder, private store: Store<IAppState>, private router: Router) {
    
    
    
    this.formGroup = this.fb.group({
      id: null,
      username: ["",[Validators.required, Validators.minLength(4), Validators.maxLength(13)]],
      email: ["",[Validators.required, Validators.email ,Validators.minLength(8), Validators.maxLength(20)]],
      password: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(17)]],
      confirmPassword: ["",[Validators.required, ]],
      role: 2,
      order: null
    },
    { 
      validators: checkPasswords
    }
    ) 
   
    this.formUserSignIn = this.fb.group({
      username: ["",[Validators.required]],
      password: ["",[Validators.required]],
    }) 

  }

  ngOnInit(): void {
  }


  signUp() {
    let formUser: User = {
      'id' : this.formGroup.value.id,
      'username': this.formGroup.value.username,
      'email': this.formGroup.value.email,
      'password': this.formGroup.value.password,
      'role': this.formGroup.value.role,
      'order' : this.formGroup.value.order
    }
    checkPasswords
    if(this.formGroup.valid){
       this.store.dispatch(UserSignUpAction({ user: formUser }));
    }
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
