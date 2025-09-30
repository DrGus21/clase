import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";

@Component({
templateUrl: './hero-page.component.html',
imports: [UpperCasePipe],
styles: [`
// styles for the text
.btn.btn-primary {
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

.btn.btn-primary:hover {
    background-color: deepskyblue;

}
td, dd {
    // font-size: 40px;
    text-shadow: 0 0 5px deepskyblue;
    color: white;
    text-align: left;
}
h1 {
    font-size: 40px;
    color: white;
    text-shadow: 0 0 5px deepskyblue;
    text-align: left;
    }
`],
changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeroPageComponent {
   name = signal('Ironman');
   age = signal(45);
    capitalizedName = computed(() => {
       return this.name().toUpperCase();
    });

    HeroDescription = computed(() => {
        return `${this.name()} - ${this.age()} años`;
    });

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(22);
        // if (this.name === 'Ironman') {
        //     this.name = 'Spiderman';
        //     this.age = 22;
        // }else if (this.name === 'Spiderman') {
        //     this.name = 'Hulk';
        // }else if (this.name === 'Hulk') {
        //     this.name = 'Thor';
        // }else {
        //     this.name = 'Ironman';
      // }
    }

    resetForm(): void {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge(): void {
        if (this.age() === 45  || this.age() === 22) {
            this.age.set(30);
        }else if (this.age() === 30) {
            this.age.set(18);
        }else if (this.age() === 18) {
            this.age.set(60);
        }else {
            this.age.set(45);
        }
    }

}