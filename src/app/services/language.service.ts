import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type AppLang = 'zh' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly langSignal = signal<AppLang>('zh');

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('lang') as AppLang | null;

      if (saved === 'zh' || saved === 'en') {
        this.langSignal.set(saved);
      }
    }
  }

  get lang(): AppLang {
    return this.langSignal();
  }

  toggleLang(): void {
    const nextLang: AppLang = this.langSignal() === 'zh' ? 'en' : 'zh';
    this.setLang(nextLang);
  }

  setLang(lang: AppLang): void {
    this.langSignal.set(lang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }
}
