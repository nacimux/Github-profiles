import { GithubProfilesPage } from './app.po';

describe('github-profiles App', function() {
  let page: GithubProfilesPage;

  beforeEach(() => {
    page = new GithubProfilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
