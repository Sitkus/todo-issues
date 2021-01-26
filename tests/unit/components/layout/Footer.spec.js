import { Footer } from '@/components/layout';
import { shallowMount } from '@vue/test-utils';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Footer);
});

afterEach(() => {
  wrapper.destroy();
});

describe('Footer', () => {
  it('Footer content contains current year', () => {
    const date = new Date();
    const currentYear = `${date.getFullYear()}`;
    const footerContent = wrapper.find('.footer__content');

    expect(footerContent.text()).toContain(currentYear);
  });
});
