import React from "react";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import { markup } from "./data.js";
import HtmlEditor, {
    Toolbar,
    MediaResizing,
    Item
} from "devextreme-react/html-editor";

const sizeValues = ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"];
const fontValues = [
    "Arial",
    "Courier New",
    "Georgia",
    "Impact",
    "Lucida Console",
    "Tahoma",
    "Times New Roman",
    "Verdana"
];
const headerValues = [false, 1, 2, 3, 4, 5];

const App = () => {
    return (
        <>
            <HtmlEditor height="725px" defaultValue={markup} valueType="html">
                <MediaResizing enabled={true} />
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
            </HtmlEditor>
        </>
    );
};
export default App;
