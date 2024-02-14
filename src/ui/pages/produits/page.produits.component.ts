import {Component} from "@angular/core";
import {ProduitRepository} from "../../../application/produit/produit.repository";
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {CommonModule, NgForOf} from "@angular/common";
import {ProduitComponent} from "./components/produit.component";
import {ProduitAvecPrixTtc} from "../../../domain/produit/produit-ttc";
import {TypeProduit, valeursTypeProduit} from "../../../domain/produit/type-produit";
import {LibelleTypeProduitPipe} from "./pipe/libelle.type-produit.pipe";

@Component({
  selector: 'app-page-produit',
  templateUrl: 'page.produits.component.html',
  styleUrl: 'page.produits.component.scss',
  imports: [
    NgForOf,
    CommonModule,
    ProduitComponent,
    LibelleTypeProduitPipe,
  ],
  standalone: true
})
export class PageProduitsComponent {

  public readonly filtresPossibles: Array<TypeProduit> = valeursTypeProduit;
  public readonly produitsFiltres$: Observable<Array<ProduitAvecPrixTtc>>;

  private readonly typeProduitSelectionne: BehaviorSubject<TypeProduit | null>;

  constructor(
    private readonly produitRepository: ProduitRepository,
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
  }

  filtrerParTypeProduit(typeProduit: TypeProduit) {
    this.typeProduitSelectionne.next(typeProduit);
  }
}
