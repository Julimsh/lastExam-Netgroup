import { Articolo } from './../_model/articolo';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ArticoloService } from '../_service/articolo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-articolo',
  templateUrl: './lista-articolo.component.html',
  styleUrls: ['./lista-articolo.component.scss']
})
export class ListaArticoloComponent implements OnInit {

  isLoadingData = true;

  articoli?: Articolo[];

  constructor(
    private articoloService: ArticoloService,
    private ref: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getAllArticoli();
  }

getAllArticoli(){
  this.articoloService.getAllArticoli().subscribe(articolo => {
  this.isLoadingData = false;
  this.articoli = articolo;
  this.ref.detectChanges();
});
}

deleteArticolo(id:any) {
  this.articoloService.eliminaArticolo(id)
  .subscribe(data => {
    this.getAllArticoli()
    this.ref.detectChanges();
  })
}

editArticolo(id:any) {
  this.router.navigate(['/lista-articolo/modificaArticolo/'+id]);
}

goRecensioni(id:any) {
  this.router.navigate(['/lista-articolo/recensioneArticolo/'+id]);
}


}
