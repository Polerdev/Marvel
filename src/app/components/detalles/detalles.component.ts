import {Component, inject, Injectable, Input, OnInit} from '@angular/core';
import {MarvelService} from "../../services/marvel.service";

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit {
ngOnInit() {
}
}
