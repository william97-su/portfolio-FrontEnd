import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToUpBtnComponent } from './go-to-up-btn.component';

describe('GoToUpBtnComponent', () => {
  let component: GoToUpBtnComponent;
  let fixture: ComponentFixture<GoToUpBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToUpBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoToUpBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
