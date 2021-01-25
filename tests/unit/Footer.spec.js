import { shallowMount } from '@vue/test-utils';
import { Footer } from '@/components/layout';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Footer);
});

afterEach(() => {
  wrapper.destroy();
});

describe('Footer', () => {
  it('Check if footer content contains current year.', () => {
    const date = new Date();
    const currentYear = `${date.getFullYear()}`;
    const footerContent = wrapper.find('.footer__content');

    expect(footerContent.text()).toContain(currentYear);
  });
});
