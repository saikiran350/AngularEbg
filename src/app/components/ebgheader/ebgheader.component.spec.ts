import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbgheaderComponent } from './ebgheader.component';

describe('EbgheaderComponent', () => {
  let component: EbgheaderComponent;
  let fixture: ComponentFixture<EbgheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbgheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbgheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
