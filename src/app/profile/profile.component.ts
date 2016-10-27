import { Component, OnInit } from '@angular/core';
import { GithubService } from '../shared/services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userInfo: any;
  public repos: any;
  username: string;
  constructor(private _githubservice: GithubService) {
    this.userInfo = false;
   }

  ngOnInit() {
  }
  searchUser() {
    this._githubservice.updateUser(this.username);
    this._githubservice.GetUser().subscribe(res => { this.userInfo = res });
    this._githubservice.GetRepos().subscribe(res => { this.repos = res });
  }
}

