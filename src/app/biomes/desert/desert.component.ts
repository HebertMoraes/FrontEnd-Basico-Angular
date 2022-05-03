import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function PopUpHello():void;

@Component({
  selector: 'app-desert',
  templateUrl: './desert.component.html',
  styleUrls: ['./desert.component.css']
})
export class DesertComponent implements OnInit {

  public assetsFolder = '../../../assets/biomes/desert/';
  
  constructor() {}

  ngOnInit(): void {
    
  }
}
