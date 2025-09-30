import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
templateUrl: './counter.component.html',
styles: [`
// styles for the text
h1 {
    font-size: 40px;
    color: linear-gradient(to right, blue, white);
    text-shadow: 0 0 5px deepskyblue;
    text-align: left;
    }
    //there are some styles for the buttons and i try to make them look nice
button {
    font-size: 20px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 5px 2px deepskyblue;
    margin: 10px;
    background: linear-gradient(to right, lightblue, white);
    border: neonblue solid 2px;
}
button:hover {
    background-color: deepskyblue;

}


`],
changeDetection: ChangeDetectionStrategy.OnPush,
})
//add new varaible called text 
export class CounterComponent {
    counter = 10;
     text = 'El numero actual es:';
    counterSignal= signal(10);

     constructor() {
    setInterval(() => {
        // this.counter += 1;
        this.counterSignal.update((v) => v + 1);
        console.log('tick');
    }, 2000);
    }

    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update((current) => current + value);
    }
}
