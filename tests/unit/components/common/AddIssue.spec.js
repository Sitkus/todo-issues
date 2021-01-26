import Vuex from 'vuex';
import { AddIssue } from '@/components/common';
import { shallowMount, createLocalVue, config } from '@vue/test-utils';

config.showDeprecationWarnings = false;

const localVue = createLocalVue();

localVue.use(Vuex);

let wrapper = null;
let actions = null;
let getters = null;
let store = null;

beforeEach(() => {
  actions = {
    newIssue: jest.fn(),
    showError: jest.fn(),
    removeError: jest.fn()
  };

  getters = {
    errorMessage: () => ''
  };

  store = new Vuex.Store({
    actions,
    getters
  });

  wrapper = shallowMount(AddIssue, { store, localVue });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Open', () => {
  it('"createIssue" function is called when form is submitted', () => {
    const createIssue = jest.fn();
    const form = wrapper.find('.form');

    wrapper.setMethods({ createIssue });

    form.trigger('submit');

    expect(createIssue).toBeCalled();
  });
});
