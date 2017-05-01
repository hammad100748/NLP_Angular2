import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlpTrainerPageComponent } from './nlp-trainer-page.component';

describe('NlpTrainerPageComponent', () => {
  let component: NlpTrainerPageComponent;
  let fixture: ComponentFixture<NlpTrainerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlpTrainerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlpTrainerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
