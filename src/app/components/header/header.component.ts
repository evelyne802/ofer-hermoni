import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  contactMenuBtnClass: string = 'contact-menu';
  dropdownMenuClass: string = 'dropdown-content';
  menuItemsClass: string = 'menu-item';


  openMenu(){
    this.dropdownMenuClass = 'visible-dropdown-content dropdown-content';
    this.menuItemsClass = 'active-menu-item menu-item';
    this.contactMenuBtnClass = 'open-contact-menu contact-menu';
  }

  closeMenu(){
    this.dropdownMenuClass = 'dropdown-content';
    this.menuItemsClass = 'menu-item';
    this.contactMenuBtnClass = 'contact-menu';
  }


}
