import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data = [
    {
      dia: "6 de Noviembre",
      anio: "2022",
      imagen: "uno.jpeg"
    },
    {
      dia: "11 de Noviembre",
      anio: "2022",
      imagen: "dos.jpeg"
    },
    {
      dia: "13 de Noviembre",
      anio: "2022",
      imagen: "tres.mp4"
    },
    
  ]
}
