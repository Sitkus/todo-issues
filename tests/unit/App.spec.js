import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import { Header, Footer } from '@/components/layout';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(App, {
    stubs: ['router-link', 'router-view']
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('App', () => {
  it('Contains Header and Footer components', () => {
    const headerComponent = wrapper.findComponent(Header);
    const footerComponent = wrapper.findComponent(Footer);

    expect(headerComponent.exists()).toBe(true);
    expect(footerComponent.exists()).toBe(true);
  });
});
