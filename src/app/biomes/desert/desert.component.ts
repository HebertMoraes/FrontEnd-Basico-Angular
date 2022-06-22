import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Biome } from 'src/app/models/biome';

// declare function PopUpHello(): void;

@Component({
  selector: 'app-desert',
  templateUrl: './desert.component.html',
  styleUrls: ['./desert.component.css']
})
export class DesertComponent implements OnInit {

  allBiomes!: Biome;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getBiomes() {
    this.http.get('http://localhost:3000/biomes').subscribe(biome => console.log(biome));
  }
}