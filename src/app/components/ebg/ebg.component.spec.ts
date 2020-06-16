import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbgComponent } from './ebg.component';

describe('EbgComponent', () => {
  let component: EbgComponent;
  let fixture: ComponentFixture<EbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
