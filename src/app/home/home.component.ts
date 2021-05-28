import { Component, OnInit } from '@angular/core';
import { NobelService } from './../nobel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nobelpriceArr:any = []
  p: number = 1;
  category = []
  sortedArr = []
  sorted = false
  constructor(private NobelService:NobelService) { }

  ngOnInit(): void {
    this.allNobels()
  }

  allNobels(){
    this.sorted = false
    this.NobelService.getAllList().subscribe(data => {
      this.nobelpriceArr = data['prizes']
      this.nobelpriceArr.forEach(element => {
        this.category.push(element.category)
        this.category = [... new Set(this.category)]
      });
    })
  }

  byCategory(category){
    this.sorted = true
    this.sortedArr = this.nobelpriceArr
    this.sortedArr = this.nobelpriceArr.filter(cat =>{
      if(cat.category === category){
        return cat
      }
    } )
  }
  byYear(){
    this.nobelpriceArr = this.nobelpriceArr.sort((a,b) =>{
     return a.year - b.year
    })
  }


}
