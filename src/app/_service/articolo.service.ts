import { ListaArticoloComponent } from './../lista-articolo/lista-articolo.component';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Articolo } from '../_model/articolo';

@Injectable({
  providedIn: 'root'
})

export class ArticoloService {

  constructor(private router:Router, private http: HttpClient) { }

  getAllArticoli(){
    return this.http.get<any>(`${environment.apiUrl}/lista-articolo/getArticoli`);
  }

  createArticolo(articolo: Articolo){
    return this.http.post(`${environment.apiUrl}/lista-articolo/addArticolo`, articolo);
  }

  modidicaArticolo(articolo: Articolo){
    return this.http.put(`${environment.apiUrl}/lista-articolo/editArticolo`, articolo);
  }

  eliminaArticolo(id: any){
    return this.http.delete<any>(`${environment.apiUrl}/lista-articolo/deleteArticoli/${id}`);
  }

  getArticoloById(id:any){
    return this.http.get<any>(`${environment.apiUrl}/docente/findArticolo/${id}`)
  }
}
