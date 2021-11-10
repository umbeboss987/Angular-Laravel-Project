import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   user? : User;
  constructor(private user_service: UserService) {
    //this.getId();
   };
  

  ngOnInit(): void {
  }

  // getId() {
  //  this.user_service.getId().subscribe(res=>{
  //   this.user = res;
  //  });
  //  console.log(this.user);  
  // } 
}
