import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //tên thẻ
  template: `
    <div>
      <!-- <app-home></app-home> -->
      <!-- <app-data-binding></app-data-binding> -->
      <!-- <app-directive></app-directive> -->
      <!-- <app-demo-props></app-demo-props> -->
      <!-- <app-demo-ui></app-demo-ui> -->
      <router-outlet></router-outlet>
    </div>
  
  `, //giao diện của thẻ
  styleUrls: ['./app.component.scss'] //css của thẻ
})
export class AppComponent { //xử lý typescript trên thẻ
  title = 'angularbc17';
}
