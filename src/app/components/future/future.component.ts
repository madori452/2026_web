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
          '這些年來我從前端設計師出發，透過自學程式語言與經驗累積，逐步轉職為前端工程師。',
          '我知道仍有許多需要學習與精進的地方，也了解非本科背景需要投入更多時間與努力。',
          '我期許自己能持續提升前端技術能力，並結合過去在UI設計與前端開發上的雙重經驗， ',
          '在工作中發揮所長，打造兼具功能性、使用體驗與視覺品質的產品。',
        ],
      },
      en: {
        title: 'Looking Ahead',
        body: [
          'My journey began as a UI/Frontend Designer, and through self-learning and practical experience,',
          'I gradually transitioned into a Frontend Engineer. Although I know there is still much to learn,',
          'I believe my background in design gives me a unique perspective when building frontend products.',
          'Moving forward, I hope to continue improving my technical skills while combining my design experience with frontend development.',
          'I aim to create products that are not only functional,but also thoughtful,intuitive, and user-friendly.',
        ],
      },
    };

  get text() {
    return this.textMap[this.lang];
  }
}
