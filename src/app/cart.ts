import { Produit } from "./produit";

export interface Cart {
  listeProduits: { produit: Produit, quantity: number }[];
  montant: number;
}
