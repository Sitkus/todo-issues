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
  it('renders the navigation links', () => {
    const navLinks = wrapper.findAll('.nav__link');

    expect(navLinks.length).toBe(4);
  });
});
