import {Component} from "@angular/core";
import {ProduitRepository} from "../../../application/produit/produit.repository";
import {Observable} from "rxjs";
import {Produit} from "../../../domain/produit/produit";
import {CommonModule, NgForOf} from "@angular/common";
import {ProduitComponent} from "./components/produit.component";

@Component({
  selector: 'app-page-produit',
  templateUrl: 'page.produits.component.html',
  styleUrl: 'page.produits.component.scss',
  imports: [
    NgForOf,
    CommonModule,
    ProduitComponent
  ],
  standalone: true
})
export class PageProduitsComponent {

  public readonly produits$: Observable<Array<Produit>>;

  constructor(
    private readonly produitRepository: ProduitRepository,
  ) {
    this.produits$ = this.produitRepository.recupererTousLesProduits();
  }
}
