import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  etudiant = { 'nom': 'Johnson', 'age': '30', 'saved': false };
  etudiants = [{ 'nom': 'Bob' }, { 'nom': 'Jim' }, { 'nom': 'Alfred' }, { 'nom': 'François' } ];
constructor() { }

ngOnInit() {
}
getEtudiant(): void {
  this.etudiant.nom = 'default';
}
saveEtudiant() {
  this.etudiant.saved = true;
}
}
