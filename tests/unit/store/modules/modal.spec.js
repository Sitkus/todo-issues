import { modal } from '@/store/modules';

let state = {};

beforeEach(() => {
  state = {
    isOpen: false,
    issueId: '',
    issueDescription: ''
  };
});

describe('Modal module', () => {
  it('Modal is closed by default', () => {
    expect(modal.getters.modal(state).isOpen).toBe(false);
  });

  it('Modal is open with opened issue id and description', () => {
    const issue = {
      id: 1,
      description: 'Hello world'
    };

    const openModalStateToBecome = {
      isOpen: true,
      issueId: 1,
      issueDescription: 'Hello world'
    };

    modal.mutations.openModal(state, issue);

    expect(modal.getters.modal(state)).toMatchObject(openModalStateToBecome);
  });

  it('Modal is closing when mutations is called', () => {
    const openModalState = {
      isOpen: true,
      issueId: 1,
      issueDescription: 'Hello world'
    };

    modal.mutations.closeModal(openModalState);

    expect(modal.getters.modal(openModalState)).toMatchObject(state);
  });
});
