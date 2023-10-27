import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProduct: Produit[] = [];


  constructor(private http: HttpClient) {
    this.http.get('http://64.225.109.223/backend/api/items.php').subscribe((data: any) => {
      this.listProduct = data;
    });
  }

  getAllItems() {
    return this.http.get<Produit[]>('http://64.225.109.223/backend/api/items.php');

  }

  modifyItem(item: Produit, column: string, value: string) {
    // make a multi-part form data request to the backend
    var formData = new FormData();
    formData.append('idProduit', item.idProduit.toString());
    formData.append('champ', column);
    formData.append('valeur', value);

    return this.http.post('http://64.225.109.223/backend/api/item/modifier', formData);
  }

  addItem(item: Produit) {
    // make a multi-part form data request to the backend
    var formData = new FormData();
    formData.append('nom', item.nom);
    formData.append('prix', item.prix.toString());
    formData.append('description', "Le meilleur " + item.nom);
    formData.append('quantite', item.quantite.toString());

    return this.http.post('http://64.225.109.223/backend/api/item/ajouter', formData);

  }
}
