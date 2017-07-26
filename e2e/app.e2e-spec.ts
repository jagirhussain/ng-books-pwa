import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('ng-books App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('NgBooks');
  });
});
