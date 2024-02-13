import {Routes} from '@angular/router';
import {PageProduitsComponent} from "./pages/produits/page.produits.component";

export const routes: Routes = [
  {path: 'produits', component: PageProduitsComponent},
  {path: '**', redirectTo: '/produits', pathMatch: 'full'},
];
