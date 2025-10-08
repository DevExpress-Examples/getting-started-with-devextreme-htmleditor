import { Component } from '@angular/core';
import { DxHtmlEditorTypes } from 'devextreme-angular/ui/html-editor';
import { MediaResizingOptions, TableContextMenuOptions } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sizeValues: string[] = ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'];

  fontValues: string[] = ['Arial', 'Georgia', 'Tahoma', 'Times New Roman', 'Verdana'];

  headerValues: (boolean | number)[] = [false, 1, 2, 3, 4, 5];

  multilineToolbar = true;

  mediaResizingOptions: MediaResizingOptions = {
    enabled: true,
  };

  tableContextMenuOptions: TableContextMenuOptions = {
    enabled: true,
  };
}
