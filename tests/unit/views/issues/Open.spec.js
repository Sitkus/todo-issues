import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Open from '@/views/issues/Open.vue';
import { AddIssue, Modal } from '@/components/common';

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Open, {
    store: new Vuex.Store({
      getters: {
        openIssues: () => [],
        modal: () => 'modal',
        errorMessage: () => ''
      },
      actions: {
        getIssues: jest.fn(),
        doneIssue: jest.fn(),
        updateIssue: jest.fn(),
        trashIssue: jest.fn(),
        openModal: jest.fn(),
        closeModal: jest.fn(),
        showError: jest.fn(),
        removeError: jest.fn()
      }
    }),
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Open', () => {
  it('Are components being rendered', () => {
    const addIssueComponent = wrapper.findComponent(AddIssue);
    const modalComponent = wrapper.findComponent(Modal);

    expect(addIssueComponent.exists()).toBe(true);
    expect(modalComponent.exists()).toBe(true);
  });
});
