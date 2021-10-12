import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() estado: EventEmitter<boolean> = new EventEmitter();
  user:string="";
  pass:string="";


  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado(e:boolean){
    if (this.user==='josue' && this.pass==='123') {
      this.estado.emit(e);
    }
  }

}
