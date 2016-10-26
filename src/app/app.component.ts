import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { GithubService } from './shared/services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
