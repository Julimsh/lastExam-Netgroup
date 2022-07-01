import { ArticoloService } from './../../_service/articolo.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuovo-articolo',
  templateUrl: './nuovo-articolo.component.html',
  styleUrls: ['./nuovo-articolo.component.scss']
})
export class NuovoArticoloComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;
  isLoadingData = true;

  constructor(
    private articoloService: ArticoloService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      id: ['0'],
      nome: [''],
      costo: [''],
    });
  }

  onSubmit() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.articoloService.createArticolo(this.form.value).subscribe()

          alert("Articolo inserito con Successo!")
          this.router.navigate(['/lista-articolo'], { relativeTo: this.route });
  }


  goBack(){
    this.router.navigate(['/lista-articolo']);
  }

}
