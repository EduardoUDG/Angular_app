import { Component, OnInit } from '@angular/core';

interface NavItem {
  title:  string;
  url:    string;
  exact:  boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    li:hover {
      cursor: pointer;
    }
  `]
})
export class NavbarComponent implements OnInit {

  navItems: NavItem[] = [
    { title:'Home',         url: '/',         exact: true},
    { title:'Projects',     url: 'projects',  exact: false},
    { title:'Forms',        url: 'forms',     exact: false},
    // TODO Pendiente a implementar
    // { title:'Charts',       url: 'charts',    exact: false},
    // { title:'Products',     url: 'products',  exact: false},
    // { title:'Tags',         url: 'tags',      exact: false},
    { title:'Observables',  url: 'observables',      exact: false},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
