<template>
<DxHtmlEditor height="725px" valueType="html">
      <DxMediaResizing :enabled="true"/>
      <DxToolbar :multiline="true">
        <DxItem name="undo"/>
        <DxItem name="redo"/>
        <DxItem name="separator"/>
        <DxItem
          :accepted-values="sizeValues"
          name="size"
        />
        <DxItem
          :accepted-values="fontValues"
          name="font"
        />
        <DxItem name="separator"/>
        <DxItem name="bold"/>
        <DxItem name="italic"/>
        <DxItem name="strike"/>
        <DxItem name="underline"/>
        <DxItem name="separator"/>
        <DxItem name="alignLeft"/>
        <DxItem name="alignCenter"/>
        <DxItem name="alignRight"/>
        <DxItem name="alignJustify"/>
        <DxItem name="separator"/>
        <DxItem name="orderedList"/>
        <DxItem name="bulletList"/>
        <DxItem name="separator"/>
        <DxItem
          :accepted-values="headerValues"
          name="header"
        />
        <DxItem name="separator"/>
        <DxItem name="color"/>
        <DxItem name="background"/>
        <DxItem name="separator"/>
        <DxItem name="link"/>
        <DxItem name="image"/>
        <DxItem name="separator"/>
        <DxItem name="clear"/>
        <DxItem name="codeBlock"/>
        <DxItem name="blockquote"/>
        <DxItem name="separator"/>
        <DxItem name="insertTable"/>
        <DxItem name="deleteTable"/>
        <DxItem name="insertRowAbove"/>
        <DxItem name="insertRowBelow"/>
        <DxItem name="deleteRow"/>
        <DxItem name="insertColumnLeft"/>
        <DxItem name="insertColumnRight"/>
        <DxItem name="deleteColumn"/>
      </DxToolbar>
      <div v-html="markup"/>
    </DxHtmlEditor>
</template>

<script>
import {
  DxHtmlEditor,
  DxToolbar,
  DxMediaResizing,
  DxItem
} from 'devextreme-vue/html-editor';
import { markup } from './data.js';



export default {
    components: {
        DxHtmlEditor,
        DxMediaResizing,
        DxToolbar,
        DxItem,
    },
    data() {
        return {
            markup,
            sizeValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'],
            fontValues: ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'],
            headerValues: [false, 1, 2, 3, 4, 5],
        };
    }
};
</script>

<style scoped>
    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
</style>
