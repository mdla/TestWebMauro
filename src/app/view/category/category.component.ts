import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ICategory } from 'src/app/interface/icategory';
import { ISkill } from 'src/app/interface/iskill';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categoryList: ICategory[];
  public list: ISkill[];

  constructor(private service: CategoryService) { 
    this.categoryList=[];    
  }

  ngOnInit() {
    this.service.getAll().subscribe((response: ICategory[])=>{
      this.categoryList=response;
    });
  }
  
  onChangeCategory(skillList: ISkill[]){    
    this.list= skillList;
  }
}
