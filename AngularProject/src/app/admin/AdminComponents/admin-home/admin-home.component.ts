import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Store} from '@ngrx/store';
import { AddUserImageAction, GetUserAction, GetUserImageAction, UpdateUserAction } from 'src/app/store/actions/user.actions';
import{IAppState} from '../../../store/state/app.state';
import {Observable} from 'rxjs';
import {User} from '../../../model/User';
import { selectSingleUser, selectUserImage } from 'src/app/store/selectors/user.selector';
import { AddImageAction } from 'src/app/store/actions/image.actions';
import { Image } from 'src/app/model/Image';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  updateProfileForm : FormGroup;
  admin$? : Observable<User>;
  addPhotoForm : FormGroup;
  file : any;
  userImage? : Observable<Image>;
  imagePath : string = "http://localhost:8000/uploads/products/"
  hideAddPhoto : boolean = true;

  constructor(private store: Store<IAppState>, private fb : FormBuilder) { 
    this.updateProfileForm = this.fb.group({
      username: ['',[Validators.required, Validators.minLength(4)]],
      email: ['',[Validators.required, Validators.minLength(4), Validators.email]],
    })

    this.addPhotoForm = this.fb.group({
      photo : null
    })

    this.store.dispatch(GetUserAction()); 
    this.store.dispatch(GetUserImageAction()) 
  }

  ngOnInit(): void {
  this.admin$ = this.store.select(selectSingleUser); 
  this.userImage = this.store.select(selectUserImage);
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


  uploadImage(event: any){
    this.file = event.target.files[0];
    if(this.file){
      this.hideAddPhoto = false;
    }
  }

  addImage (){
    let formData = new FormData();
    formData.append('image', this.file, this.file.name);
    this.store.dispatch(AddUserImageAction({image : formData}))
  }


  

}
