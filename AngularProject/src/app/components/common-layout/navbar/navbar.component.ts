import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private translate: TranslateService){
  }
  ngOnInit(): void {
  }


  isLoggedIn (){
    return this.authService.isAuthenticated();
  }

  logout(){
    this.authService.logout();
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  selectLanguage(event : any){
    this.translate.use(event.target.value);
  }


}
