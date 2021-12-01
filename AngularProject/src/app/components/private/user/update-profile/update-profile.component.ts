import { Component, OnInit } from '@angular/core';
import{User} from '../../../../model/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { GetUserAction, UpdateUserAction } from 'src/app/store/actions/user.actions';
import { selectSingleUser } from 'src/app/store/selectors/user.selector';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  formUpdateUser : FormGroup;
  user?: User;
  closeResult = '';


  constructor(private fb : FormBuilder, private store: Store<IAppState>) { 

    this.getUser();

    this.store.select(selectSingleUser).subscribe(res =>{
      this.user = res; 
    });


    this.formUpdateUser = this.fb.group({
      email : "",
      username: "",      
    })

    if(this.user){
      this.formUpdateUser.setValue({
        email: this.user.email,
        username : this.user.username
      })
    }
  }

  ngOnInit(): void {
    
  }

  userUpdate(){
    let user : User = this.formUpdateUser.value
    this.store.dispatch(UpdateUserAction({ user : user}));
  }

  getUser(){
    this.store.dispatch(GetUserAction());
  }

}
