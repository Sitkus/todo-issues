import { Header } from '@/components/layout';
import { shallowMount } from '@vue/test-utils';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Header, {
    stubs: ['router-link']
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Header', () => {
  it('Logo exists', () => {
    const img = wrapper.findAll('.nav__logo');

    expect(img.length).toBe(1);
  });

  it('Renders the navigation links', () => {
    const navLinks = wrapper.findAll('.nav__link');

    expect(navLinks.length).toBe(4);
  });
});
