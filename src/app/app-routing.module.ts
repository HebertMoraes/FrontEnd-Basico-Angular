import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerradoComponent } from './biomes/cerrado/cerrado.component';
import { DesertComponent } from './biomes/desert/desert.component';
import { ArabianComponent } from './biomes/desert/locations/arabian/arabian.component';
import { AtacamaComponent } from './biomes/desert/locations/atacama/atacama.component';
import { PatagoniaComponent } from './biomes/desert/locations/patagonia/patagonia.component';
import { SaharaComponent } from './biomes/desert/locations/sahara/sahara.component';
import { JungleComponent } from './biomes/jungle/jungle.component';
import { PrairieComponent } from './biomes/prairie/prairie.component';
import { SavannahComponent } from './biomes/savannah/savannah.component';
import { SwampComponent } from './biomes/swamp/swamp.component';
import { TaigaComponent } from './biomes/taiga/taiga.component';
import { TundraComponent } from './biomes/tundra/tundra.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'desert', component: DesertComponent}, 
  { path: 'desert/arabian', component: ArabianComponent}, 
  { path: 'desert/atacama', component: AtacamaComponent}, 
  { path: 'desert/patagonia', component: PatagoniaComponent}, 
  { path: 'desert/sahara', component: SaharaComponent}, 
  { path: 'taiga', component: TaigaComponent},
  { path: 'jungle', component: JungleComponent},
  { path: 'swamp', component: SwampComponent},
  { path: 'cerrado', component: CerradoComponent},
  { path: 'tundra', component: TundraComponent},
  { path: 'savannah', component: SavannahComponent},
  { path: 'prairie', component: PrairieComponent},
  { path: 'favorites', component: FavoritesComponent},
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
