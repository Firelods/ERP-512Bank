import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Fournisseur } from 'src/app/fournisseur';
import { Produit } from 'src/app/produit';
import { FournisseurService } from 'src/app/service/fournisseur.service';
import { ProductService } from 'src/app/service/product.service';
import { ReapproService } from 'src/app/service/reappro.service';
import { StocksComponent } from '../stocks.component';

@Component({
  selector: 'app-add-reappro',
  templateUrl: './add-reappro.component.html',
  styleUrls: ['./add-reappro.component.css']
})
export class AddReapproComponent {
  productProposedList: Produit[] = [];
  fournisseurList: Fournisseur[] = [];
  globalProductList: Produit[] = [];
  globalFournisseurList: Fournisseur[] = [];
  productProposed: FormControl = new FormControl('');
  fournisseur: FormControl = new FormControl('');
  constructor(private fournisseurService: FournisseurService, private productService: ProductService, private reapproService: ReapproService, private stockComponent: StocksComponent) {
    this.productService.getAllItems().subscribe((data: Produit[]) => {
      this.productProposedList = data;
      this.globalProductList = data;
    });
    this.fournisseurService.getAllFournisseurs().subscribe((data: Fournisseur[]) => {
      this.fournisseurList = data;
      this.globalFournisseurList = data;
      console.log(this.fournisseurList);

    });
    this.fournisseur.valueChanges.subscribe(x => {
      console.log('fournisseur value changed')
      console.log(x);


      this.fournisseurService.getProductOfFournisseur(x).subscribe((data: any) => {
        var listIdProduct: number[] = [];
        console.log(data);

        for (var i = 0; i < data.length; i++) {
          listIdProduct.push(data[i].idProduit);
        }
        this.productProposedList = this.globalProductList.filter(x => listIdProduct.includes(x.idProduit));
      });
    });
    this.productProposed.valueChanges.subscribe(x => {
      console.log('fournisseur value changed')
      console.log(x);

      this.fournisseurService.getFournisseurOfProduct(x).subscribe((data: any) => {
        var listIdFournisseur: number[] = [];
        for (var i = 0; i < data.length; i++) {
          listIdFournisseur.push(data[i].idFournisseur);
        }
        this.fournisseurList = this.globalFournisseurList.filter(x => listIdFournisseur.includes(x.idFournisseur));
      });
    })
  }

  addReappro() {
    var quantite = document.getElementById("quantity") as HTMLInputElement;
    var montant = document.getElementById("amount") as HTMLInputElement;
    this.reapproService.addReappro({ etat: "encours", nomFournisseur: this.fournisseur.value.toString(), nomProduit: this.productProposed.value.toString(), quantite: parseInt(quantite.value), montant: parseFloat(montant.value) }).subscribe((data: any) => {
      console.log(data);
      this.stockComponent.ngOnInit();
    });
  }

}
