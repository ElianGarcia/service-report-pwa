import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnVisitsListComponent } from './return-visits-list.component';

describe('ReturnVisitsListComponent', () => {
  let component: ReturnVisitsListComponent;
  let fixture: ComponentFixture<ReturnVisitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnVisitsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnVisitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
