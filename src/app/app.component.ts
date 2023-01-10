import { Component } from '@angular/core';
import { faker } from "@faker-js/faker";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.word();
  enteredText = "";
  isSolved = false;

  onInput(event: any) {
    this.enteredText = event.target.value;
    this.isSolved = this.enteredText === this.randomText;
  }

  getClass(letter: string, enteredTextAtI: string) {
    if (!enteredTextAtI)
      return "pendingText";
    else if (letter === enteredTextAtI)
      return "correctText";
    else
      return "errorText";
  }
}
