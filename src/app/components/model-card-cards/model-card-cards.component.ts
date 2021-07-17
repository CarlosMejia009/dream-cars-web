import { Component, OnInit } from '@angular/core';
import cardDescription from '../../../assets/json/cars-description.json'


@Component({
  selector: 'app-model-card-cards',
  templateUrl: './model-card-cards.component.html',
  styleUrls: ['./model-card-cards.component.css']
})
export class ModelCardCardsComponent implements OnInit {

  cardsArray: { model: string; photo: string; year: string; brand: string; price: string; }[] = [];

  constructor() {
    this.cardsArray = cardDescription;
  }

  ngOnInit(): void {
  }

}
