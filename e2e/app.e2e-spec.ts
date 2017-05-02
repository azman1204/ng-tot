import { Tot1Page } from './app.po';

describe('tot1 App', () => {
  let page: Tot1Page;

  beforeEach(() => {
    page = new Tot1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
