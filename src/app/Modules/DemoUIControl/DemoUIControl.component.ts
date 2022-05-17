//a-component-inline
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzAutocompleteComponent } from 'ng-zorro-antd/auto-complete';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd/i18n';


@Component({
  selector: 'app-demo-ui',
  template: `
        <div class="container">
            <h3>Demo antd</h3>
            <button nz-button nzType="primary">Primary Button</button>
            <hr />
            <nz-date-picker [(ngModel)]="date" (ngModelChange)="onChange($event)"></nz-date-picker>
            <br />
            <div class="example-input">
            <input
              placeholder='try to type "b"'
              nz-input
              [(ngModel)]="inputValue"
              (ngModelChange)="onChange($event)"
              [nzAutocomplete]="auto"
            />
            <nz-autocomplete [nzDataSource]="filteredOptions" #auto></nz-autocomplete>
          </div>
          <hr />
          <h3>Demo material</h3>
          <app-demo-mat-ui></app-demo-mat-ui>
        </div>
    `,
  styles: [
    `
          [nz-button] {
            margin-right: 8px;
            margin-bottom: 12px;
          }
          nz-date-picker {
            margin: 0 8px 12px 0;
          }
        `
  ]
})

export class DemoUIComponent implements OnInit {
  inputValue?: string;
  filteredOptions: string[] = [];
  options = ['Front end', 'Back end', 'Full stack'];
  @ViewChild('auto') tagAutoComplete!: NzAutocompleteComponent;
  onChange(value: string): void {

    this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  date = null;
  isEnglish = false;

  constructor(private i18n: NzI18nService) { 
    this.filteredOptions = this.options;

  }
  ngOnInit() { }
  // onChange(result: Date): void {
  //   console.log('onChange: ', result);
  // }
  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }
  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
}

function getISOWeek(result: Date): any {
  throw new Error('Function not implemented.');
}
