import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { User } from 'src/app/model/User';
import { DeleteUserAction, GetAllUserAction } from 'src/app/store/actions/user.actions';
import { selectUserAuth } from 'src/app/store/selectors/user.selector';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

  users$? : Observable<User[]>;

  constructor(private store : Store<IAppState>, private authService: AuthService) { 
    this.store.dispatch(GetAllUserAction());
  }

  ngOnInit(): void {
    this.users$ = this.store.select(selectUserAuth);
  }

  deleteUser(user_id: number){
    this.store.dispatch(DeleteUserAction({user_id : user_id}));
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

}
