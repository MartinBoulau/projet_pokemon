import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserModel, UserPlusModel } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private userService: ApiService) {}
  usertoken: any;
  user: UserPlusModel;

  getToken(name: string) {
    this.userService.name(name).subscribe((data) => {
      this.usertoken = data;
    });
  }

  getUser(usertoken: any) {
    this.userService.user(usertoken).subscribe((data) => {
      this.user = data;
    });
  }
  ngOnInit() {}
}
