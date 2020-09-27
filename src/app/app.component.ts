import { Component, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { RouterAnimations } from 'src/app/objects/anime';
import { BackgroundService } from './services/background.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    RouterAnimations
  ]
})
export class AppComponent {
  @ViewChild('sidenav') public sidenav;
  year: number = new Date().getFullYear()
  subscription = fromEvent(window, 'scroll')
                 .pipe(throttleTime(200))
                 .subscribe(() => this.onScrollEvent());

  constructor (
    private router: Router,
    private backgroundService: BackgroundService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.backgroundService.trigger();
        this.sidenav.close();
        setTimeout(this.onScrollEvent, 800);
      }
    })
  }

  onScrollEvent() {
    let elements = document.getElementsByClassName('vp-fade-in')
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].getBoundingClientRect().top < window.innerHeight * 3 / 4) {
        elements[i].classList.add('visible')
      }
    }
  }
}
