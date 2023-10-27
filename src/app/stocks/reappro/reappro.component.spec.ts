import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReapproComponent } from './reappro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReapproComponent', () => {
  let component: ReapproComponent;
  let fixture: ComponentFixture<ReapproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ReapproComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReapproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
