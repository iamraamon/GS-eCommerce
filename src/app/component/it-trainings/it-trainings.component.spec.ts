import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITTrainingsComponent } from './it-trainings.component';

describe('ITTrainingsComponent', () => {
  let component: ITTrainingsComponent;
  let fixture: ComponentFixture<ITTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITTrainingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ITTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
