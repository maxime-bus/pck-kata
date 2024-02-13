import {map, Observable, of} from "rxjs";
import {Produit} from "../../domain/produit/produit";
import {TypeProduit} from "../../domain/produit/type-produit";
import {ProduitRepository} from "../../application/produit/produit.repository";

export class FakeProduitRepository implements ProduitRepository {
  recupererTousLesProduits = (): Observable<Array<Produit>> =>
    of(donneesDuServeur)
      .pipe(
        map(donnees => donnees.map(mapProduitReponseVersReponse))
      );
}

interface ProduitReponse {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  isImported: boolean;
  category: string;
}

function mapProduitReponseVersReponse(pr: ProduitReponse): Produit {
  return new Produit(
    pr.productName,
    pr.price,
    pr.quantity,
    mapCategoryVersTypeProduit(pr.category),
    pr.isImported
  )
}

function mapCategoryVersTypeProduit(category: string): TypeProduit {
  return category === "Food"
    ? TypeProduit.NOURRITURE
    : category === "Medecine"
      ? TypeProduit.MEDICAMENT
      : category === "Books"
        ? TypeProduit.LIVRE
        : TypeProduit.AUTRE;
}

const donneesDuServeur = [
  {
    "id": 1,
    "productName": "Bananas",
    "price": 1.76,
    "quantity": 7,
    "isImported": true,
    "category": "Food"
  },
  {
    "id": 14,
    "productName": "Apple - Fuji",
    "price": 4.37,
    "quantity": 3,
    "isImported": true,
    "category": "Food"
  },
  {
    "id": 17,
    "productName": "Muffin Batt - Carrot Spice",
    "price": 3.84,
    "quantity": 5,
    "isImported": true,
    "category": "Food"
  },
  {
    "id": 6,
    "productName": "Goldschalger",
    "price": 9.71,
    "quantity": 5,
    "isImported": true,
    "category": "Food"
  },
  {
    "id": 13,
    "productName": "Sponge Cake Mix - Chocolate",
    "price": 1.4,
    "quantity": 10,
    "isImported": true,
    "category": "Food"
  },
  {
    "id": 7,
    "productName": "Cheese - Goat",
    "price": 3.81,
    "quantity": 1,
    "isImported": false,
    "category": "Food"
  },
  {
    "id": 18,
    "productName": "Wine - Touraine Azay - Le - Rideau",
    "price": 6.02,
    "quantity": 4,
    "isImported": true,
    "category": "Food"
  },
  {
    "id": 2,
    "productName": "Soup Campbells - Italian Wedding",
    "price": 9.1,
    "quantity": 4,
    "isImported": false,
    "category": "Food"
  },
  {
    "id": 12,
    "productName": "codeine",
    "price": 7.86,
    "quantity": 3,
    "isImported": true,
    "category": "Medecine"
  },
  {
    "id": 5,
    "productName": "Asperin",
    "price": 6.85,
    "quantity": 3,
    "isImported": false,
    "category": "Medecine"
  },
  {
    "id": 15,
    "productName": "Paracetamol",
    "price": 9.5,
    "quantity": 0,
    "isImported": true,
    "category": "Medecine"
  },
  {
    "id": 3,
    "productName": "The Stranger in the Lifeboat",
    "price": 16.38,
    "quantity": 7,
    "isImported": true,
    "category": "Books"
  },
  {
    "id": 11,
    "productName": "The World of the End",
    "price": 14.02,
    "quantity": 9,
    "isImported": false,
    "category": "Books"
  },
  {
    "id": 19,
    "productName": "the power of habit",
    "price": 11.84,
    "quantity": 4,
    "isImported": false,
    "category": "Books"
  },
  {
    "id": 8,
    "productName": "Sapiens",
    "price": 12.61,
    "quantity": 8,
    "isImported": false,
    "category": "Books"
  },
  {
    "id": 16,
    "productName": "USB Flash Drive 64GB",
    "price": 9.18,
    "quantity": 8,
    "isImported": true,
    "category": "Electric"
  },
  {
    "id": 9,
    "productName": "Wireless Keyboard",
    "price": 9.16,
    "quantity": 5,
    "isImported": false,
    "category": "Electric"
  },
  {
    "id": 4,
    "productName": "Dior sauvage 100ml",
    "price": 73.58,
    "quantity": 6,
    "isImported": false,
    "category": "Parfum"
  },
  {
    "id": 10,
    "productName": "Giorgio Armani Acqua Di Gio 100ml",
    "price": 76.32,
    "quantity": 8,
    "isImported": false,
    "category": "Parfum"
  }
]