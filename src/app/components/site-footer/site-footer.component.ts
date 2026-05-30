import { Component, Input } from '@angular/core';
import { AppLang } from '../../services/language.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  @Input() lang: AppLang = 'zh';
  year = '2026';

  get contactLabel(): string {
    return this.lang === 'zh' ? '聯絡我' : 'Contact Me';
  }
}
