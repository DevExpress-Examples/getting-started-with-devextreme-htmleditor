<template>
    <DxHtmlEditor value-type="html">
        <DxToolbar :multiline="true">
            <DxItem name="undo" />
            <DxItem name="redo" />
            <DxItem name="separator" />
            <DxItem
                name="size"
                :accepted-values="sizeValues"
            />
            <DxItem
                name="font"
                :accepted-values="fontValues"
            />
            <DxItem name="separator" />
            <DxItem name="bold" />
            <DxItem name="italic" />
            <DxItem name="strike" />
            <DxItem name="underline" />
            <DxItem name="separator" />
            <DxItem name="alignLeft" />
            <DxItem name="alignCenter" />
            <DxItem name="alignRight" />
            <DxItem name="alignJustify" />
            <DxItem name="separator" />
            <DxItem name="orderedList" />
            <DxItem name="bulletList" />
            <DxItem name="separator" />
            <DxItem
                name="header"
                :accepted-values="headerValues"
            />
            <DxItem name="separator" />
            <DxItem name="color" />
            <DxItem name="background" />
            <DxItem name="separator" />
            <DxItem name="link" />
            <DxItem name="image" />
            <DxItem name="separator" />
            <DxItem name="clear" />
            <DxItem name="codeBlock" />
            <DxItem name="blockquote" />
            <DxItem name="separator" />
            <DxItem name="insertTable" />
            <DxItem name="deleteTable" />
            <DxItem name="insertRowAbove" />
            <DxItem name="insertRowBelow" />
            <DxItem name="deleteRow" />
            <DxItem name="insertColumnLeft" />
            <DxItem name="insertColumnRight" />
            <DxItem name="deleteColumn" />
            <DxItem name="cellProperties" />
            <DxItem name="tableProperties" />
        </DxToolbar>
        <DxMediaResizing :enabled="true" />
        <DxTableContextMenu :enabled="true" />
        <div>
            <h2>
                <img src="./HtmlEditor.svg" alt="HtmlEditor">
                Rich Text Editor (HTML Editor)
            </h2>
            <br>
            <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
            <p>Supported features:</p>
            <ul>
                <li>Inline formats:
                    <ul>
                        <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                        <li>Typeface, font size, text color changes (HTML only)</li>
                    </ul>
                </li>
                <li>Block formats:
                    <ul>
                        <li>Headers</li>
                        <li>Lists (ordered and unordered)</li>
                        <li>Code blocks</li>
                        <li>Quotes</li>
                    </ul>
                </li>
                <li>Built-in format customization</li>
                <li>HTML and Markdown support</li>
                <li>Mail Merge</li>
                <li>Adaptive toolbar for working with images, links, and color formats</li>
                <li>Copy-paste rich content (the control strips unsupported formats)</li>
                <li>Embedded images specified as a link to an image file or as base64-encoded binary data</li>
                <li>Mention (for example, @person)</li>
                <li>Tables</li>
            </ul>
            <br>
            <p>The editor supports the following frameworks and libraries:</p>
            <table>
                <tr>
                    <td><strong>jQuery</strong></td>
                    <td>v3.x</td>
                </tr>
                <tr>
                    <td><strong>Angular</strong></td>
                    <td>v7.0.x - v11.0.x</td>
                </tr>
                <tr>
                    <td><strong>React</strong></td>
                    <td>v16.2+</td>
                </tr>
                <tr>
                    <td><strong>Vue</strong></td>
                    <td>v2.6.3+</td>
                </tr>
            </table>
        </div>
    </DxHtmlEditor>
</template>

<script>
import {
    DxHtmlEditor,
    DxToolbar,
    DxItem,
    DxMediaResizing,
    DxTableContextMenu
} from 'devextreme-vue/html-editor';

export default {
    components: {
        DxHtmlEditor,
        DxToolbar,
        DxItem,
        DxMediaResizing,
        DxTableContextMenu
    },
    data() {
        return {
            sizeValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'],
            fontValues: ['Arial', 'Georgia', 'Tahoma', 'Times New Roman', 'Verdana'],
            headerValues: [false, 1, 2, 3, 4, 5]
        };
    }
};
</script>

<style>
.dx-htmleditor-content img {
    vertical-align: middle;
}

.dx-htmleditor-content table {
    width: 50%;
}

.dx-htmleditor-content table td:last-child {
    text-align: right;
}
</style>
