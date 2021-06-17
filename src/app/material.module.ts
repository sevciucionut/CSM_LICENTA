import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ReactiveFormsModule} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_FORMATS} from '@angular/material/core';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';

const DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatSortModule,
  MatTabsModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  CdkStepperModule,
  MatExpansionModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class MaterialModule {
}
