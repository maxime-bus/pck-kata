import {Produit} from "../../domain/produit/produit";
import {map, Observable, of} from "rxjs";
import {TypeProduit} from "../../domain/produit/type-produit";

export abstract class ProduitRepository {
  abstract recupererTousLesProduits(): Observable<Array<Produit>>;
}
