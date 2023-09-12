import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class App {
  name = 'Angular ' + VERSION.major;
  buttonLabel1: string = 'Teste Parâmetro';
  buttonLabel2: string = 'Parâmetro 2';
  buttonLabel3: string = 'Parâmetro 3';
}
