import Home from '@/views/Home.vue';
import { shallowMount, config } from '@vue/test-utils';

config.showDeprecationWarnings = false;

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Home);
});

afterEach(() => {
  wrapper.destroy();
});

describe('Home', () => {
  it('Redirect button exists', () => {
    const button = wrapper.find('.hero__button');

    expect(button.exists()).toBe(true);
  });

  it('Redirect button works upon click', () => {
    const redirectToOpenIssues = jest.fn();

    wrapper.setMethods({ redirectToOpenIssues });

    const button = wrapper.find('.hero__button');
    button.trigger('click');

    expect(redirectToOpenIssues).toBeCalled();
  });
});
