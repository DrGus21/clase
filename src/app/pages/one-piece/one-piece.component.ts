import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

interface Character {
    id: number;
    name: string;
    age: number;
}

@Component({
templateUrl: './one-piece.component.html',
styles: [`
button {
    font-size: 20px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 5px 2px blue;
    margin: 10px;
    background: linear-gradient(to right, blue, lightblue);
    border: neoncyan solid 2px;
}
button:hover {
    background-color: deepskyblue;

}
h1, h2, h3, ul, li {
    color: white;
    text-shadow: 0 0 5px deepskyblue;
    text-align: left;
    }

`],

changeDetection: ChangeDetectionStrategy.OnPush,
})
//add new varaible called text 
export class OnePieceComponent {
name = signal('Personaje');
age = signal('Edad');


characters = signal<Character[]>([
    {
        id: 1, name: 'Luffy', age: 19
    },
    {
        id: 2, name: 'Zoro', age: 21
    },
    {
        id: 3, name: 'Nami', age: 20
    },
    {
        id: 4, name: 'Usopp', age: 19
    },
    {
        id: 5, name: 'Chopper', age: 16
    }

]);

addCharacter(): void {
    if (this.name() === '' || this.age() === '') return;
    else{
    const newCharacter: Character = {
        id: this.characters().length + 1,
        name: (document.getElementsByName('name')[0] as HTMLInputElement).value,
        age: Number((document.getElementsByName('age')[0] as HTMLInputElement).value)
    };
    this.characters.update((current) => [...current, newCharacter]);
    this.saveToLocalStorage();
    (document.getElementsByName('name')[0] as HTMLInputElement).value = '';
    (document.getElementsByName('age')[0] as HTMLInputElement).value = '';
}
}

saveToLocalStorage(): void {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
}
}
