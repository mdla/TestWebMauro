import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ICategory } from '../interface/icategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //private url: string="http://apicv.azurewebsites.net/api/skills";
  private url: string="https://localhost:44341/api/categories";
  constructor(private client: HttpClient) { 

  }

  /**
   * Metodo encargado de listar todas las categorias.
   * @return `Observable` de `ICategory[]` listado de categorias
   */
  getAll(): Observable<ICategory[]>{
    return this.client.get<ICategory[]>(this.url);
  }
}
