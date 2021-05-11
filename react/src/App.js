import React from "react";
import "devextreme/dist/css/dx.light.css";
import "./App.css";

import HtmlEditor, {
    Toolbar,
    MediaResizing,
    Item
} from "devextreme-react/html-editor";

const sizeValues = [ "8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt" ];
const fontValues = [ "Arial", "Georgia", "Tahoma", "Times New Roman", "Verdana" ];
const headerValues = [ false, 1, 2, 3, 4, 5 ];

const markup = `
    <div>
        <h2>
            <img src="HtmlEditor.svg" alt="HtmlEditor"/>
            Formatted Text Editor (HTML Editor)
        </h2>
        <br/>
        <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
        <p>Supported features:</p>
        <ul>
            <li>Inline formats:
                <ul>
                    <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                    <li>Font, size, color changes (HTML only)</li>
                </ul>
            </li>
            <li>Block formats:
                <ul>
                    <li>Headers</li>
                    <li>Text alignment</li>
                    <li>Lists (ordered and unordered)</li>
                    <li>Code blocks</li>
                    <li>Quotes</li>
                </ul>
            </li>
            <li>Custom formats</li>
            <li>HTML and Markdown support</li>
            <li>Mail-merge placeholders (for example, %username%)</li>
            <li>Adaptive toolbar for working images, links, and color formats</li>
            <li>Insert images as a link or base64 (drag and drop images to convert them to base64)</li>
            <li>Copy-paste rich content (unsupported formats are removed)</li>
            <li>Tables support</li>
        </ul>
        <br/>
        <p>Supported frameworks and libraries:</p>
        <table>
            <tr>
                <td><strong>jQuery</strong></td>
                <td style="text-align: right;">v2.1 - v2.2 and v3.x</td>
            </tr>
            <tr>
                <td><strong>Angular</strong></td>
                <td style="text-align: right;">v7.0.x - v10.0.x</td>
            </tr>
            <tr>
                <td><strong>React</strong></td>
                <td style="text-align: right;">v16.2+</td>
            </tr>
            <tr>
                <td><strong>Vue</strong></td>
                <td style="text-align: right;">v2.6.3+</td>
            </tr>
        </table>
    </div>
`;

const App = () => {
    return (
        <HtmlEditor defaultValue={markup} valueType="html">
            <Toolbar multiline={true}>
                <Item name="undo" />
                <Item name="redo" />
                <Item name="separator" />
                <Item name="size" acceptedValues={sizeValues} />
                <Item name="font" acceptedValues={fontValues} />
                <Item name="separator" />
                <Item name="bold" />
                <Item name="italic" />
                <Item name="strike" />
                <Item name="underline" />
                <Item name="separator" />
                <Item name="alignLeft" />
                <Item name="alignCenter" />
                <Item name="alignRight" />
                <Item name="alignJustify" />
                <Item name="separator" />
                <Item name="orderedList" />
                <Item name="bulletList" />
                <Item name="separator" />
                <Item name="header" acceptedValues={headerValues} />
                <Item name="separator" />
                <Item name="color" />
                <Item name="background" />
                <Item name="separator" />
                <Item name="link" />
                <Item name="image" />
                <Item name="separator" />
                <Item name="clear" />
                <Item name="codeBlock" />
                <Item name="blockquote" />
                <Item name="separator" />
                <Item name="insertTable" />
                <Item name="deleteTable" />
                <Item name="insertRowAbove" />
                <Item name="insertRowBelow" />
                <Item name="deleteRow" />
                <Item name="insertColumnLeft" />
                <Item name="insertColumnRight" />
                <Item name="deleteColumn" />
            </Toolbar>
            <MediaResizing enabled={true} />
        </HtmlEditor>
    );
};
export default App;
