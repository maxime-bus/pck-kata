import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {ProduitRepository} from "../application/produit/produit.repository";
import {FakeProduitRepository} from "../infrastructure/produit/produit.repository.fake";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide: ProduitRepository, useClass: FakeProduitRepository}
  ]
};
