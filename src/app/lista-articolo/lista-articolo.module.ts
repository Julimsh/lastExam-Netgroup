import { RecensioneArticoloComponent } from './recensione-articolo/recensione-articolo.component';
import { ListaArticoloComponent } from './lista-articolo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListaArticoloRoutingModule } from './lista-articolo-routing.module';
import { NuovoArticoloComponent } from './nuovo-articolo/nuovo-articolo.component';
import { ModificaArticoloComponent } from './modifica-articolo/modifica-articolo.component';


@NgModule({
  declarations: [ListaArticoloComponent, NuovoArticoloComponent, ModificaArticoloComponent, RecensioneArticoloComponent],
  imports: [
    CommonModule,
    ListaArticoloRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ListaArticoloModule { }
