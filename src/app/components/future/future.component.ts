import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { AppLang } from '../../services/language.service';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-future',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './future.component.html',
  styleUrl: './future.component.scss',
})
export class FutureComponent {
  @Input() lang: AppLang = 'zh';

  private readonly textMap: Record<AppLang, { title: string; body: string[] }> =
    {
      zh: {
        title: 'About the Future',
        body: [
          '這些年持續投入於前端系統開發，從介面實作到系統整合，累積了實務經驗與對產品穩定性的重視。',
          '未來期望持續精進前端架構、效能與使用者體驗，在團隊中創造長期且可維護的價值。',
        ],
      },
      en: {
        title: 'Looking Ahead',
        body: [
          'Over the past few years, I have stayed focused on frontend product development,',
          'from UI implementation to system integration,',
          'while building hands-on experience and a strong commitment to product stability.',
          'Going forward, I aim to keep improving frontEnd architecture, performance, and user experience,',
          'to create long-term and maintainable value within the team.',
        ],
      },
    };

  get text() {
    return this.textMap[this.lang];
  }
}
