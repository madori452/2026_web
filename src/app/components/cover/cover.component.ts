import {
  Component,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
})
export class CoverComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroSection') heroSection!: ElementRef<HTMLElement>;

  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

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
