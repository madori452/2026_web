import { Component, Input } from '@angular/core';
import { AppLang } from '../../services/language.service';
import { FadeInDirective } from '../../directives/fade-in.directive';

type ExperienceItem = {
  period: string;
  title: string;
  company?: string;
  points: string[];
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() lang: AppLang = 'zh';

  private readonly experiencesMap: Record<AppLang, ExperienceItem[]> = {
    zh: [
      {
        period: '2023 - Now',
        title: 'FrontEnd Engineer',
        company: '勤崴國際',
        points: [
          '負責現有車隊管理平台前端系統維護與功能開發。',
          '也參與中興保全手機版車隊管理系統前端開發，包含車輛即時監控、影像串接與報表等功能。',
          '今年開始開發新的車隊管理系統，由Vue2轉換至Angular的前端架構重整。',
          '導入KW Map作為地圖底圖，重新規劃地圖功能與操作流程。',
        ],
      },
      {
        period: '2020 - 2022',
        title: 'UI Designer',
        company: 'ECS 精英電腦',
        points: [
          '在公司負責新品牌「Pretso」官網的整體規劃與前端設計。',
          '從網站架構到視覺呈現皆參與其中，並為官網加入SVG動畫互動，提升網站的吸引力與互動體驗。',
          '在公司期間參與國光客運經監控平台設計規劃，因應公司需求時常進行設計提案，更加熟悉提案的技巧以及快速設計方法。',
        ],
      },
    ],
    en: [
      {
        period: '2023 - Now',
        title: 'Frontend Engineer',
        company: 'Kingwaytek International',
        points: [
          'Responsible for maintaining and developing frontend features for the existing fleet management platform.',
          'Also participated in the frontend development of the mobile fleet management system for Taiwan Secom, including real-time vehicle monitoring, video integration, and reporting features.',
          'Started developing a new fleet management system this year, refactoring the frontend architecture from Vue 2 to Angular.',
          'Integrated KW Map as the base map and redesigned the map-related features and user workflows.',
        ],
      },
      {
        period: '2020 - 2022',
        title: 'UI Designer',
        company: 'ECS Elitegroup Computer Systems',
        points: [
          'Responsible for the overall planning and frontend design of the official website for the company’s new brand, “Pretso”.',
          'Participated in the process from website structure planning to visual design, and added SVG animations to enhance the website’s visual appeal and interactive experience.',
          'During my time at the company, I participated in the design planning of the Kuo-Kuang Motor Transport monitoring platform. I frequently created design proposals according to company needs, which helped me become more familiar with presentation skills and rapid design methods.',
        ],
      },
    ],
  };

  get experiences(): ExperienceItem[] {
    return this.experiencesMap[this.lang];
  }
}
