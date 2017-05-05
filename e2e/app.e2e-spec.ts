import { AngularNgrxLazyLoadingExamplePage } from './app.po';

describe('angular-ngrx-lazy-loading-example App', () => {
  let page: AngularNgrxLazyLoadingExamplePage;

  beforeEach(() => {
    page = new AngularNgrxLazyLoadingExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
