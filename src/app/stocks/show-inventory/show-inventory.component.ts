import { Component } from '@angular/core';
import { Produit } from 'src/app/produit';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-show-inventory',
  templateUrl: './show-inventory.component.html',
  styleUrls: ['./show-inventory.component.css']
})
export class ShowInventoryComponent {
  listProduct: Produit[] = [];

  constructor(private productService: ProductService) {
    this.productService.getAllItems().subscribe((data: any) => {
      this.listProduct = data;
      console.log(this.listProduct);
      // for each item in the list, add a new property called "prixVente" and set it to the prix *  random number between 0.9 and 1.1 and round it to 2 decimal places
      for (let i = 0; i < this.listProduct.length; i++) {
        this.listProduct[i].prixVente = parseFloat((this.listProduct[i].prix * (Math.random() * 0.2 + 1)).toFixed(2));
      }
    });


  }

  changeName(i: number, target: any) {
    this.listProduct[i].nom = target.value;
    this.productService.modifyItem(this.listProduct[i], 'nom', target.value).subscribe((data: any) => {
      console.log(data);
    });

  }

  changePrice(i: number, target: any) {
    this.listProduct[i].prix = target.value;
    this.productService.modifyItem(this.listProduct[i], 'prix', target.value).subscribe((data: any) => {
      console.log(data);
    });
  }

  addProduct(event: any) {

    var priceInput = document.getElementById("priceInput") as HTMLInputElement;
    var nameInput = document.getElementById("nameInput") as HTMLInputElement;
    var quantityInput = document.getElementById("quantityProduct") as HTMLInputElement;
    if (priceInput && nameInput && nameInput.value != '' && priceInput.value != '' && nameInput.value.length > 2) {
      var newProduct: Produit = {
        idProduit: -1,
        nom: nameInput.value,
        prix: parseFloat(priceInput.value),
        prixVente: parseFloat(priceInput.value),
        quantite: parseInt(quantityInput.value)
      };
      this.productService.addItem(newProduct).subscribe((data: any) => {
        console.log(data);
        this.listProduct.push(data);
      });
    }

  }
}
