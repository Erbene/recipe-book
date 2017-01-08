import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'rb-recipe-list-item',
  template: `
  <div class="col-md-12">
    <a href="#" class="list-group-item clearfix">
       <div class="col-md-12">
         <img [src]="recipe?.imagePath" class="img-responsive pull-left" style="max-height: 50px;">
         <h4 class="list-group-item-heading">{{ recipe?.name }}</h4>
         <p class="list-group-item-text">
            {{ recipe?.description }}
         </p>
       </div>
      </a>
  </div>

  `
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() {
  }

  ngOnInit() {
  }

}
