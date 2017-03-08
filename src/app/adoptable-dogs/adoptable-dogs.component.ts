import * as $ from "jquery";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-adoptable-dogs",
  templateUrl: "./adoptable-dogs.component.html",
  styleUrls: ["./adoptable-dogs.component.scss"]
})
export class AdoptableDogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $("footer.footer").hide();
  }

}
