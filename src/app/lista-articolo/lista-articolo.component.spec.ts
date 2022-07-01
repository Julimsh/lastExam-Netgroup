import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArticoloComponent } from './lista-articolo.component';

describe('ListaArticoloComponent', () => {
  let component: ListaArticoloComponent;
  let fixture: ComponentFixture<ListaArticoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArticoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
