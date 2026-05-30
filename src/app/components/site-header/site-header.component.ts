import {
  Component,
  HostListener,
  OnInit,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  private platformId = inject(PLATFORM_ID);
  private readonly sectionIds = ['experience', 'skills', 'works'];

  lang: 'zh' | 'en' = 'zh';
  activeSection = 'experience';
  navItems = [
    { id: 'experience', label: '工作經歷' },
    { id: 'skills', label: '技能' },
    { id: 'works', label: '作品集' },
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('lang') as 'zh' | 'en' | null;
      if (saved) this.lang = saved;
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
    this.lang = this.lang === 'zh' ? 'en' : 'zh';

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', this.lang);
    }
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
