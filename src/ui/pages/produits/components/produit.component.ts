import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {CommonModule, NgForOf} from "@angular/common";
import {TypeProduitComponent} from "./type-produit.component";
import {ProduitAvecPrixTtc} from "../../../../domain/produit/produit-ttc";

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
            {{produitAvecPrixTtc.nom}}
          </h1>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row">
              <div class="col">
                Catégorie
              </div>
              <div class="col text-end">
                <app-type-produit [typeProduit]="produitAvecPrixTtc.type"></app-type-produit>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col">
                Quantité
              </div>
              <div class="col text-end">
                {{produitAvecPrixTtc.quantite}}
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col">
                Prix HT
              </div>
              <div class="col text-end">
                {{produitAvecPrixTtc.prixHt | currency:'€'}}
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col">
                Prix TTC
              </div>
              <div class="col text-end">
                {{produitAvecPrixTtc.prixTtc | currency:'€'}}
              </div>
            </div>
          </li>
        </ul>
        <div class="card-body">
          <button type="button" class="btn btn-success me-3" [disabled]="produitIndisponible"
                  (click)="emitAjouterAuPanier()">Ajouter au panier
          </button>
          <small *ngIf="produitIndisponible">Non disponible</small>
        </div>
      </section>
    `
})
export class ProduitComponent implements OnInit {

  @Input()
  public produitAvecPrixTtc!: ProduitAvecPrixTtc;
  public produitIndisponible!: boolean;

  @Output()
  public ajouterAuPanier: EventEmitter<ProduitAvecPrixTtc> = new EventEmitter<ProduitAvecPrixTtc>();

  ngOnInit(): void {
    this.produitIndisponible = this.produitAvecPrixTtc.quantite === 0;
  }

  emitAjouterAuPanier() {
    this.ajouterAuPanier.emit(this.produitAvecPrixTtc);
  }
}
