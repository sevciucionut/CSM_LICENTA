import {Component} from '@angular/core';
import {Router} from "@angular/router";

export interface PeriodicElement {
  name: string;
  id: string;
  duration: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', name: 'Hydrogen', duration: '1.0079'},
  {id: '2', name: 'Helium', duration: '4.0026'},
  {id: '3', name: 'Lithium', duration: '6.941'},
  {id: '4', name: 'Beryllium', duration: '9.0122'},
  {id: '5', name: 'Boron', duration: '10.811'},
  {id: '6', name: 'Carbon', duration: '12.0107'},
  {id: '7', name: 'Nitrogen', duration: '14.0067'},
  {id: '8', name: 'Oxygen', duration: '15.9994'},
  {id: '9', name: 'Fluorine', duration: '18.9984'},
  {id: '10', name: 'Neon', duration: '20.1797'},
];


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent {
  displayedColumns: string[] = ['id', 'name', 'duration'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) {
  }

  goToDetails(event) {
    this.router.navigate(['/details', event.id]);
  }
}
