import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  listTitles = [
    {
      trailler: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: '/assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia 1',
      relevance: 98,
      age: 0,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
    },
    {
      trailler: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: '/assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia 2',
      relevance: 76,
      age: 12,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
    },
    {
      trailler: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: '/assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia 3',
      relevance: 18,
      age: 18,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
    }
  ]

}
