import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChevalComponent } from './components/cheval/cheval/cheval.component';
import { DeletechevalComponent } from './components/cheval/deletecheval/deletecheval.component';
import { DetailchevalComponent } from './components/cheval/detailcheval/detailcheval.component';
import { NewchevalComponent } from './components/cheval/newcheval/newcheval.component';
import { UpdatechevalComponent } from './components/cheval/updatecheval/updatecheval.component';
import { CourseComponent } from './components/course/course/course.component';
import { DeletecourseComponent } from './components/course/deletecourse/deletecourse.component';
import { DetailcourseComponent } from './components/course/detailcourse/detailcourse.component';
import { NewcourseComponent } from './components/course/newcourse/newcourse.component';
import { UpdatecourseComponent } from './components/course/updatecourse/updatecourse.component';
import { DetailemployeComponent } from './components/employe/detailemploye/detailemploye.component';
import { EmployeComponent } from './components/employe/employe/employe.component';
import { NewemployeComponent } from './components/employe/newemploye/newemploye.component';
import { UpdateemployeComponent } from './components/employe/updateemploye/updateemploye.component';
import { DetailentrainementComponent } from './components/entrainement/detailentrainement/detailentrainement.component';
import { EntrainementComponent } from './components/entrainement/entrainement/entrainement.component';
import { NewentrainementComponent } from './components/entrainement/newentrainement/newentrainement.component';
import { UpdateentrainementComponent } from './components/entrainement/updateentrainement/updateentrainement.component';
import { DeletehistoriqueComponent } from './components/historique/deletehistorique/deletehistorique.component';
import { DetailhistoriqueComponent } from './components/historique/detailhistorique/detailhistorique.component';
import { HistoriqueComponent } from './components/historique/historique/historique.component';
import { NewhistoriqueComponent } from './components/historique/newhistorique/newhistorique.component';
import { UpdatehistoriqueComponent } from './components/historique/updatehistorique/updatehistorique.component';
import { HomeComponent } from './components/home/home.component';
import { DeleteproprietaireComponent } from './components/proprietaire/deleteproprietaire/deleteproprietaire.component';
import { DetailproprietaireComponent } from './components/proprietaire/detailproprietaire/detailproprietaire.component';
import { NewproprietaireComponent } from './components/proprietaire/newproprietaire/newproprietaire.component';
import { ProprietaireComponent } from './components/proprietaire/proprietaire/proprietaire.component';
import { UpdateproprietaireComponent } from './components/proprietaire/updateproprietaire/updateproprietaire.component';
import { DeletesoinComponent } from './components/soin/deletesoin/deletesoin.component';
import { DetailsoinComponent } from './components/soin/detailsoin/detailsoin.component';
import { NewsoinComponent } from './components/soin/newsoin/newsoin.component';
import { SoinComponent } from './components/soin/soin/soin.component';
import { UpdatesoinComponent } from './components/soin/updatesoin/updatesoin.component';
import { DeletevaccinationComponent } from './components/vaccination/deletevaccination/deletevaccination.component';
import { DetailvaccinationComponent } from './components/vaccination/detailvaccination/detailvaccination.component';
import { NewvaccinComponent } from './components/vaccination/newvaccin/newvaccin.component';
import { UpdatevaccinationComponent } from './components/vaccination/updatevaccination/updatevaccination.component';
import { VaccinationComponent } from './components/vaccination/vaccination/vaccination.component';
import { FourofourComponent } from './shared/fourofour/fourofour.component';

const routes: Routes = [


  {path : 'home', component : HomeComponent},

  {path : 'course', component : CourseComponent, children : [
    {path : 'detailcourse', component : DetailcourseComponent},
    {path : 'newcourse', component : NewcourseComponent},
    {path : 'updatecourse', component : UpdatecourseComponent},
    {path : 'deletecourse', component : DeletecourseComponent},
  ]},


  {path : 'cheval', component : ChevalComponent, children : [
    {path : 'detailcheval', component : DetailchevalComponent},
    {path : 'newcheval', component : NewchevalComponent },
    {path : 'updatecheval', component : UpdatechevalComponent},
    {path : 'deletecheval', component : DeletechevalComponent},
  ]},


  {path : 'employe', component : EmployeComponent, children : [
    {path : 'detailemploye', component : DetailemployeComponent},
    {path : 'newemploye', component : NewemployeComponent},
    {path : 'updateemploye', component : UpdateemployeComponent},
  ]},

  {path : 'entrainement', component : EntrainementComponent, children : [
    {path : 'detailentrainement', component : DetailentrainementComponent},
    {path : 'newentrainement', component : NewentrainementComponent },
    {path : 'updateentrainement', component : UpdateentrainementComponent},
  ]},

  {path : 'proprietaire', component : ProprietaireComponent, children : [
    {path : 'detailproprietaire', component : DetailproprietaireComponent},
    {path : 'newproprietaire', component : NewproprietaireComponent},
    {path : 'updateproprietaire', component : UpdateproprietaireComponent},
    {path : 'deleteproprietaire', component : DeleteproprietaireComponent},
  ]},

  {path : 'soin', component : SoinComponent, children : [
    {path : 'detailsoin', component : DetailsoinComponent},
    {path : 'newsoin', component : NewsoinComponent},
    {path : 'updatesoin', component : UpdatesoinComponent},
    {path : 'deletesoin', component : DeletesoinComponent},
  ]},

  {path : 'vaccination', component : VaccinationComponent, children : [
    {path : 'detailvaccination', component : DetailvaccinationComponent},
    {path : 'newvaccination', component : NewvaccinComponent},
    {path : 'updatevaccination', component : UpdatevaccinationComponent},
    {path : 'deletevaccination', component : DeletevaccinationComponent},
  ]},

  {path : 'historique', component : HistoriqueComponent, children : [
    {path : 'detailhistorique', component : DetailhistoriqueComponent},
    {path : 'newhistorique', component : NewhistoriqueComponent},
    {path : 'updatehistorique', component : UpdatehistoriqueComponent},
    {path : 'deletehistorique', component : DeletehistoriqueComponent},
  ]},


  {path : 'notfound', component : FourofourComponent},
  {path : '**', redirectTo : '/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
