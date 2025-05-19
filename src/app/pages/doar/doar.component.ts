import { Component } from '@angular/core';

@Component({
  selector: 'app-doar',
  imports: [],
  templateUrl: './doar.component.html',
  styleUrl: './doar.component.css'
})
export class DoarComponent {
  copiarChavePix() {
    const chave = '52.083.618/0001-66';
    navigator.clipboard.writeText(chave).then(() => {
      alert('Chave PIX copiada com sucesso!');
    }).catch(() => {
      alert('Erro ao copiar a chave PIX.');
    });
  }


}
