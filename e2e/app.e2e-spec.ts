import { BeardedFiestaPage } from './app.po';

describe('bearded-fiesta App', function() {
  let page: BeardedFiestaPage;

  beforeEach(() => {
    page = new BeardedFiestaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
