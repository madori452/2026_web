import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { AppLang } from '../../services/language.service';

type SkillCard = {
  title: string;
  items: Array<{ label: string; value: string }>;
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  @Input() lang: AppLang = 'zh';

  private readonly cardsMap: Record<AppLang, SkillCard[]> = {
    zh: [
      {
        title: 'Front End',
        items: [
          { label: '前端框架', value: 'Angular、Vue' },
          { label: '程式語言', value: 'TypeScript、JavaScript' },
          { label: '視覺化圖表', value: 'ECharts、Chart.js' },
          { label: '地圖應用', value: 'OpenLayers、mapPlus GIS' },
          { label: '單元測試', value: 'Karma、Jasmine' },
          { label: 'AI工具運用', value: 'Copilot' },
        ],
      },
      {
        title: 'Web UI',
        items: [
          { label: '前端語法', value: 'HTML5、CSS、SCSS' },
          { label: 'CSS 框架', value: 'Tailwind CSS、Bootstrap' },
          { label: '視覺化圖表', value: 'ECharts、Chart.js' },
          { label: 'UI 設計', value: 'Figma、Sketch、Adobe XD' },
        ],
      },
      {
        title: 'UI 元件與協作工具',
        items: [
          { label: '前端元件', value: 'PrimeNG、NgBootstrap、Vuetify' },
          { label: '版本控制', value: 'Git / GitLab / GitHub' },
        ],
      },
    ],
    en: [
      {
        title: 'Front End',
        items: [
          { label: 'Frameworks', value: 'Angular, Vue' },
          { label: 'Languages', value: 'TypeScript, JavaScript' },
          { label: 'Charts', value: 'ECharts, Chart.js' },
          { label: 'Map Tools', value: 'OpenLayers, mapPlus GIS' },
          { label: 'Unit Testing', value: 'Karma, Jasmine' },
          { label: 'AI Tools', value: 'Copilot' },
        ],
      },
      {
        title: 'Web UI',
        items: [
          { label: 'Markup & Styles', value: 'HTML5, CSS, SCSS' },
          { label: 'CSS Frameworks', value: 'Tailwind CSS, Bootstrap' },
          { label: 'Charts', value: 'ECharts, Chart.js' },
          { label: 'UI Design', value: 'Figma, Sketch, Adobe XD' },
        ],
      },
      {
        title: 'UI Components and Collaboration',
        items: [
          {
            label: 'Component Libraries',
            value: 'PrimeNG, NgBootstrap, Vuetify',
          },
          { label: 'Version Control', value: 'Git / GitLab / GitHub' },
        ],
      },
    ],
  };

  get cards(): SkillCard[] {
    return this.cardsMap[this.lang];
  }
}
