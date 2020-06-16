import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbgfooterComponent } from './ebgfooter.component';

describe('EbgfooterComponent', () => {
  let component: EbgfooterComponent;
  let fixture: ComponentFixture<EbgfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbgfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbgfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
