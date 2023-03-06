import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardPageComponent } from './id-card-page.component';

describe('IdCardPageComponent', () => {
  let component: IdCardPageComponent;
  let fixture: ComponentFixture<IdCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
