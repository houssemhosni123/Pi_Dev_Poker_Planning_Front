import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherFeedbackComponent } from './afficher-feedback.component';

describe('AfficherFeedbackComponent', () => {
  let component: AfficherFeedbackComponent;
  let fixture: ComponentFixture<AfficherFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
