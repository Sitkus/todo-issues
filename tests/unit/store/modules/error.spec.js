import { error } from '@/store/modules';

describe('Error module', () => {
  it('"errorMessage" variable is an empty string and falsy value', () => {
    const state = {
      errorMessage: ''
    };

    expect(error.getters.errorMessage(state)).toBeFalsy();
  });

  it('Show error message upon mutation call', () => {
    const state = {
      errorMessage: ''
    };

    expect(error.mutations.showErrorMessage(state)).toBe('Please fill in the message box.');
  });

  it('Calling "removeErrorMessage" clears "errorMessage" state', () => {
    const state = {
      errorMessage: 'This is an error message.'
    };

    expect(error.getters.errorMessage(state)).toBeTruthy();
    expect(error.mutations.removeErrorMessage(state)).toBe('');
  });
});
