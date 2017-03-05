import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  bcImagePath = "../assets/images/bordercollie.gif";
  title = "Georgia Border Collie Rescue";
}
