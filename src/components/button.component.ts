import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  @Input() label: string = '';
  buttonText: string = 'Acessar';
  buttonNumber: number = 1;
  buttonArray: string[] = ['Compras', 'Vendas'];
  buttonObject = {
    name: 'Departamento',
    codigo: 1,
  };

  // Declarando funções para serem chamadas pelo componente:
  getAlert(num: number) {
    alert('Olá! Seja bem vindo!\n' + this.label + '\nNúmero: ' + num);
  }
}
