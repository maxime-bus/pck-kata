import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {PanierService} from "../../../application/panier/panier.service";
import {Panier} from "../../../domain/panier/panier";
import {Observable} from "rxjs";
import {CommonModule, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: `app-page-panier`,
  templateUrl: `page.panier.component.html`,
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    CommonModule
  ],
  standalone: true
})
export class PagePanierComponent {
  public readonly panier$: Observable<Panier>;

  constructor(private readonly panierService: PanierService) {
    this.panier$ = this.panierService.panier$;
  }
}
