import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  route: string | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.url.subscribe(x => {
      this.route = x[0].toString();
    })
  }

  ngOnInit(): void {
  }

}
