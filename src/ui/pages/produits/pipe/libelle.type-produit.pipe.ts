import {Pipe, PipeTransform} from "@angular/core";
import {TypeProduit} from "../../../../domain/produit/type-produit";

@Pipe({
  name: 'libelleTypeProduit',
  standalone: true,
  pure: true
})
export class LibelleTypeProduitPipe implements PipeTransform {
  transform(typeProduit: TypeProduit, ...args: any[]): string {
    return typeProduit === TypeProduit.MEDICAMENT
      ? "Médicament"
      : typeProduit === TypeProduit.NOURRITURE
        ? "Nourriture"
        : typeProduit === TypeProduit.LIVRE
          ? "Livre"
          : "Autre";
  }
}
