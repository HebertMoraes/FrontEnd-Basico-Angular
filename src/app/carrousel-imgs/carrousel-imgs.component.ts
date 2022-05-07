import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function TesteCarrousel():void;
declare function SkipSlideLeft():void;
declare function SkipSlideRight():void;


@Component({
  selector: 'app-carrousel-imgs',
  templateUrl: './carrousel-imgs.component.html',
  styleUrls: ['./carrousel-imgs.component.css']
})
export class CarrouselImgsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (<HTMLInputElement>document.getElementById("radio1")).checked = true;

    setInterval(TesteCarrousel, 2000);
  }

  SkipSlide(leftOrRight: -1 | 1){
    if (leftOrRight === -1) {
      SkipSlideLeft();
    }
    if (leftOrRight === 1) {
      SkipSlideRight();
    }
  };

}
