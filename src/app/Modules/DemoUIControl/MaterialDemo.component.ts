//a-component-inline
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
    selector: 'app-demo-mat-ui',
    template: `
        <form class="example-form">
        <mat-form-field class="example-full-width" appearance="fill">
            <mat-label>Number</mat-label>
            <input type="text"
                placeholder="Pick one"
                aria-label="Number"
                matInput
                [matAutocomplete]="auto">
            <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
            <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
                {{option}}
            </mat-option>
            </mat-autocomplete>
        </mat-form-field>
        </form>
    `,
    styles: [
        `
            .example-form {
                min-width: 150px;
                max-width: 500px;
                width: 100%;
            }

            .example-full-width {
                width: 100%;
            }
        `
    ]
})

export class MaterialDemoComponent implements OnInit {
    constructor() { }

    myControl = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions!: Observable<string[]>;
  
    ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
}