import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFournisseurComponent } from './add-fournisseur.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddFournisseurComponent', () => {
  let component: AddFournisseurComponent;
  let fixture: ComponentFixture<AddFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSelectModule, MatFormFieldModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientTestingModule],
      declarations: [AddFournisseurComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
