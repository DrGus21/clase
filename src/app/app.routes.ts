import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { OnePieceComponent } from './pages/one-piece/one-piece.component';
import { OnePeaceComponent } from './pages/one-peace/one-peace.component';

export const routes: Routes = [
{
    path: '',
    component: CounterComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'one-piece',
    component: OnePieceComponent
  },
  {
    path: 'one-peace',
    component: OnePeaceComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
