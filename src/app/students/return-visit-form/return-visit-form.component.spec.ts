import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnVisitFormComponent } from './return-visit-form.component';

describe('ReturnVisitFormComponent', () => {
  let component: ReturnVisitFormComponent;
  let fixture: ComponentFixture<ReturnVisitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnVisitFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnVisitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
