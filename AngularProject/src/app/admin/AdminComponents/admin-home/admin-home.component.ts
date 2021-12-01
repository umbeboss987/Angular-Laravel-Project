import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Store} from '@ngrx/store';
import { GetUserAction, UpdateUserAction } from 'src/app/store/actions/user.actions';
import{IAppState} from '../../../store/state/app.state';
import {Observable} from 'rxjs';
import {User} from '../../../model/user';
import { selectSingleUser } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  updateProfileForm : FormGroup;
  admin? : User;

  constructor(private store: Store<IAppState>, private fb : FormBuilder) { 
    this.updateProfileForm = this.fb.group({
      username: [''],
      email: [''],
    })
    this.store.dispatch(GetUserAction());
    
   
  }

  ngOnInit(): void {
    this.store.select(selectSingleUser).subscribe( res =>{
      this.admin = res;
    });
  }

  setValueForm(user_name: any, email: any){
    this.updateProfileForm.patchValue({
      username: user_name,
      email: email
    })
  }

  updateProfile(){
    let valueForm = this.updateProfileForm.value;
    this.store.dispatch(UpdateUserAction({user : valueForm}));
  }

}
