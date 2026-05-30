import { Component } from '@angular/core';

type ExperienceItem = {
  period: string;
  title: string;
  company?: string;
  points: string[];
};

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      period: '2023 - Now',
      title: 'FrontEnd Engineer',
      company: '勤崴國際',
      points: [
        '負責車隊管理平台前端系統維護與功能開發。',
        '參與中興保全 機版車隊管理系統前端開發，包含車輛即時監控、影像串接與報表功能。',
        '負責既有系統由Vue 2轉換至Angular的前端架構重整。',
        '導入KW Map作為地圖底圖，重新規劃地圖功能與操作流程。',
        '使用OpenLayers、ECharts等技術開發地圖監控與資料視覺化功能。',
        '參與介面設計與使用者體驗優化，提升系統操作流程與畫面呈現。',
      ],
    },
    {
      period: '2020 - 2022',
      title: 'UI Designer → FrontEnd',
      company: 'ECS 精英電腦',
      points: [
        '在公司負責新品牌「Pretso」官網的整體規劃與前端設計。',
        '從網站架構到視覺呈現皆參與其中，並為官網加入SVG動畫互動，提升網站的吸引力與互動體驗。',
        '參與國光客運經監控平台設計規劃，因應公司需求時常進行快速設計提案，更加熟悉提案的技巧以及快速設計方法。',
      ],
    },
  ];
}
