import { issues } from '@/store/modules';

let state = {};

beforeEach(() => {
  state = {
    issues: [
      {
        id: 1,
        done: false,
        trash: false,
        description: 'Example 1'
      },
      {
        id: 2,
        done: false,
        trash: false,
        description: 'Example 2'
      },
      {
        id: 3,
        done: true,
        trash: false,
        description: 'Example 3'
      },
      {
        id: 4,
        done: false,
        trash: true,
        description: 'Example 4'
      }
    ]
  };
});

describe('Issues module', () => {
  it('Filtering open issues that are not done and not trashed', () => {
    const filteredOpenIssues = [
      {
        id: 1,
        done: false,
        trash: false,
        description: 'Example 1'
      },
      {
        id: 2,
        done: false,
        trash: false,
        description: 'Example 2'
      }
    ];

    expect(issues.getters.openIssues(state)).toEqual(filteredOpenIssues);
  });

  it('Filtering issues that are marked as done, but not trashed', () => {
    const filteredDoneIssues = [
      {
        id: 3,
        done: true,
        trash: false,
        description: 'Example 3'
      }
    ];

    expect(issues.getters.doneIssues(state)).toEqual(filteredDoneIssues);
  });

  it('Filtering issues that are trashed and can be marked done or undone', () => {
    const filteredTrashedIssues = [
      {
        id: 4,
        done: false,
        trash: true,
        description: 'Example 4'
      }
    ];

    expect(issues.getters.trashedIssues(state)).toEqual(filteredTrashedIssues);
  });

  it('"setIssues" overwrites "issues" state with new data', () => {
    const updatedIssues = {
      issues: [
        {
          id: 1,
          done: false,
          trash: false,
          description: 'Example 1'
        }
      ]
    };

    issues.mutations.setIssues(state, updatedIssues.issues);

    expect(state).toEqual(updatedIssues);
  });

  it('"addIssue" adds a new issues to current issues data', () => {
    const issueToAdd = {
      id: 0,
      done: false,
      trash: false,
      description: 'Example for adding new issue'
    };

    issues.mutations.addIssue(state, issueToAdd);

    expect(state.issues[0]).toEqual(issueToAdd);
  });

  it('"markIssueDone" changes issue done status', () => {
    const issueId = 2;

    issues.mutations.markIssueDone(state, issueId);

    expect(state.issues[1].done).toBe(true);
  });

  it('"updateIssue" updates issue from modal', () => {
    const modalData = {
      issueId: 1,
      issueDescription: 'Hello world'
    };

    issues.mutations.updateIssue(state, modalData);

    expect(state.issues[0].description).toBe('Hello world');
  });

  it('"trashIssue" marks issue as trash', () => {
    const issueId = 2;

    issues.mutations.trashIssue(state, issueId);

    expect(state.issues[1].trash).toBe(true);
  });
});
