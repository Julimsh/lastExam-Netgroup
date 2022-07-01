import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoArticoloComponent } from './nuovo-articolo.component';

describe('NuovoArticoloComponent', () => {
  let component: NuovoArticoloComponent;
  let fixture: ComponentFixture<NuovoArticoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovoArticoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoArticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
