import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;  // Material icon name
  svgIcon?: string; // UI Lib icon name
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {

  iconMenu: IMenuItem[] = [
    {
      name: 'HOME',
      type: 'icon',
      tooltip: 'Home',
      icon: 'home',
      state: 'home'
    },
    {
      name: 'PROFILE',
      type: 'icon',
      tooltip: 'Profile',
      icon: 'person',
      state: 'profile/overview'
    },
    {
      name: 'TOUR',
      type: 'icon',
      tooltip: 'Tour',
      icon: 'flight_takeoff',
      state: 'tour'
    },
    {
      type: 'separator',
      name: 'Main Items'
    },
    {
      name: 'Blank',
      type: 'link',
      svgIcon: 'ulb_server',
      state: 'others/blank'
    },
    
    {
      name: 'DOC',
      type: 'extLink',
      tooltip: 'Documentation',
      icon: 'library_books',
      state: 'http://demos.ui-lib.com/egret-doc/'
    },
    {
      name: 'Mantenedor',
      type: 'link',
      svgIcon: 'ulb_server',
      state: 'mantenedor/usuario'
    }
  ];



  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
  constructor() {}

  
  // You can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    
    this.menuItems.next(this.iconMenu);

  }
}
