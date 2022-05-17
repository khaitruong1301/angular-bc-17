//a-component-inline
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
        <div class="container" style="margin-bottom: 500px">
            <h3>*ngIf</h3>
            <p *ngIf="status">Hello! cybersoft</p>
            <h3>Ví dụ: Cho người dùng nhập vào 1 số nếu là số chẵn in ra số chẵn và ngược lại</h3>
            <input class="form-control w-50" value="0" #inputNumber />
            <button class="btn btn-success mt-2 mb-2" (click)="changeNumber(inputNumber.value)">In số</button>
            <p *ngIf="number %2!== 0; else tmpSoChan" class="alert alert-primary">Số lẻ</p>
            <!-- <p *ngIf="number%2 == 0 && number !== 0" class="alert alert-success">Số chẵn</p> -->
            <hr />
            <h3>*ngSwitch</h3>
            <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'" class="bg-danger w-100 text-white rounded p-2">
                    Red
                </div>
                <div *ngSwitchCase="'green'" class="bg-success w-100 text-white rounded p-2">
                    green
                </div>
                <div *ngSwitchDefault class="bg-primary w-100 text-white rounded p-2">
                    Blue
                </div>
            </div>
            <select class="w-25 form-control mt-2" [(ngModel)]="color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
            <hr />
            <h3>*ngFor</h3>
            <div class="row">
                <div class="col-4" *ngFor="let user of users">
                    <div class="card">
                        <img src="https://i.pravatar.cc?u={{user.userName}}" [alt]="user.name" />
                        <div class="card-body">
                            <p>{{user.name}}</p>
                            <p>{{user.age}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table mt-2">
                <thead>
                    <tr>
                        <th></th>
                        <th>username</th>
                        <th>avatar</th>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    <ng-container *ngIf="users.length !==0"> 
                        <tr [ngClass]="{'bg-dark':(i+1)%2==0,'bg-danger':(i+1)%2!==0}" class="text-light" *ngFor="let user of users; let i = index">
                            <td>{{i+1}}</td>
                            <td>{{user.userName}}</td>
                            <td><img src="https://i.pravatar.cc?u={{user.name}}" width="50" height="50" /></td>
                            <td>{{user.name}}</td>
                            <td>{{user.age}}</td>
                        </tr>
                    </ng-container>
                    <tr *ngIf="users.length === 0">
                            <td colspan="5" align="center">
                                Không tìm thấy thông tin user !
                            </td>
                    </tr>
                </tbody>
            </table>

            <ng-container *ngTemplateOutlet="tmpSoChan"></ng-container>

            <hr />
            <h3>*ng-Content</h3>
            <app-child>
                <header class="header bg-primary text-white text-center p-5">Header</header>
                <footer class="footer bg-dark text-white text-center p-5">Footer</footer>
            </app-child>

            <hr />
            <h3>[ngClass]</h3>
            <div class="alert" [ngClass]="{'mau-chu':mauChu,'font-chu':fontChu}">
                Hello cybersoft
            </div>
            <hr/> 
            <h3>*ngStyle Tăng giảm fontSize</h3>
            <div style="height:500px;" [ngStyle]="{'background-image':'url(https://picsum.photos/id/'+fontSize+'/1280/500)'}">

            </div>
            <p [ngStyle]="{'font-size':fontSize+'px'}">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum eius exercitationem, delectus maiores dignissimos voluptas quos molestiae quidem ipsum totam explicabo eveniet earum cum quo, ex consequuntur. Nulla, adipisci voluptatem.
            </p>
            <button class="btn btn-primary mr-2" (click)=" changeFontSize(2)">+</button>
            <button class="btn btn-primary ml-2" (click)=" changeFontSize(-2)">-</button>
            <hr />
            <app-bt-login></app-bt-login>
            <hr />
            <app-bt-qlsp></app-bt-qlsp>
        <ng-template #tmpSoChan>
            <p class="alert alert-success">Số chẵn</p>
        </ng-template>
        </div>

    `,
    styles: [
        `
            .mau-chu {
                color:red;
            }
            .font-chu {
                font-size:25px;
            }
        `
    ]
})

export class DirectiveComponent implements OnInit {
    
    mauChu:boolean = false;
    fontChu:boolean = true;
    fontSize:number = 15;
    color: string = 'red';
    users: User[] = [
        { userName: 'hai', name: 'Hải Bánh', age: 18 },
        { userName: 'fuho', name: 'Fuho', age: 19 },
        { userName: 'nguyenvana', name: 'Nguyễn Văn A', age: 20 },
    ]
    status: boolean = true;
    number: number = 0;
    constructor() { }

    ngOnInit() { }
    changeNumber(newValue: string): void {
        this.number = Number(newValue);
    }
    changeFontSize(newSize:number) : void{
        this.fontSize += newSize;
    }
}

interface User {
    userName: string,
    name: string,
    age: number
}