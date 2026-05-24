import { Component } from '@angular/core';
import { MediaResizingOptions, TableContextMenuOptions } from './app.types';

import { DxHtmlEditorModule } from 'devextreme-angular/ui/html-editor';

@Component({
    selector: 'app-root',
    imports: [DxHtmlEditorModule],
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
