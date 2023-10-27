import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksComponent } from './stocks.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReapproComponent } from './reappro/reappro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],
      declarations: [StocksComponent, ReapproComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
