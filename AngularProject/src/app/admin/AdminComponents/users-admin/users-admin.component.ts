import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { GetAllUserAction } from 'src/app/store/actions/user.actions';
import { IAppState } from 'src/app/store/state/app.state';
@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

  constructor(private store : Store<IAppState>) { 
    this.store.dispatch(GetAllUserAction());
  }

  ngOnInit(): void {
  }

}
