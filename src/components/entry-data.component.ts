import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css'],
})
export class EntryDataComponent {
  placeholder: string = 'E-mail';
  placepass: string = 'Senha';
  color: string = 'green';
}
