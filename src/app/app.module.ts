import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { DesertComponent } from './biomes/desert/desert.component';
import { TaigaComponent } from './biomes/taiga/taiga.component';
import { JungleComponent } from './biomes/jungle/jungle.component';
import { SwampComponent } from './biomes/swamp/swamp.component';
import { CerradoComponent } from './biomes/cerrado/cerrado.component';
import { TundraComponent } from './biomes/tundra/tundra.component';
import { SavannahComponent } from './biomes/savannah/savannah.component';
import { PrairieComponent } from './biomes/prairie/prairie.component';
import { MatNativeDateModule } from '@angular/material/core'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialAllExampleModule } from '../app/material.module';
import { SaharaComponent } from './biomes/desert/locations/sahara/sahara.component';
import { ArabianComponent } from './biomes/desert/locations/arabian/arabian.component';
import { PatagoniaComponent } from './biomes/desert/locations/patagonia/patagonia.component';
import { AtacamaComponent } from './biomes/desert/locations/atacama/atacama.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavBarComponent,
    HomeComponent,
    DesertComponent,
    TaigaComponent,
    JungleComponent,
    SwampComponent,
    CerradoComponent,
    TundraComponent,
    SavannahComponent,
    PrairieComponent,
    SaharaComponent,
    ArabianComponent,
    PatagoniaComponent,
    AtacamaComponent,
  ],
  imports: [

    //esse copiei, tentativa de resolver bug
    CommonModule,

    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule, 
    MaterialAllExampleModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
