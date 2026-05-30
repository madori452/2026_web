import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AppLang, LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  private platformId = inject(PLATFORM_ID);
  private languageService = inject(LanguageService);
  private readonly sectionIds = ['experience', 'skills', 'works'];

  activeSection = 'experience';
  private readonly navLabels: Record<AppLang, { id: string; label: string }[]> =
    {
      zh: [
        { id: 'experience', label: '工作經歷' },
        { id: 'skills', label: '技能' },
        { id: 'works', label: '作品集' },
      ],
      en: [
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'works', label: 'Projects' },
      ],
    };

  get lang(): AppLang {
    return this.languageService.lang;
  }

  get navItems() {
    return this.navLabels[this.lang];
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateActiveSection();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateActiveSection();
    }
  }

  toggleLang() {
    this.languageService.toggleLang();
  }

  private updateActiveSection() {
    const scrollPosition = window.scrollY + 120;

    for (const sectionId of this.sectionIds) {
      const section = document.getElementById(sectionId);

      if (!section) {
        continue;
      }

      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        this.activeSection = sectionId;
      }
    }
  }
}
