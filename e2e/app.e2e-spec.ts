import { SassPage } from './app.po';

describe('sass App', function() {
  let page: SassPage;

  beforeEach(() => {
    page = new SassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
