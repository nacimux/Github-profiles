import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class GithubService {
  username:string;
  clientID:string = '66e2af26af6ff2c4ea28';
  clientSecret:string = '5397f3377ca615ef3efc7553002940760ccd989a';

  constructor(private http: Http) { 
    this.username = 'nacimux';
  }

  GetUser() {
    return this.http.get('http://api.github.com/users/'+this.username)
    .map((res) => res.json());
  }

  GetRepos() {
    return this.http.get('http://api.github.com/users/'+this.username+'/repos')
    .map((res) => res.json());
  }

}
