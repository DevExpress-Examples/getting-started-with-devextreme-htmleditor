import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Content from '../HtmlEditorContent.vue';

describe('Content', () => {
  it('renders properly', () => {
    const wrapper = mount(Content, { props: {} });
    expect(wrapper.text()).toContain('Rich Text Editor');
  });
});
