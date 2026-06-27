import {
  Component,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
  Input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AppLang } from '../../services/language.service';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
})
export class CoverComponent implements AfterViewInit, OnDestroy {
  @Input() lang: AppLang = 'zh';
  @ViewChild('heroSection') heroSection!: ElementRef<HTMLElement>;

  private observer!: IntersectionObserver;

  private readonly textMap: Record<
    AppLang,
    { descriptionLines: string[]; downloadResume: string }
  > = {
    zh: {
      descriptionLines: [
        '具備3年前端工程經驗與UI設計背景，',
        '兼具設計美感與前端技術的工程師。',
      ],
      downloadResume: '下載履歷',
    },
    en: {
      descriptionLines: [
        'Frontend engineer with 3+ years of experience,',
        'UI design experience,',
        'combining design aesthetics with front-end technology.',
      ],
      downloadResume: 'Download Resume',
    },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  get text() {
    return this.textMap[this.lang];
  }

  get mobileDescription(): string {
    return this.text.descriptionLines.join(' ');
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.heroSection.nativeElement.classList.add('hero-in-view');
            this.observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );

    this.observer.observe(this.heroSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
