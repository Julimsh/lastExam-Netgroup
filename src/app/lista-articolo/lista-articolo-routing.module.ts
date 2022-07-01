import { RecensioneArticoloComponent } from './recensione-articolo/recensione-articolo.component';
import { ModificaArticoloComponent } from './modifica-articolo/modifica-articolo.component';
import { ListaArticoloComponent } from './lista-articolo.component';
import { NuovoArticoloComponent } from './nuovo-articolo/nuovo-articolo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  {
    path:'',
    data:{
      title: 'ListaArticolo'
    },

    children: [
      {
        path:'',
        component: ListaArticoloComponent,
        data: {
          title: 'listaArticolo',
        }
      },

      {
        path:'nuovoArticolo',
        component: NuovoArticoloComponent,
        data: {
          title: 'nuovoArticolo',
        }
      },

      {
        path:'modificaArticolo',
        component: ModificaArticoloComponent,
        data: {
          title: 'modificaArticolo',
        }
      },

      {
        path:'recensioneArticolo',
        component:RecensioneArticoloComponent,
        data: {
          title: 'recensioneArticolo',
        }
      },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaArticoloRoutingModule { }
