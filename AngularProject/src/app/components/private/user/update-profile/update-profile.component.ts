import { Component, OnInit } from '@angular/core';
import{User} from '../../../../model/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { GetUserAction, UpdateUserAction } from 'src/app/store/actions/user.actions';
import { selectUserAuth } from 'src/app/store/selectors/user.selector';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  formUpdateUser : FormGroup;
  user?: User[];
  closeResult = '';


  constructor(private fb : FormBuilder, private store: Store<IAppState>) { 

    this.getUser();

    this.formUpdateUser = this.fb.group({
      email : "",
      username: "",      
    })
    

    this.store.select(selectUserAuth).subscribe(res =>{
      this.user = res; 
      console.log(this.user[0].name)
    });;

    if(this.user){
      this.formUpdateUser.patchValue({
        email: this.user[0].email,
        username : this.user[0].name
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
