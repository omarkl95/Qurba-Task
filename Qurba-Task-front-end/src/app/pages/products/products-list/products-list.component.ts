import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
products:any=[];
arrays:any=[]
categories:any=[];
productofcategory:any=[];
tempArray:any =[]
filteredArray:any=[]


page = 1;
pageSize = 10;
totalPages!: number;
searchText!:any;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    this.getProductCategory();
    this.getData()
  }
  getProducts() {
    this.productsService.getUserData().subscribe((data =>{
      this.products = data.products;
      this.arrays = data.products
      console.log("arrays",this.arrays)
    }))
  }
  getCategories(){
    this.productsService.getAllCategories().subscribe((data =>{
      this.categories = data;
      console.log(this.categories)
    }))
  }
  getProductCategory(){
    this.productsService.getProcutofCategory('smartphones').subscribe((data =>{
      this.productofcategory = data.products;
      console.log('asdasd',this.productofcategory)
    }))
  }

  getData() {
    this.productsService.getProductsPagination(this.pageSize,20).subscribe((data)=>{
      console.log(data);
    })
  }

  onChange(event:any){
    if(event.target.checked) {
      console.log( event.target.value);
      this.tempArray = this.arrays.filter((e:any)=> e.category == event.target.value);
      console.log("tempArray array",this.tempArray);
      this.products =[];
      this.filteredArray.push(this.tempArray)
      console.log("filtered array",this.products);
      for(let i=0; i<this.filteredArray.length; i++){
        var firstArray = this.filteredArray[i];
        for(let i=0; i<firstArray.length;i++){
          var obj = firstArray[i];
          this.products.push(obj);
          console.log("products=",this.products)
        }
      }

  }else {
    this.tempArray = this.products.filter((e:any)=> e.category != event.target.value);
  
    console.log("tempArray array",this.tempArray);
    this.filteredArray =[];
    this.products =[];

    this.filteredArray.push(this.tempArray);
    console.log("filteredArray ",this.filteredArray)
  
    for(let i=0; i< this.filteredArray.length; i++) {
      var firstArray = this.filteredArray[i];
      for(let i=0; i< firstArray.length;i++){
        
        var obj = firstArray[i];
        this.products.push(obj);
      

      }
      if(this.tempArray.length === 0){
        this.getProducts()
      }
    }
   
    console.log("filteredArray",this.filteredArray)

  }
}



nextPage() {
  this.page++;
  this.getProducts();
}

previousPage() {
  this.page--;
  if (this.page === -1) {
    this.page = this.totalPages - 1;
  }
  this.getProducts();
}


onsearchTextEntered(searchvalue:string){
  this.searchText = searchvalue
}

}
