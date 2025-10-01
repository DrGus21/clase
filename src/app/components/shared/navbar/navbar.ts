import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styles: [`   nav {
      padding: 10px;  
      background-color: gray;
      font-size: 20px;
      font-weight: bold;
    }
  `],
})
export class Navbar {

}
