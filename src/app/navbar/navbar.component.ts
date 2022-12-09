import { Component,Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() data!: UserModel;
  @Input() user!: UserModel;

  constructor(private userService: ApiService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.get(0).subscribe((data) => {
      this.user = {
        name: data['name'],
      };
    });
  }

}