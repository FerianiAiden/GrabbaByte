import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/Tag';

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

  getAllTags():Tag[]{
    return sample_tags
  }
  // If we're going to search the menu by tags, we either display the whole menu when selecting "All", or filter the menu based on the desired tag
  getAllFoodsByTag(tag: string): Food[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
}

}
