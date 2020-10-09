import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbListModule, NbInputModule, NbIconModule, NbDatepickerModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './shared/nav/nav.component';
import { FourofourComponent } from './shared/fourofour/fourofour.component';
import { NewchevalComponent } from './components/cheval/newcheval/newcheval.component';
import { UpdatechevalComponent } from './components/cheval/updatecheval/updatecheval.component';
import { DeletechevalComponent } from './components/cheval/deletecheval/deletecheval.component';
import { NewcourseComponent } from './components/course/newcourse/newcourse.component';
import { UpdatecourseComponent } from './components/course/updatecourse/updatecourse.component';
import { DeletecourseComponent } from './components/course/deletecourse/deletecourse.component';
import { NewemployeComponent } from './components/employe/newemploye/newemploye.component';
import { UpdateemployeComponent } from './components/employe/updateemploye/updateemploye.component';
import { NewentrainementComponent } from './components/entrainement/newentrainement/newentrainement.component';
import { UpdateentrainementComponent } from './components/entrainement/updateentrainement/updateentrainement.component';
import { DeleteentrainementComponent } from './components/entrainement/deleteentrainement/deleteentrainement.component';
import { NewhistoriqueComponent } from './components/historique/newhistorique/newhistorique.component';
import { UpdatehistoriqueComponent } from './components/historique/updatehistorique/updatehistorique.component';
import { DeletehistoriqueComponent } from './components/historique/deletehistorique/deletehistorique.component';
import { NewproprietaireComponent } from './components/proprietaire/newproprietaire/newproprietaire.component';
import { UpdateproprietaireComponent } from './components/proprietaire/updateproprietaire/updateproprietaire.component';
import { DeleteproprietaireComponent } from './components/proprietaire/deleteproprietaire/deleteproprietaire.component';
import { NewsoinComponent } from './components/soin/newsoin/newsoin.component';
import { DeletesoinComponent } from './components/soin/deletesoin/deletesoin.component';
import { UpdatesoinComponent } from './components/soin/updatesoin/updatesoin.component';
import { NewvaccinComponent } from './components/vaccination/newvaccin/newvaccin.component';
import { UpdatevaccinationComponent } from './components/vaccination/updatevaccination/updatevaccination.component';
import { DeletevaccinationComponent } from './components/vaccination/deletevaccination/deletevaccination.component';
import {ChevalService} from './service/cheval.service';
import {CourseService} from './service/course.service';
import {EmployeService} from './service/employe.service';
import {EntrainementService} from './service/entrainement.service';
import {HistoriqueService} from './service/historique.service';
import {ProprietaireService} from './service/proprietaire.service';
import {SoinService} from './service/soin.service';
import {VaccinationService} from './service/vaccination.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { DetailchevalComponent } from './components/cheval/detailcheval/detailcheval.component';
import { DetailcourseComponent } from './components/course/detailcourse/detailcourse.component';
import { DetailemployeComponent } from './components/employe/detailemploye/detailemploye.component';
import { DetailentrainementComponent } from './components/entrainement/detailentrainement/detailentrainement.component';
import { DetailhistoriqueComponent } from './components/historique/detailhistorique/detailhistorique.component';
import { DetailproprietaireComponent } from './components/proprietaire/detailproprietaire/detailproprietaire.component';
import { DetailsoinComponent } from './components/soin/detailsoin/detailsoin.component';
import { DetailvaccinationComponent } from './components/vaccination/detailvaccination/detailvaccination.component';
import { HomeComponent } from './components/home/home.component';
import { ChevalComponent } from './components/cheval/cheval/cheval.component';
import { CourseComponent } from './components/course/course/course.component';
import { EmployeComponent } from './components/employe/employe/employe.component';
import { EntrainementComponent } from './components/entrainement/entrainement/entrainement.component';
import { HistoriqueComponent } from './components/historique/historique/historique.component';
import { ProprietaireComponent } from './components/proprietaire/proprietaire/proprietaire.component';
import { SoinComponent } from './components/soin/soin/soin.component';
import { VaccinationComponent } from './components/vaccination/vaccination/vaccination.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FourofourComponent,
    NewchevalComponent,
    UpdatechevalComponent,
    DeletechevalComponent,
    NewcourseComponent,
    UpdatecourseComponent,
    DeletecourseComponent,
    NewemployeComponent,
    UpdateemployeComponent,
    NewentrainementComponent,
    UpdateentrainementComponent,
    DeleteentrainementComponent,
    NewhistoriqueComponent,
    UpdatehistoriqueComponent,
    DeletehistoriqueComponent,
    NewproprietaireComponent,
    UpdateproprietaireComponent,
    DeleteproprietaireComponent,
    NewsoinComponent,
    DeletesoinComponent,
    UpdatesoinComponent,
    NewvaccinComponent,
    UpdatevaccinationComponent,
    DeletevaccinationComponent,
    ListComponent,
    DetailchevalComponent,
    DetailcourseComponent,
    DetailemployeComponent,
    DetailentrainementComponent,
    DetailhistoriqueComponent,
    DetailproprietaireComponent,
    DetailsoinComponent,
    DetailvaccinationComponent,
    HomeComponent,
    ChevalComponent,
    CourseComponent,
    EmployeComponent,
    EntrainementComponent,
    HistoriqueComponent,
    ProprietaireComponent,
    SoinComponent,
    VaccinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbListModule,
    NbInputModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    HttpClientModule,
    Ng2SmartTableModule,


  ],
  providers: [
    ChevalService,
    CourseService,
    EmployeService,
    EntrainementService,
    HistoriqueService,
    ProprietaireService,
    SoinService,
    VaccinationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
