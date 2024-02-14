import {Component} from "@angular/core";
import {ProduitRepository} from "../../../application/produit/produit.repository";
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {CommonModule, NgForOf} from "@angular/common";
import {ProduitComponent} from "./components/produit.component";
import {ProduitAvecPrixTtc} from "../../../domain/produit/produit-ttc";
import {TypeProduit, valeursTypeProduit} from "../../../domain/produit/type-produit";
import {LibelleTypeProduitPipe} from "./pipe/libelle.type-produit.pipe";
import {RouterLink} from "@angular/router";
import {PanierService} from "../../../application/panier/panier.service";

@Component({
  selector: 'app-page-produit',
  templateUrl: 'page.produits.component.html',
  styleUrl: 'page.produits.component.scss',
  imports: [
    NgForOf,
    CommonModule,
    ProduitComponent,
    LibelleTypeProduitPipe,
    RouterLink,
  ],
  standalone: true
})
export class PageProduitsComponent {

  public readonly filtresPossibles: Array<TypeProduit> = valeursTypeProduit;
  public readonly produitsFiltres$: Observable<Array<ProduitAvecPrixTtc>>;
  public readonly nombreProduitsPanier$: Observable<number>;

  private readonly typeProduitSelectionne: BehaviorSubject<TypeProduit | null>;

  constructor(
    private readonly produitRepository: ProduitRepository,
    private readonly panierService: PanierService,
  ) {
    this.typeProduitSelectionne = new BehaviorSubject<TypeProduit | null>(null);

    this.produitsFiltres$ = combineLatest([
      this.typeProduitSelectionne,
      this.produitRepository.recupererTousLesProduits()
    ]).pipe(
      map(([typeProduit, produits]) =>
        // le typeProduit < 0 est un hack des bois
        // ce sera plus facile à expliquer à l'oral
        produits.filter(p => (typeProduit === null || typeProduit < 0) || p.type === typeProduit))
    );

    this.nombreProduitsPanier$ = this.panierService.panier$.pipe(map(p => p.nombreArticles()));
  }

  filtrerParTypeProduit(typeProduit: TypeProduit) {
    this.typeProduitSelectionne.next(typeProduit);
  }

  ajouterAuPanier(produit: ProduitAvecPrixTtc) {
    this.panierService.ajouter(produit);
  }
}
