import {Component} from '@angular/core';
//import {Menu} from './menu';


@Component({
    selector:'restaurant',
    templateUrl:'./restaurant.component.html',
    styleUrls:['./restaurant.component.css']
})

export class RestaurantComponent{

    id:number;
    name:string;
    price:number;
    quantity:number;

    menuItems=[
        {
            id:1,
            name:'Shanghai Style Vegetarian Delight',
            price:6.25
        },
        {
            id:2,
            name:'Smoked Fish',
            price:8.00
        },
        {
            id:3,
            name:'Spicy Duck',
            price:7.50
        }
    ]

    value:number;
    showHide:boolean;    
    //value=parseFloat((document.getElementById("text") as HTMLInputElement).value);
    //quantity=this.value;
    /*constructor(value:number,quantity:number){
        this.value=parseFloat((document.getElementById("text") as HTMLInputElement).value);
        this.quantity=this.value;
    }*/
    constructor(){
        console.log("Hello Hello");
        this.showHide = false;
    }
    disp(v:number){
        //this.value=parseFloat((document.getElementById("text") as HTMLInputElement).value);
        //this.quantity=value;
        //return this.quantity;
        //val=this.value;
        this.value = v;
        console.log(this.value);
        
    }
    total(v1:number,v2:number,v3:number):number{
        //console.log(this.menuItems[0].price);
        this.value = (this.menuItems[0].price * v1) + (this.menuItems[1].price * v2) + (this.menuItems[2].price * v3)
        console.log(this.value);
        this.showHide = !this.showHide;
        return this.value;  
    }
    
    changeShowStatus(){
     
    }


}