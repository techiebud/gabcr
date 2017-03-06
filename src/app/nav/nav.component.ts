import { Component, OnInit } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  bcImagePath = "../../assets/images/bordercollie.gif";
 
  constructor() { }

  ngOnInit() {
  }

}
