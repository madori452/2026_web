import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeaderComponent } from './site-header.component';

describe('SiteHeaderComponent', () => {
  let component: SiteHeaderComponent;
  let fixture: ComponentFixture<SiteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set active section when scroll position is inside a section', () => {
    spyOnProperty(window, 'scrollY', 'get').and.returnValue(400);
    spyOn(document, 'getElementById').and.callFake((id: string) => {
      const sections: Record<string, Partial<HTMLElement>> = {
        experience: { offsetTop: 0, offsetHeight: 300 },
        skills: { offsetTop: 300, offsetHeight: 400 },
        works: { offsetTop: 700, offsetHeight: 400 },
      };

      return (sections[id] as HTMLElement | undefined) ?? null;
    });

    component.onWindowScroll();

    expect(component.activeSection).toBe('skills');
  });
});
