import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './nav/nav.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { PumpStatesComponent } from './pump-states/pump-states.component';
import { TankStatesComponent } from './tank-states/tank-states.component';
import { CaisseComponent } from './caisse/caisse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { IncidentPageComponent } from './incident-page/incident-page.component';
import { StocksComponent } from './stocks/stocks.component';
import { ReapproComponent } from './stocks/reappro/reappro.component';
import { AddFournisseurComponent } from './stocks/add-fournisseur/add-fournisseur.component';
import { AddReapproComponent } from './stocks/add-reappro/add-reappro.component';
import { ShowInventoryComponent } from './stocks/show-inventory/show-inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { DatabaseComponent } from './database/database.component';
import { HorairesBoutiqueComponent } from './horaires-boutique/horaires-boutique.component';
import { RessourcesHumainesComponent } from './ressources-humaines/ressources-humaines.component';
import { CartesComponent } from './cartes/cartes.component';
import { IncidentFAQComponent } from './incident-page/incident-faq/incident-faq.component';
import { IncidentReportComponent } from './incident-page/incident-report/incident-report.component';
import { IncidentDailyComponent } from './incident-page/incident-daily/incident-daily.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    NavComponent,
    IncidentsComponent,
    PumpStatesComponent,
    TankStatesComponent,
    CaisseComponent,
    IncidentPageComponent,
    StocksComponent,
    ReapproComponent,
    AddFournisseurComponent,
    AddReapproComponent,
    ShowInventoryComponent,
    DatabaseComponent,
    HorairesBoutiqueComponent,
    RessourcesHumainesComponent,
    CartesComponent,
    IncidentFAQComponent,
    IncidentReportComponent,
    IncidentDailyComponent,
    ComptabiliteComponent
  ],
  imports: [
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient, StocksComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
