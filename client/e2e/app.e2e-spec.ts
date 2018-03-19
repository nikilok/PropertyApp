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

  it('Should have more than 1 product card after 5 seconds wait', () => {
    page.getPropertyCard().then(response => {
      const height = response['height']; // Response would have the dimensions of the first property card in a height, width property
      expect(height).toBeGreaterThan(200); // Ensuring the height of the property card is atleast greater than 200
    });
  });
});
