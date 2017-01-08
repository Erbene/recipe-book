import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hamburger Steak with Onions and Gravy', 'An easy-to-make classic featuring tasty hamburger \'steaks\' smothered in gravy and onions. Traditionally served with hot white rice or potatoes, it\'s a great way to dress up a pound of ground beef and you probably have all the ingredients on hand! ','http://images.media-allrecipes.com/images/57289.jpg',[]),
    new Recipe('Macaroni and Cheese', 'This easy-to-make old-school macaroni and cheese has a perfectly crispy crust.','http://images.media-allrecipes.com/userphotos/560x315/969050.jpg',[]),
    new Recipe('Shakshuka', 'This North African one-dish-meal is so fast, easy, and delicious.','http://images.media-allrecipes.com/userphotos/560x315/2780276.jpg',[])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  OnSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
