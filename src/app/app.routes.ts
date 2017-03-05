import {
    AboutUsComponent,
    AdoptableDogsComponent,
    AdoptionApplicationComponent,
} from "./index";
import { RouterModule, Routes } from "@angular/router";

const APP_ROUTES: Routes = [

    { path: "", redirectTo: "/aboutUs", pathMatch: "full" },
    { path: "aboutUs",  component: AboutUsComponent },
    { path: "adoptableDogs",  component: AdoptableDogsComponent },   
    { path: "adoptionApplication",component: AdoptionApplicationComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

// tslint:disable-next-line:max-line-length
export const routedComponents = [AboutUsComponent, AdoptableDogsComponent, AdoptionApplicationComponent]
