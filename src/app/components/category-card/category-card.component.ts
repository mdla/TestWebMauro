import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from 'src/app/interface/icategory';
import { ISkill } from 'src/app/interface/iskill';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() category: ICategory;
  @Output() skills = new EventEmitter<ISkill[]>();
  

  constructor() { }

  ngOnInit() {

  }

  onClick(){
    this.skills.emit(this.category.skills);
  }

}
