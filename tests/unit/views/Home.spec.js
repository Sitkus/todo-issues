import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

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
