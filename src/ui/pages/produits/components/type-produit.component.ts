import {Component, Input, OnInit} from "@angular/core";
import {TypeProduit} from "../../../../domain/produit/type-produit";
import {LibelleTypeProduitPipe} from "../pipe/libelle.type-produit.pipe";

@Component({
  selector: `app-type-produit`,
  standalone: true,
  imports: [LibelleTypeProduitPipe],
  template:
    `
      <span class="badge {{badgeColor}}">{{typeProduit | libelleTypeProduit}}</span>
    `
})
export class TypeProduitComponent implements OnInit {
  @Input()
  typeProduit!: TypeProduit;

  badgeColor!: string;

  ngOnInit(): void {
    this.badgeColor =
      this.typeProduit === TypeProduit.MEDICAMENT
        ? "text-bg-primary"
        : this.typeProduit === TypeProduit.NOURRITURE
          ? "text-bg-success"
          : this.typeProduit === TypeProduit.LIVRE
            ? "text-bg-info"
            : "text-bg-secondary"
  }
}
