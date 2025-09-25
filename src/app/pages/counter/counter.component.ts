import { Component } from "@angular/core";

@Component({
    template: ` <h1>Counter {{ counter }} </h1>
<button (click)="counter = counter + 1">Aumentar</button>
<button (click)="counter = counter - 1">Disminuir</button>
<button (click)="counter = counter * 2">Duplicar</button>
<button (click)="counter = counter / 2">Dividir</button>
<button (click)="counter = 0">Reiniciar</button>
`
})
export class CounterComponent {
    counter = 10;
}