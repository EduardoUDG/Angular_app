import { Component, OnInit } from '@angular/core';

interface NavItem {
  title:  string;
  url:   string;
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
    { title:'Home',     url: '/' },
    { title:'Projects', url: 'projects' },
    { title:'Forms',    url: 'forms' },
    { title:'Charts',   url: 'charts' },
    { title:'Products', url: 'products' },
    { title:'Tags',     url: 'tags' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
