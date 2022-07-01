import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecensioneArticoloComponent } from './recensione-articolo.component';

describe('RecensioneArticoloComponent', () => {
  let component: RecensioneArticoloComponent;
  let fixture: ComponentFixture<RecensioneArticoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecensioneArticoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecensioneArticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
