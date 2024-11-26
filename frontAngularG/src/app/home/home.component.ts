import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  data: any[] = [];

  constructor(private ApiService: ApiService){}
  
  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.ApiService.getData().subscribe(data =>{
      this.data = data.products;
      console.log(this.data);
    })
  }

}
