import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProwalksComponent } from './prowalks.component';

describe('ProwalksComponent', () => {
  let component: ProwalksComponent;
  let fixture: ComponentFixture<ProwalksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProwalksComponent]
    });
    fixture = TestBed.createComponent(ProwalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
