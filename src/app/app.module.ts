import { routedComponents, routing } from "./app.routes";

import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NavComponent } from "./nav/nav.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    routedComponents

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
