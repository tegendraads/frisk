import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebtextComponent } from './webtext.component';

describe('WebtextComponent', () => {
  let component: WebtextComponent;
  let fixture: ComponentFixture<WebtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
