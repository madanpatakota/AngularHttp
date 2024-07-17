import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemoComponent } from './http-demo.component';

describe('HttpDemoComponent', () => {
  let component: HttpDemoComponent;
  let fixture: ComponentFixture<HttpDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpDemoComponent]
    });
    fixture = TestBed.createComponent(HttpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
