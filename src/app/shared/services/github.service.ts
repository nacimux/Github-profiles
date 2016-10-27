import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class GithubService {
  username:string;
  clientID:string = '66e2af26af6ff2c4ea28';
  clientSecret:string = '5397f3377ca615ef3efc7553002940760ccd989a';

  constructor(private http: Http) { 
  }

  GetUser() {
    return this.http.get('http://api.github.com/users/'+this.username+'?client_id='+this.clientID+'&client_secret='+this.clientSecret)
    .map((res) => res.json());
  }

  GetRepos() {
    return this.http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.clientID+'&client_secret='+this.clientSecret)
    .map((res) => res.json());
  }
  updateUser(username:string) {
    this.username = username;
  }
}
