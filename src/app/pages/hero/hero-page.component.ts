import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
templateUrl: './hero-page.component.html',
// styles: [`
// // styles for the text
// h1 {
//     font-size: 40px;
//     color: linear-gradient(to right, blue, white);
//     text-shadow: 0 0 5px deepskyblue;
//     text-align: left;
//     }
//     //there are some styles for the buttons and i try to make them look nice
// button {
//     font-size: 20px;
//     margin-top: 20px;
//     padding: 10px;
//     border-radius: 5px;
//     cursor: pointer;
//     box-shadow: 0 0 5px 2px deepskyblue;
//     margin: 10px;
//     background: linear-gradient(to right, lightblue, white);
//     border: neonblue solid 2px;
// }
// button:hover {
//     background-color: deepskyblue;

// }


// `],
changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeroPageComponent {
   name = 'Ironman';
   age = 45;
    get capitalizedName(): string {
       return this.name.toUpperCase();
    }

    getHeroDescription(): string {
        return `${this.name} - ${this.age} años`;
    }

    changeHero(): void {
        if (this.name === 'Ironman') {
            this.name = 'Spiderman';
        }
    }

    resetForm(): void {
        this.name = 'Ironman';
        this.age = 45;
    }
}