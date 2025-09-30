import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styles: [`
    nav {
      padding: 10px;  
      background-color: gray;
      font-size: 20px;
      font-weight: bold;
    }
    footer {
      padding: 10px;  
      background-color: gray;
      font-size: 20px;
      font-weight: bold;
    }

  `],
})
export class App {
  protected readonly title = signal('wboncin');
title2 = signal('A');
}
