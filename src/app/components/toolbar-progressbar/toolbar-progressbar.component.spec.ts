import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarProgressbarComponent } from './toolbar-progressbar.component';

describe('ToolbarProgressbarComponent', () => {
  let component: ToolbarProgressbarComponent;
  let fixture: ComponentFixture<ToolbarProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarProgressbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
