import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  copyRight: string = "";
  designBy: string = "Techiebud, LLC"
  designByURL: string = "http://techiebud.com";
  flagImagePath = "../../assets/images/gaflag.gif";
  constructor() {
    var now = new Date();
    var thisYear = now.getFullYear().toString();
    this.copyRight = "\u00A9 " + thisYear + "  " + "Georgia Border Collie Rescue";
  }

  ngOnInit() {
  }

}
