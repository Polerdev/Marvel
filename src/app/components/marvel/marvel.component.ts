import {Component, inject} from '@angular/core';
import {MarvelService} from "../../services/marvel.service";
import {ApiData} from "../../common/interfaceComics";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-marvel',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './marvel.component.html',
  styleUrl: './marvel.component.css'
})
export class MarvelComponent {
  private readonly marvelService: MarvelService = inject(MarvelService);
  apiData!: ApiData;
  //comics: Result[]=[];

  constructor() {
    this.loadComics();
  }

  private loadComics() {
    this.marvelService.getComics().subscribe(
      {
        next: value => {
          this.apiData = value;
          console.log(value);
        },
        error: error => console.error(error),
        complete: () => console.log("Comics loaded")
      }
    )
  }
}
