import { Component, OnInit } from '@angular/core';
import {UserService} from './UserService.js'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  userService=new UserService();
  ngOnInit(): void {
    
    this.userService.demo();
  }
  title = 'sample-app';
}
