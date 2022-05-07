import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function PopUpHello(): void;

declare function LoadTableData(): void;

@Component({
  selector: 'app-desert',
  templateUrl: './desert.component.html',
  styleUrls: ['./desert.component.css']
})
export class DesertComponent implements OnInit {

  eventDataRaw = [
    { location: "Arabian", biome: "Desert" },
    { location: "Saara", biome: "Desert" }
  ];

  public assetsFolder = '../../../assets/biomes/desert/';

  constructor() { }

  ngOnInit(): void {
    // LoadTableData(this.eventDataRaw);
  }
}