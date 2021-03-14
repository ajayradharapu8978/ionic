import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private render: Renderer2) { }

  ngOnInit() {
  }
  
  changeTheme($event) {

    if ($event.detail.checked) {
      this.render.setAttribute(document.body, 'color-theme', 'dark');
    }
    else {
      this.render.setAttribute(document.body, 'color-theme', 'light');
    }
  }


}
