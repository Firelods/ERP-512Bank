import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FournisseurService } from 'src/app/service/fournisseur.service';
import { ProductService } from 'src/app/service/product.service';
import { Produit } from 'src/app/produit';
@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent {
  productProposedList: Produit[] = [];
  productProposed: FormControl = new FormControl('');
  siret: FormControl = new FormControl('');
  name: FormControl = new FormControl('');
  constructor(private fournisseurService: FournisseurService, private productService: ProductService) {
    this.productService.getAllItems().subscribe((data: Produit[]) => {
      this.productProposedList = data;
    });
  }

  addFournisseur() {
    this.fournisseurService.addFournisseur({ idFournisseur: 0, nom: this.name.value, numeroSiret: this.siret.value }, this.productProposed.value).subscribe((data: any) => {
      console.log(data);
    });
  }
}
