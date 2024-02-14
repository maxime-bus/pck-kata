import {Routes} from '@angular/router';
import {PageProduitsComponent} from "./pages/produits/page.produits.component";
import {PagePanierComponent} from "./pages/panier/page.panier.component";

export const routes: Routes = [
  {path: 'produits', component: PageProduitsComponent},
  {path: 'panier', component: PagePanierComponent},
  {path: '**', redirectTo: '/produits', pathMatch: 'full'},
];
