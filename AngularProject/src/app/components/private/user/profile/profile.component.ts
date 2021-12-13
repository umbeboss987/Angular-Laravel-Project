import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import {select, Store} from '@ngrx/store';
import { CreateAddressAction, GetAddressAction } from 'src/app/store/actions/address.actions';
import { Address } from 'src/app/model/Address';
import { _selectOrderAccount, _selectOrderLoading } from 'src/app/store/selectors/order.selector';
import { GetUserAction, GetUserImageAction } from 'src/app/store/actions/user.actions';
import { User } from 'src/app/model/User';
import { selectAddressLoading } from 'src/app/store/selectors/address.selector';
import { selectSingleUser, selectUserImage, selectUserLoading } from 'src/app/store/selectors/user.selector';
import {Observable} from 'rxjs';
import { Image } from 'src/app/model/Image';
import { AddImageAction } from 'src/app/store/actions/image.actions';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user?: Observable<User>;

  loadingUser?: Observable<boolean>;

  userImage? : Observable<Image>;

  addPhotoForm : FormGroup;

  file: any;

  imagePath : string = "http://localhost:8000/uploads/products/";

  hideAddPhoto = true;


  constructor( private store: Store<IAppState>, private fb : FormBuilder) { 
 
   
    this.getUser();
    this.store.dispatch(GetUserImageAction()) 
    

    this.addPhotoForm = this.fb.group({
      photo : null
    })
  }

  ngOnInit(): void {
    this.userImage = this.store.select(selectUserImage);

    this.user = this.store.select(selectSingleUser);

    this.loadingUser= this.store.select(selectUserLoading);  

  }
  
  getUser(){
    this.store.dispatch(GetUserAction());
  }

  uploadImage(event: any){
    this.file = event.target.files[0];
    if(this.file){
      this.hideAddPhoto =false;
    }
  }


  addImage (){
    let formData = new FormData();
    formData.append('image', this.file, this.file.name);
    this.store.dispatch(AddImageAction({photo : formData}))
  }


}
