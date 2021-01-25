import { mount } from '@vue/test-utils';
import { Header } from '@/components/layout/';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(Header, {
    stubs: ['router-link']
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Header', () => {
  it('Check that logo exists', () => {
    const img = wrapper.findAll('.nav__logo');

    expect(img.length).toBe(1);
  });

  it('Renders the navigation links', () => {
    const navLinks = wrapper.findAll('.nav__link');

    expect(navLinks.length).toBe(4);
  });
});
