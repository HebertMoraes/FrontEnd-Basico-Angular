import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public assetsFolder = '../../assets/home';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  selectBiome(routeToGo: string) {
    this.router.navigate([routeToGo]);
  }
}
