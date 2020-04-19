import { Product } from './../product.module';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Produto de teste',
    price: 125.98
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMenssage("Roduto criado!")
      this.router.navigate(['/products'])
    })
  }

  cancel(): void{
  }



}