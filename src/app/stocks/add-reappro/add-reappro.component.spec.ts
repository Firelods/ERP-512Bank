import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReapproComponent } from './add-reappro.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddReapproComponent', () => {
  let component: AddReapproComponent;
  let fixture: ComponentFixture<AddReapproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, BrowserAnimationsModule],
      declarations: [AddReapproComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddReapproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
