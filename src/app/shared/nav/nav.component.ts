import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items : NbMenuItem [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {link : '/home', title : "home", icon : 'home'},

      {link : '/cheval', title : 'Chevaux', icon : 'sun-outline', children : [
        {link : '/cheval/detailcheval', title : 'Liste de chevaux'},
        {link : '/cheval/newcheval', title : 'Ajouter un cheval'},
        {link : '/cheval/updatecheval', title : 'Mettre un cheval a jour'},
        {link : '/cheval/deletecheval', title : 'Supprimer un cheval'}
      ]},
      {link : '/course', title : 'Courses', icon : 'award-outline', children : [
        {link : '/course/detailcourse', title : "Liste des courses"},
        {link : '/course/newcourse', title : "Ajouter une course"},
        {link : '/course/updatecourse', title : "Mettre une course a jour"},
        {link : '/course/deletecourse', title : "Supprimer une course"},
      ]},

      {link : '/employe', title : 'Employés', icon : 'people-outline', children : [
        {link : '/employe/detailemploye', title : "Liste des employés"},
        {link : '/employe/newemploye', title : "Ajouter un employé"},
        {link : '/employe/updateemploye', title : "Mettre un employé a jour"},
      ]},

      {link : '/entrainement', title : 'Entrainements', icon : 'shield-outline', children : [
        {link : '/entrainement/detailentrainement', title : 'Liste des entrainements'},
        {link : '/entrainement/newentrainement', title : 'Ajouter un entrainement'},
        {link : '/entrainement/updateentrainement', title : 'Mettre un entrainement a jour'},
      ]},
      {link : '/soin', title : 'Soins', icon : 'thermometer-outline', children : [
        {link : '/soin/detailsoin', title : 'Liste des soins'},
        {link : '/soin/newsoin', title : 'Ajouter un soin'},
        {link : '/soin/updatesoin', title : 'Mettre un soin a jour'},
        {link : '/soin/deletesoin', title : 'Supprimer un soin'},
      ]},
      {link : '/proprietaire', title : 'Proprietaires', icon : 'briefcase-outline', children : [
        {link : '/proprietaire/detailproprietaire', title : 'Liste des proprietaires'},
        {link : '/proprietaire/newproprietaire', title : 'Ajouter un proprietaire'},
        {link : '/proprietaire/updateproprietaire', title : 'Mettre un proprietaire a jour'},
        {link : '/proprietaire/deleteproprietaire', title : 'Supprimer un proprietaire'},
      ]},
      {link : '/historique', title : 'historique', icon : 'book-open-outline', children : [
        {link : '/historique/detailhistorique', title : 'Liste historique des chevaux'},
        {link : '/historique/newhistorique', title : 'Nouvel historique'},
        {link : '/historique/updatehistorique', title : 'Mettre un historique a jour'},
        {link : '/historique/deletehistorique', title : 'Supprimer un historique'},

      ]
    },
    {link :'/vaccination', title : 'vaccination', icon : 'color-picker-outline', children : [
      {link : '/vaccination/detailvaccination', title : 'Liste des vaccins'},
      {link : '/vaccination/newvaccination', title : 'Ajouter un vaccin'},
      {link : '/vaccination/updatevaccination', title : 'Mettre un vaccin a jour'},
      {link : '/vaccination/deletevaccination', title : 'Supprimer une vaccination'},
    ]

     }
    ]
  }

}
