import { Component, OnInit } from '@angular/core';
import { Aliment } from '../_models';

@Component({
  selector: 'app-aliment',
  templateUrl: './aliment.component.html',
  styleUrls: ['./aliment.component.css']
})
export class AlimentComponent implements OnInit {
  edit = false;
  alimentTest = [new Aliment('Bob', new Date(2011, 7, 7)), new Aliment('Bob', new Date(2011, 7, 7))];
  alimentNew = new Aliment();
  test: Aliment;
  constructor() { }

  ngOnInit() {
  }
  addAliment() {
    this.alimentTest.push(this.alimentNew);
    this.alimentNew = new Aliment();
  }
  getAlimentById(id): Aliment {
   // for (let i = 0; i < this.alimentTest.length; i++) {
   //   if (this.alimentTest[i].id === id) {
   //     return this.alimentTest[i];
   //   }
   // }
   // return null;
    return this.alimentTest.filter(a => a.id === id)[0];
  }
  editAliment(id) {
    this.alimentNew = this.getAlimentById(id);
    this.edit = true;
  }
  saveAliment(id) {
   
  }
}
