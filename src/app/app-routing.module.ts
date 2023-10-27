import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { IncidentDailyComponent } from './incident-page/incident-daily/incident-daily.component';
import { IncidentReportComponent } from './incident-page/incident-report/incident-report.component';
import { IncidentFAQComponent } from './incident-page/incident-faq/incident-faq.component';
import { CaisseComponent } from './caisse/caisse.component';
import { IncidentPageComponent } from './incident-page/incident-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { AddFournisseurComponent } from './stocks/add-fournisseur/add-fournisseur.component';
import { ShowInventoryComponent } from './stocks/show-inventory/show-inventory.component';
import { AddReapproComponent } from './stocks/add-reappro/add-reappro.component';
import { DatabaseComponent } from './database/database.component';
import { HorairesBoutiqueComponent } from './horaires-boutique/horaires-boutique.component';
import { RessourcesHumainesComponent } from './ressources-humaines/ressources-humaines.component';
import { CartesComponent } from './cartes/cartes.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'home',
  component: LandingPageComponent
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'caisse',
  component: CaisseComponent
},
{
  path: 'incidents',
  component: IncidentPageComponent,
  children: [
    {
      path: '',
      redirectTo: 'FAQ',
      pathMatch: 'full'
    },
    {
      path: 'FAQ',
      component: IncidentFAQComponent
    },
    {
      path: 'report',
      component: IncidentReportComponent
    },
    {
      path: 'daily',
      component: IncidentDailyComponent
    }
  ]
},
{
  path: 'stocks',
  component: StocksComponent,
  children: [
    {
      path: '',
      redirectTo: 'addFournisseur',
      pathMatch: 'full'
    },
    {
      path: 'addFournisseur',
      component: AddFournisseurComponent
    },
    {
      path: 'inventory',
      component: ShowInventoryComponent
    },
    {
      path: 'addReappro',
      component: AddReapproComponent
    }
  ]

},
{
  path: 'database',
  component: DatabaseComponent
},
{
  path:'horaires',
  component: HorairesBoutiqueComponent
},
{
  path:'rh',
  component: RessourcesHumainesComponent
},
{
  path:'cartes',
  component:CartesComponent
},
{
  path:'comptabilite',
  component:ComptabiliteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
