import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { AppLang } from '../../services/language.service';
type Work = {
  title: string;
  subtitle: string;
  bullets: string[];
  stack: string;
  image: string;
};

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
})
export class WorksComponent {
  @Input() lang: AppLang = 'zh';

  private readonly worksMap: Record<AppLang, Work[]> = {
    zh: [
      {
        title: '車隊管理系統 ( WEB APP )',
        subtitle: '即時監控平台 / 前端開發',
        bullets: [
          '此系統為企業內部使用之車隊即時監控平台，提供車輛位置追蹤、狀態監控與行為視覺化分析，協助管理人員即時掌握車隊運行狀況。',
          '負責前端整體開發與模組拆分，建立可維護的系統架構。',
          '使用Angular 20 + TypeScript開發主要功能，確保大型系統的穩定性與可擴充性。',
          '整合OpenLayers實作地圖即時定位、路線顯示與互動操作。',
          '透過ECharts視覺化車輛狀態與行為數據，提升資料可讀性。',
          '實作即時與歷史影像播放，支援1-8 CH多畫面、全螢幕與觸控操作。',
          '透過行動裝置偵錯與效能調校，確保桌機與手機環境穩定運作。',
        ],
        stack:
          'Angular 20, TypeScript, OpenLayers, ECharts, Tailwind CSS, Figma, PrimeNG',
        image: 'assets/work/work01.png',
      },
      {
        title: '車隊2.0管理系統',
        subtitle: 'KW Map 地圖監控 / 資料分析 / 管理端優化',
        bullets: [
          '以KW Map（勤崴地圖）作為基礎底圖平台，提供管理端更完整的地圖監控與資料分析，協助使用者在電腦環境下進行高效率的車隊管理。',
          '負責前端整體開發與模組拆分，建立可維護的系統架構。',
          '使用Angular 20 + TypeScript開發主要功能，確保大型系統的穩定性與可擴充性。',
          '整合KW Map建構地圖監控功能。',
          '優化整體介面設計，導入Isometric風格科技感插畫。',
          '實作Dark Mode，提升使用體驗。',
          '建立多語系（i18n）架構，以JSON管理語系內容，提升系統國際化。',
          '透過預設測試架構（Karma + Jasmine）撰寫單元測試，提升程式可維護性。',
        ],
        stack:
          'Angular 20, TypeScript, KW Map, ECharts, Tailwind CSS, Figma, PrimeNG, Playwright',
        image: 'assets/work/work02.png',
      },
      {
        title: '車隊管理系統（系統維護與優化）',
        subtitle: '地圖效能與使用體驗優化',
        bullets: [
          '針對既有地圖系統進行效能與使用體驗優化，提升大量地圖資料呈現時的流暢度與穩定性。',
          '軌跡優化：優化歷史軌跡查詢效能，透過延遲渲染依不同 Zoom Level 動態調整軌跡點位數量，解決2,000筆以上軌跡資料造成的地圖卡頓問題。',
          '車輛欄位設定優化：優化即時監控欄位設定，實作欄位名稱編輯、順序調整與欄寬設定，透過localStorage儲存個人設定，支援不同角色使用者客製化顯示內容。',
          '實作個人化設定匯入/匯出功能，將圖層顯示與欄位設定轉為JSON檔案，方便跨環境或帳號套用。',
          '圖表優化：使用ECharts重構舊有圖表，提升資料視覺化與可讀性。',
        ],
        stack: 'Vue2, Echart, JS, Vuetify',
        image: 'assets/work/work03.png',
      },
    ],
    en: [
      {
        title: 'Fleet Management System (Web App)',
        subtitle: 'Real-time Monitoring Platform / Frontend Development',
        bullets: [
          'An internal real-time fleet monitoring platform for vehicle tracking, status monitoring, and behavior analytics to help operators manage fleets efficiently.',
          'Owned frontend development and module decomposition for a maintainable architecture.',
          'Developed core features with Angular 20 and TypeScript to support stability and scalability.',
          'Integrated OpenLayers for live positioning, route display, and map interactions.',
          'Used ECharts to visualize vehicle status and behavior metrics for better readability.',
          'Implemented live and historical video playback, supporting 1-8 channel layouts, full-screen mode, and touch interactions.',
          'Performed mobile debugging and performance tuning to ensure reliable behavior on desktop and mobile.',
        ],
        stack:
          'Angular 20, TypeScript, OpenLayers, ECharts, Tailwind CSS, Figma, PrimeNG',
        image: 'assets/work/work01.png',
      },
      {
        title: 'Fleet 2.0 Management System',
        subtitle: 'KW Map Monitoring / Data Analysis / Admin UX Optimization',
        bullets: [
          'Built on KW Map as the base map platform to provide richer monitoring and analysis workflows for high-efficiency fleet operations.',
          'Owned frontend development and module decomposition for a maintainable architecture.',
          'Developed core features with Angular 20 and TypeScript for large-scale stability and extensibility.',
          'Integrated KW Map for advanced geospatial monitoring capabilities.',
          'Improved overall UI with an isometric visual style.',
          'Implemented dark mode for improved usability.',
          'Set up multilingual (i18n) architecture with JSON-managed locale content for internationalization.',
          'Wrote unit tests with Karma and Jasmine to improve maintainability.',
        ],
        stack:
          'Angular 20, TypeScript, KW Map, ECharts, Tailwind CSS, Figma, PrimeNG, Playwright',
        image: 'assets/work/work02.png',
      },
      {
        title: 'Fleet Management System (Maintenance and Optimization)',
        subtitle: 'Map Performance and UX Optimization',
        bullets: [
          'Optimized an existing map system for performance and user experience, improving smoothness and stability under large data loads.',
          'Trajectory optimization: improved historical route query performance by dynamic point reduction based on zoom level and deferred rendering, resolving lag on 2,000+ route points.',
          'Vehicle column settings optimization: implemented editable labels, ordering, and widths with localStorage persistence to support role-based customization.',
          'Implemented import/export for personalized settings by converting layer and column settings into JSON files for cross-account/environment reuse.',
          'Refactored legacy charts with ECharts to improve data readability and visualization quality.',
        ],
        stack: 'Vue2, Echart, JavaScript, Vuetify',
        image: 'assets/work/work03.png',
      },
    ],
  };

  get works(): Work[] {
    return this.worksMap[this.lang];
  }

  get stackLabel(): string {
    return this.lang === 'zh' ? '使用技術：' : 'Tech Stack:';
  }
}
