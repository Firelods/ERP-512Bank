import { Component } from '@angular/core';
import { Reappro } from '../reappro';
import { Router } from '@angular/router';
import { ReapproService } from '../service/reappro.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent {
  listReappro: Reappro[] = [];
  constructor(public router: Router, private reapproService: ReapproService) {


  }
  ngOnInit(): void {
    this.listReappro = [];
    this.reapproService.getAllReappro().subscribe((data: Reappro[]) => {
      // for each data make a new property called "etat" and set it to "inProgress" if the dateReception is empty, otherwise set it to "done"
      for (let i = 0; i < data.length; i++) {
        if (parseInt(data[i].etat) == 0) {
          data[i].etat = 'inProgress';
        } else if (parseInt(data[i].etat) == 1) {
          data[i].etat = 'done';
        }
        else {
          data[i].etat = 'canceled';
        }
      }

      this.listReappro = data;

    });
  }
  route(): string {
    return this.router.url.slice(8);
  }
}
