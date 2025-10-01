import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/shared/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styles: [`
 
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
