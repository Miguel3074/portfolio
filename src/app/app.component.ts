import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DesktopComponent } from './components/desktop/desktop.component';

@Component({
  selector: 'app-root',
  imports: [
    DesktopComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-portfolio';
}
