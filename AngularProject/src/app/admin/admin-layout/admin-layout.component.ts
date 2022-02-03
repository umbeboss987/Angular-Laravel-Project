import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }


  selectLanguage(event : any){
    this.translate.use(event.target.value);
  }

}
