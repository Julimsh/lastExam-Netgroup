import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articolo } from 'src/app/_model/articolo';
import { Recensioni } from 'src/app/_model/recensione';
import { ArticoloService } from 'src/app/_service/articolo.service';

@Component({
  selector: 'app-recensione-articolo',
  templateUrl: './recensione-articolo.component.html',
  styleUrls: ['./recensione-articolo.component.scss']
})
export class RecensioneArticoloComponent implements OnInit {

  isLoadingData = true;
  id: any | null | undefined;

  articoli?: Articolo[];

  constructor(
    private articoloService: ArticoloService,
    private ref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
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

  goBack(){
    this.router.navigate(['/listaArticolo']);
  }

}
