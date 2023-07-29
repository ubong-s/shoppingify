import { Component } from '@angular/core';
import { INavItem } from '../interfaces/nav-item';

const navItems: INavItem[] = [
  {
    title: 'Items',
    link: 'items',
    icon: '../assets/items_icon.svg',
  },
  {
    title: 'History',
    link: 'history',
    icon: '../assets/history_icon.svg',
  },
  {
    title: 'Statistics',
    link: 'statistics',
    icon: '../assets/statistics_icon.svg',
  },
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  navItems: INavItem[] = navItems;

  constructor() {}
}
