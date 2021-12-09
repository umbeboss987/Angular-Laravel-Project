import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Store} from '@ngrx/store';
import { GetUserAction, UpdateUserAction } from 'src/app/store/actions/user.actions';
import{IAppState} from '../../../store/state/app.state';
import {Observable} from 'rxjs';
import {User} from '../../../model/User';
import { selectSingleUser } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  updateProfileForm : FormGroup;
  admin$? : Observable<User>;

  constructor(private store: Store<IAppState>, private fb : FormBuilder) { 
    this.updateProfileForm = this.fb.group({
      username: ['',[Validators.required, Validators.minLength(4)]],
      email: ['',[Validators.required, Validators.minLength(4), Validators.email]],
    })

    this.store.dispatch(GetUserAction());    
  }

  ngOnInit(): void {
  this.admin$ = this.store.select(selectSingleUser);
     
  }

  setValueForm(user_name: any, email: any){
    this.updateProfileForm.patchValue({
      username: user_name,
      email: email
    })
  }

  updateProfile(){
    let valueForm = this.updateProfileForm.value;
    if(this.updateProfileForm.valid){
     this.store.dispatch(UpdateUserAction({user : valueForm}));
    }
  }

}
