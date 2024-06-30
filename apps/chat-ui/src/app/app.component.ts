import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { exampleFunction } from '@ukol-01/common';
import { NavigationComponent } from '../components/navigation/navigation.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, NavigationComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'chat-ui';

  constructor() {
    const result = exampleFunction();
    console.log(result);
  }
}

