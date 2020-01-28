import { Component, OnInit } from '@angular/core';
import {products } from '../products'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}
