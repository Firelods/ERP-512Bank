import { ReapproService } from 'src/app/service/reappro.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Reappro } from 'src/app/reappro';
import { StocksComponent } from '../stocks.component';

@Component({
  selector: 'app-reappro',
  templateUrl: './reappro.component.html',
  styleUrls: ['./reappro.component.css']
})
export class ReapproComponent {
  @Input()
  reappro: Reappro = {
    dateCommande: '',
    dateReception: '',
    nomFournisseur: '',
    nomProduit: '',
    etat: '',
  };

  constructor(private http: ReapproService,private stockComponent: StocksComponent) { }
  deleteReappro(nomFournisseur:string,nomProduit:string) : void
  {
    console.log(nomFournisseur, nomProduit);
    this.http.deleteReappro(nomFournisseur, nomProduit).subscribe((data : any)=>{
      console.log(data.status);
      if(data.status==false)
      {
        alert(data.message);
      }
      else{
        this.stockComponent.ngOnInit();
      }

    })
  }
  changeState(nomFournisseur:string,nomProduit:string,state:string) :void
  {
    let etat:number = 0
    if(state=="inProgress")etat=1;
    else if (state=="done")etat=-1;
    else etat=0;
    console.log(etat);

    this.http.changeState(nomFournisseur,nomProduit,etat).subscribe((data:any)=>{
      console.log(data);
      if(data.status)
      {
        this.stockComponent.ngOnInit();
      }
      else{
        alert(data.message);
      }
    })
  }
}
