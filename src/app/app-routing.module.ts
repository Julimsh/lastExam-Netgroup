import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =
[
  { path: '',
  component: NavbarComponent,
    children: [

      {
        path: '',
        loadChildren: () =>
          import('./lista-articolo/lista-articolo.module').then((m) => m.ListaArticoloModule)
      },

    ]

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
