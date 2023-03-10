import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
selectedName='';
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    /*this.selectedName = this.activeRoute.snapshot.paramMap.get('name')!;*/
    this.activeRoute.paramMap.subscribe(response=>{
      //window.scrollTo(0,0)
      this.selectedName = response.get('name')!;
    })
  }

}
