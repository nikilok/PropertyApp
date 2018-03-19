import { AppPage } from './app.po';

describe('property-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Main content should exist with a class called main-content', () => {
    page.navigateTo();
    expect(page.getClassFromElement()).toEqual('main-content');
  });
});
