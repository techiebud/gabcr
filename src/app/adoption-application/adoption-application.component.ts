import * as $ from "jquery";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-adoption-application",
  templateUrl: "./adoption-application.component.html",
  styleUrls: ["./adoption-application.component.scss"]
})
export class AdoptionApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      $("footer.footer").hide();
  }

   iframeLoaded() {
      const iFrameID = <HTMLIFrameElement>document.getElementById('ifAdoptionApplication');
      if(iFrameID) {
            // here you can make the height, I delete it first, then I make it again
            iFrameID.height = "";
            iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
      }
  }

}
