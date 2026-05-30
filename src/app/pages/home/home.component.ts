import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from '../../components/site-header/site-header.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { CoverComponent } from '../../components/cover/cover.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { WorksComponent } from '../../components/works/works.component';
import { SiteFooterComponent } from '../../components/site-footer/site-footer.component';
import { FutureComponent } from '../../components/future/future.component';
import { AppLang, LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ExperienceComponent,
    SiteHeaderComponent,
    CoverComponent,
    SkillsComponent,
    WorksComponent,
    SiteFooterComponent,
    FutureComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private languageService: LanguageService) {}

  get lang(): AppLang {
    return this.languageService.lang;
  }
}
