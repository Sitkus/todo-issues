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
let actions = null;
let getters = null;
let store = null;

beforeEach(() => {
  actions = {
    getIssues: jest.fn(),
    doneIssue: jest.fn(),
    updateIssue: jest.fn(),
    trashIssue: jest.fn(),
    openModal: jest.fn(),
    closeModal: jest.fn(),
    showError: jest.fn(),
    removeError: jest.fn()
  };

  getters = {
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
  };

  store = new Vuex.Store({
    actions,
    getters
  });

  wrapper = shallowMount(Open, { store, localVue });
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

  it('"doneIssue" function is called upon click of mark done / undone button', () => {
    const markDoneButton = wrapper.find('.issue__button--done');

    markDoneButton.trigger('click');

    expect(actions.doneIssue).toHaveBeenCalled();
  });

  it('"openModal" function is called upon click of edit button', () => {
    const editButton = wrapper.find('.issue__button--edit');

    editButton.trigger('click');

    expect(actions.openModal).toHaveBeenCalled();
  });

  it('"trashIssue" function is called upon click of a trash button', () => {
    const trashButton = wrapper.find('.issue__button--trash');

    trashButton.trigger('click');

    expect(actions.trashIssue).toHaveBeenCalled();
  });
});
