import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-one-way',
    template: `
       <h3>One way binding</h3>
       <p>Inpolation:Hello {{title}} : Thường dùng binding trên innerHTML hoặc innerText của thẻ </p>
       <p>Title: {{renderTitle()}}</p>
       <input class="w-50 form-control" value="{{title}}" />
       <hr />
       <h3>Property binding: Sử dụng trên các thuộc tính của thẻ trừ innerHTML innerText</h3>
       <div [innerHTML]="'Hello ' + title"></div>
       <input class="w-50 form-control" [value]="title" />
       <img [src]="imgSrc" alt="..." class="mt-2"/>
       <hr />
       <h3>Event binding</h3>
       <input class="w-25 form-control" #domInput />
       <button class="btn btn-success mt-2" (click)="changeTitle(domInput.value)" >Change title</button>
    `
})

export class OneWayBindingComponent implements OnInit { //MVVM : Model View View Model
    //Angular tất cả các thuộc tính của component đều là (state)
    //Các dữ liệu trên giao diện phải là thuộc tính của class
    title:string = 'cybersoft';
    imgSrc:string = 'https://picsum.photos/200'
    renderTitle():string { 

        return 'Hello' + this.title;
    }
    changeTitle (newValue:string) :void {
        
        this.title = newValue;
    }
    constructor() { }

    ngOnInit() { 
        let title:string = 'abc';

    }
}