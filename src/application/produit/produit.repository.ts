import {Observable} from "rxjs";
import {ProduitAvecPrixTtc} from "../../domain/produit/produit-ttc";

export abstract class ProduitRepository {
  abstract recupererTousLesProduits(): Observable<Array<ProduitAvecPrixTtc>>;
}
