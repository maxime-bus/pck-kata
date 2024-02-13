import {Component, Input, OnInit} from "@angular/core";
import {TypeProduit} from "../../../../domain/produit/type-produit";

@Component({
  selector: `app-type-produit`,
  standalone: true,
  template:
    `
      <span class="badge {{badgeColor}}">{{libelle}}</span>
    `
})
export class TypeProduitComponent implements OnInit {
  @Input()
  typeProduit!: TypeProduit;

  libelle!: string;
  badgeColor!: string;

  ngOnInit(): void {
    this.libelle =
      this.typeProduit === TypeProduit.MEDICAMENT
        ? "Médicament"
        : this.typeProduit === TypeProduit.NOURRITURE
          ? "Nourriture"
          : this.typeProduit === TypeProduit.LIVRE
            ? "Livre"
            : "Autre"

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
