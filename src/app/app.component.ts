import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  transferir($event) {
    this.service.adicionar($event).subscribe(x => console.log(x));
  }
}
