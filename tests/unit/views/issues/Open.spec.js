import Vuex from 'vuex';
import Open from '@/views/issues/Open.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { AddIssue, Modal } from '@/components/common';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash, faRecycle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEdit, faTrash, faRecycle, faTimesCircle);

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.component('font-awesome-icon', FontAwesomeIcon);

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Open, {
    store: new Vuex.Store({
      getters: {
        openIssues: () => [
          {
            id: 1,
            done: false,
            trash: false,
            description: 'Just a test here'
          }
        ],
        modal: () => {},
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
  it('Add form, modal and issues list components being rendered', () => {
    const addIssueComponent = wrapper.findComponent(AddIssue);
    const modalComponent = wrapper.findComponent(Modal);
    const issuesList = wrapper.find('.issues');

    expect(addIssueComponent.exists()).toBe(true);
    expect(modalComponent.exists()).toBe(true);
    expect(issuesList.exists()).toBe(true);
  });
});
