import {Injectable} from "@angular/core";
import {ProduitAvecPrixTtc} from "../../domain/produit/produit-ttc";
import {BehaviorSubject, mergeScan, Observable, of, shareReplay} from "rxjs";
import {Panier} from "../../domain/panier/panier";

type EvenementPanier = (panier: Panier) => Observable<Panier>;

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private readonly evenements$: BehaviorSubject<EvenementPanier>;
  public readonly panier$: Observable<Panier>;

  constructor() {
    this.evenements$ = new BehaviorSubject<EvenementPanier>(_ => of(_));

    this.panier$ = this.evenements$.pipe(
      mergeScan(
        (panier, evenement) => evenement(panier),
        new Panier()
      ),
      shareReplay(1)
    )
  }

  ajouter(produit: ProduitAvecPrixTtc) {
    this.evenements$.next(panier => of(panier.ajouterProduit(produit)));
  }
}
