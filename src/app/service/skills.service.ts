import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ISkill } from '../interface/iskill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  //private url: string="http://apicv.azurewebsites.net/api/skills";

  private url: string="https://localhost:44341/api/categories";

  constructor(private client: HttpClient) { 

  }

  /**
   * Metodo encargado de listar las skills
   * @return `Observable` de `ISkill[]` listado de skills
   */
  getAll(): Observable<ISkill[]>{
    return this.client.get<ISkill[]>(this.url);
  }
}
