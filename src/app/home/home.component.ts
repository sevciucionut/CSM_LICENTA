import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {CourseService} from "../_services/course.service";
import {Observable} from "rxjs";
import {CourseListing} from "../models/course-listing.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  dataSource;
  columnsToDisplay = ['position', 'name', 'period', 'capacity', 'country'];
  expandedElement: PeriodicElement | null;

  constructor(
    private courseService: CourseService
  ) {
  }

  ngOnInit() {
    this.getData();
  }


  private getData() {
    this.courseService.getAllCourses().subscribe(value => this.dataSource = value);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  period: string;
  capacity: string;
  description: string;
  country: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    period: '1.0079',
    capacity: 'H',
    country: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    position: 2,
    name: 'Helium',
    period: '4.0026',
    capacity: 'He',
    country: 'H',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    position: 3,
    name: 'Lithium',
    period: '6.941',
    capacity: 'Li',
    country: 'H',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    position: 4,
    name: 'Beryllium',
    period: '9.0122',
    capacity: 'Be',
    country: 'H',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    position: 5,
    name: 'Boron',
    period: '10.811',
    capacity: 'B',
    country: 'H',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    position: 6,
    name: 'Carbon',
    period: '12.0107',
    capacity: 'C',
    country: 'H',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    position: 7,
    name: 'Nitrogen',
    period: '14.0067',
    capacity: 'N',
    country: 'H',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    position: 8,
    name: 'Oxygen',
    period: '15.9994',
    capacity: 'O',
    country: 'H',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    position: 9,
    name: 'Fluorine',
    period: '18.9984',
    capacity: 'F',
    country: 'H',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    position: 10,
    name: 'Neon',
    period: '20.1797',
    capacity: 'Ne',
    country: 'H',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];
