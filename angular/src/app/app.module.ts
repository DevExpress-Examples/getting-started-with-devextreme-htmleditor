import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { DxHtmlEditorModule } from "devextreme-angular";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DxHtmlEditorModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
