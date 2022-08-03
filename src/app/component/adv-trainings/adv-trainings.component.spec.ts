import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvTrainingsComponent } from './adv-trainings.component';

describe('AdvTrainingsComponent', () => {
  let component: AdvTrainingsComponent;
  let fixture: ComponentFixture<AdvTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvTrainingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
