import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {AlertifyService} from  '../services/alertify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService : AlertifyService) { }
  title ="Ürün Listesi"
  filterText=""
  products :Product[] = [
    {
      id:1,
      name:"Laptop",
      price :2500,
      categoryId:1,
      description:"Asus ZenBook",
      imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:2,
      name:"Phone",
      price :2700,
      categoryId:2,
      description:"Samsung 9i",
      imageUrl:"https://images.unsplash.com/photo-1517439270744-8d9287c2f8f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:3,
      name:"Mouse",
      price :90,
      categoryId:3,
      description:"logitech",
      imageUrl:"https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=928&q=80"
    },
    {
      id:4,
      name:"Masa",
      price :270,
      categoryId:4,
      description:"Çalışma Masası",
      imageUrl:"https://images.unsplash.com/photo-1569685463113-a8ac9b461d88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:5,
      name:"Klavye",
      price :270,
      categoryId:5,
      description:"Asus Klavye",
      imageUrl:"https://images.unsplash.com/photo-1562319926-4dbdecfa9962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:6,
      name:"Phone",
      price :2700,
      categoryId:6,
      description:"Samsung 9i",
      imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:7,
      name:"Kulaklık",
      price :200,
      categoryId:7,
      description:"Philips",
      imageUrl:"https://images.unsplash.com/photo-1516972238977-89271fb2bab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:8,
      name:"Mönitor",
      price :1200,
      categoryId:8,
      description:"IMac ",
      imageUrl:"https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ]

  ngOnInit(): void {
  }
  addToCart(product){
  this.alertifyService.success(product.name + " Added.");
  }
}
