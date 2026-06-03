import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { SiteHeaderComponent } from '../../components/site-header/site-header.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { CoverComponent } from '../../components/cover/cover.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { WorksComponent } from '../../components/works/works.component';
import { SiteFooterComponent } from '../../components/site-footer/site-footer.component';
import { FutureComponent } from '../../components/future/future.component';
import { AppLang, LanguageService } from '../../services/language.service';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ExperienceComponent,
    SiteHeaderComponent,
    CoverComponent,
    SkillsComponent,
    WorksComponent,
    SiteFooterComponent,
    FutureComponent,
    FadeInDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  showBackToTop = false;

  constructor(
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  get lang(): AppLang {
    return this.languageService.lang;
  }

  ngOnInit(): void {
    this.updateBackToTopVisibility();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateBackToTopVisibility();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateBackToTopVisibility();
  }

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private updateBackToTopVisibility(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const threshold = window.innerWidth <= 768 ? 260 : 500;
    this.showBackToTop = scrollTop > threshold;
  }
}
