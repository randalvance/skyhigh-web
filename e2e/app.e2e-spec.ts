import { SkyhighWebPage } from './app.po';

describe('skyhigh-web App', () => {
  let page: SkyhighWebPage;

  beforeEach(() => {
    page = new SkyhighWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
