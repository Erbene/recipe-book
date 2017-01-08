import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  public recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
    this.recipe = new Recipe('dummy', 'dummy content','http://vignette3.wikia.nocookie.net/hunterxhunter/images/0/09/Kirito_17.png/revision/latest?cb=20130620072359')
  }

  ngOnInit() {
  }

  OnSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
