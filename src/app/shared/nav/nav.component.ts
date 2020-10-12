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
      ]},
      {link : '/course', title : 'Courses', icon : 'award-outline', children : [
        {link : '/course/detailcourse', title : "Liste des courses"},
      ]},

      {link : '/employe', title : 'Employés', icon : 'people-outline', children : [
        {link : '/employe/detailemploye', title : "Liste des employés"},
      ]},

      {link : '/entrainement', title : 'Entrainements', icon : 'shield-outline', children : [
        {link : '/entrainement/detailentrainement', title : 'Liste des entrainements'},
      ]},
      {link : '/soin', title : 'Soins', icon : 'thermometer-outline', children : [
        {link : '/soin/detailsoin', title : 'Liste des soins'},
      ]},
      {link : '/proprietaire', title : 'Proprietaires', icon : 'briefcase-outline', children : [
        {link : '/proprietaire/detailproprietaire', title : 'Liste des proprietaires'},
      ]},
      {link : '/historique', title : 'historique', icon : 'book-open-outline', children : [
        {link : '/historique/detailhistorique', title : 'Liste historique des chevaux'},

      ]
    },
    {link :'/vaccination', title : 'vaccination', icon : 'color-picker-outline', children : [
      {link : '/vaccination/detailvaccination', title : 'Liste des vaccins'},
    ]

     }
    ]
  }

}
