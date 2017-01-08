/**
 * Created by Erbene Maia on 1/5/2017.
 */
import { Ingredient } from '../shared/ingredient.model';
export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ){}
}
