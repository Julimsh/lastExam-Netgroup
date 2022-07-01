import { ArticoloService } from './../../_service/articolo.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifica-articolo',
  templateUrl: './modifica-articolo.component.html',
  styleUrls: ['./modifica-articolo.component.scss']
})
export class ModificaArticoloComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;
  isLoadingData = true;

  id: any | null | undefined;

  constructor(
    private articoloService: ArticoloService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.getArticoloById(this.id);

    this.form = this.formBuilder.group({
      id: ['0'],
      nome: [''],
      cognome: [''],
    });

  }

  getArticoloById(id:any){
    this.articoloService.getArticoloById(id)
    .subscribe(
      data => {
        this.form.patchValue(data)

        this.ref.detectChanges();
        this.isLoadingData = false;
      }
    )
  }

  onSubmit() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.articoloService.modidicaArticolo(this.form.value).subscribe()

          alert("Docente modificato con Successo!")
          this.router.navigate(['/lista-articolo'], { relativeTo: this.route });

  }

  goBack(){
    this.router.navigate(['/lista-articolo'])
  }


}
