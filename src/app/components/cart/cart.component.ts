import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CartService } from 'src/app/api/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products!:any[];
  public grandtotal:number = 0;
  constructor(private cart:CartService, private toast : NgToastService) { }

  ngOnInit():void {
    this.cart.getproduct().subscribe(res=>{
    this.products = res;
    this.grandtotal = this.cart.gettotalprice();
    })
  }

  emptycart(){
    this.toast.warning({detail:'Produits retirés', summary:'Tous les produits ont été retirés', duration:1000})
    this.cart.removeallcart();
  }

  addtocart(item:any){
    this.toast.success({detail:'Produit ajouté', summary:'Le produit a été a', duration:1000})
    this.cart.addtocart(item);
    console.log(item)
  }
  
  delete(item:any){
    this.toast.warning({detail:'Produit retiré', summary:'Le produit a été retiré', duration:1000})
    this.cart.removecartitem(item);
  }
}
