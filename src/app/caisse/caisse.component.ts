import { CartService } from './../service/cart.service';
import { Component } from '@angular/core';
import { Incident } from '../incident';
import { Cart } from '../cart';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.css'],
})
export class CaisseComponent {
  listIncidents: Incident[] = [];
  inputValue: string = '';
  produitVide: string[] = [];
  cart: Cart = { listeProduits: [], montant: 0 };
  loading: boolean = false;
  validate: boolean = false;
  constructor(private productService: ProductService, private cartService :CartService) { }
  ngOnInit(): void {
    this.listIncidents.push({
      id: 1,
      title: 'Incident 1',
      description: "Description de l'incident 1",
      date: new Date(),
      heure: '10:00',
      type: 'Feu',
    });
    this.listIncidents.push({
      id: 2,
      title: 'Incident 2',
      description: "Description de l'incident 2",
      date: new Date(),
      heure: '10:00',
      type: 'Basic',
    });
    this.listIncidents.push({
      id: 3,
      title: 'Incident 3',
      description: "Description de l'incident 3",
      date: new Date(),
      heure: '10:00',
      type: 'Important',
    });
    this.listIncidents.push({
      id: 4,
      title: 'Incident 4',
      description: "Description de l'incident 4",
      date: new Date(),
      heure: '10:00',
      type: 'Feu',
    });
    // shuffle the list of incidents
    for (var i = this.listIncidents.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.listIncidents[i];
      this.listIncidents[i] = this.listIncidents[j];
      this.listIncidents[j] = temp;
    }
  }

  onButtonClicked(value: string) {
    if (value == '') {
      this.inputValue = this.inputValue.slice(0, -1);
    }
    this.inputValue += value;
  }
  checkboxClicked(event: any) {
    var checkboxes = document.getElementsByName('checkbox');
    var checked = false;
    for (var i = 0; i < checkboxes.length; i++) {
      if ((checkboxes[i] as HTMLInputElement).checked) {
        if (
          (checkboxes[i] as HTMLInputElement) ==
          event.target.previousElementSibling
        ) {
          event.target.previousElementSibling.checked = false;
          return;
        }
        checked = true;
        event.preventDefault();
        return;
      }
    }
    if (!checked) {
      event.target.previousElementSibling.checked = true;
      event.preventDefault();
    } else {
      event.preventDefault();
    }
  }

  validateProduit() {
    // check if the id product of input is present in the list of products
    var trouve = null;
    for (var i = 0; i < this.productService.listProduct.length; i++) {
      if (
        this.productService.listProduct[i].idProduit ==
        parseInt(this.inputValue)
      ) {
        trouve = this.productService.listProduct[i];
        break;
      }
    }
    if (trouve) {
      // add the product to the cart if it is not already present
      var trouve2 = -1;
      for (var i = 0; i < this.cart.listeProduits.length; i++) {
        if (this.cart.listeProduits[i].produit.idProduit == trouve.idProduit) {
          trouve2 = i;
          console.log('produit déjà présent');

          break;
        }
      }
      console.log(trouve2);

      if (trouve2 == -1) {
        this.cart.listeProduits.push({ produit: trouve, quantity: 1 });
      } else {
        console.log('donc on incrémente');

        this.cart.listeProduits[trouve2].quantity++;
      }
      // update total
      this.cart.montant = this.cart.listeProduits.reduce(
        (total, item) => total + item.produit.prix * item.quantity,
        0
      );
      this.cart.montant = Math.round(this.cart.montant * 100) / 100;
    }
    this.inputValue = '';
  }

  deleteProduct(id: number) {
    var trouve = -1;
    for (var i = 0; i < this.cart.listeProduits.length; i++) {
      if (this.cart.listeProduits[i].produit.idProduit == id) {
        trouve = i;
        break;
      }
    }
    if (trouve != -1) {
      console.log('produit trouvé');
      if (this.cart.listeProduits[trouve].quantity > 1) {
        console.log('donc on décrémente');
        this.cart.listeProduits[trouve].quantity--;
      } else {

        this.cart.listeProduits.splice(trouve, 1);
      }
      this.cart.montant = this.cart.listeProduits.reduce(
        (total, item) => total + item.produit.prix * item.quantity,
        0
      );
      this.cart.montant = Math.round(this.cart.montant * 100) / 100;
    }
  }
  validatePaiement() {
    console.log('paiement validé');
    if (this.cart.montant == 0) {
      return;
    }

    this.cartService.addCart(this.cart).subscribe((data: any)=>{
      if(data.status==false)
      {
        this.produitVide.push(data.item);
      }else{
        this.showPopup();
        this.viderPanier();
      }
    });

  }

  showPopup(): void {
    this.loading = true;
    // random time between 1 and 3 seconds
    setTimeout(() => {
      this.loading = false;
      this.validate = true;
      setTimeout(() => {
        this.validate = false;
      }, 4000);
    }, Math.floor(Math.random() * 2000) + 1000);
  }
  viderPanier() {
    this.cart.listeProduits = [];
    this.cart.montant = 0;
  }

  essenceInCart(): boolean {
    var cpt = 0;
    var trouve = false;
    for (var i = 0; i < this.cart.listeProduits.length; i++) {
      if (this.cart.listeProduits[i].produit.nom == "Essence" || this.cart.listeProduits[i].produit.nom == "Hydrocarbure" || this.cart.listeProduits[i].produit.nom == "Gasoil" || this.cart.listeProduits[i].produit.nom == "Batterie") {
        cpt++;
        trouve = true;
      }
    }
    if (trouve) {
      return cpt == this.cart.listeProduits.length;
    }
    return false;
  }
}
