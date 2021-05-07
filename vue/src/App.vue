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
        </DxToolbar>
        <DxMediaResizing :enabled="true" />
        <div>
            <h2>
                <img src="./HtmlEditor.svg" alt="HtmlEditor">
                Formatted Text Editor (HTML Editor)
            </h2>
            <br>
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
            <br>
            <p>Supported frameworks and libraries</p>
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
    </DxHtmlEditor>
</template>

<script>
import {
    DxHtmlEditor,
    DxToolbar,
    DxItem,
    DxMediaResizing
} from 'devextreme-vue/html-editor';

export default {
    components: {
        DxHtmlEditor,
        DxToolbar,
        DxItem,
        DxMediaResizing
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
</style>
