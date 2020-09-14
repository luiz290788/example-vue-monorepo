import { shallowMount } from '@vue/test-utils';
import MyButton from '../../src/lib/MyButton.vue';

describe('MyButton.vue', () => {
  it('renders welcome message', () => {
    const wrapper = shallowMount(MyButton);
    expect(wrapper.text()).toMatch(
      'Welcome to Your Vue.js + TypeScript Library'
    );
  });
});
