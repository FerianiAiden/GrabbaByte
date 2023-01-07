import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  
 // returns menu items

  getAll():Food[]{
    return sample_foods;
  }

  // Using .lowercase when cross examining desired search term with menu item so search is no longer case sensitive !
  getAllFoodsBySearchTeam(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
