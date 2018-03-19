import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getClassFromElement() {
    return element(by.css('app-root .main-content')).getAttribute('class');
  }

  getPropertyCard() {
    return browser.wait(() => {
      return element(by.css('app-root .main-content .results app-property-card')).getSize();
    }, 5000);
  }
}
