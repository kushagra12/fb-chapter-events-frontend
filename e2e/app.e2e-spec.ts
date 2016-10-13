import { FbParserPage } from './app.po';

describe('fb-parser App', function() {
  let page: FbParserPage;

  beforeEach(() => {
    page = new FbParserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
