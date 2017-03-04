import { GabcrPage } from './app.po';

describe('gabcr App', () => {
  let page: GabcrPage;

  beforeEach(() => {
    page = new GabcrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
