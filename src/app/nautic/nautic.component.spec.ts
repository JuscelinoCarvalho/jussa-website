import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NauticComponent } from './nautic.component';

describe('NauticComponent', () => {
  let component: NauticComponent;
  let fixture: ComponentFixture<NauticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NauticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NauticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
