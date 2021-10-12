import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase02';
  estado:boolean = true;

  actualizarEstado(e:boolean){
    this.estado=e;
    alert(this.estado);
  }
}

