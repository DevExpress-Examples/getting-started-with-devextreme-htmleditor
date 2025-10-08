import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxHtmlEditorModule } from 'devextreme-angular/ui/html-editor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxHtmlEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
