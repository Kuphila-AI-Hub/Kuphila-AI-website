import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { MissionComponent } from './components/mission.component';
import { ServicesComponent } from './components/services.component';
import { FeaturedProjectComponent } from './components/featured-project.component';
import { TeamComponent } from './components/team.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    MissionComponent,
    ServicesComponent,
    FeaturedProjectComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-mission />
      <app-services />
      <app-featured-project />
      <app-team />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [`
    main { overflow-x: hidden; }
  `]
})
export class AppComponent {}
