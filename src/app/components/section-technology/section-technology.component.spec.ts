import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTechnologyComponent } from './section-technology.component';

describe('SectionTechnologyComponent', () => {
  let component: SectionTechnologyComponent;
  let fixture: ComponentFixture<SectionTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTechnologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
