import {Component, Input} from "@angular/core";
import {Produit} from "../../../../domain/produit/produit";
import {CommonModule, NgForOf} from "@angular/common";
import {TypeProduitComponent} from "./type-produit.component";

@Component({
  selector: `app-produit`,
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    TypeProduitComponent
  ],
  template:
    `
      <section class="card">
        <div class="card-body">
          <h1 class="card-title h6">
            {{produit.nom}}
          </h1>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row">
              <div class="col">
                Catégorie
              </div>
              <div class="col text-end">
                <app-type-produit [typeProduit]="produit.type"></app-type-produit>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col">
                Quantité
              </div>
              <div class="col text-end">
                {{produit.quantite}}
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col">
                Prix HT
              </div>
              <div class="col text-end">
                {{produit.prix | currency:'€'}}
              </div>
            </div>
          </li>
        </ul>
      </section>
    `
})
export class ProduitComponent {

  @Input()
  public produit!: Produit;
}
