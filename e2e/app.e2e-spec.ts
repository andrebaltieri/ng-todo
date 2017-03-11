import { TodolstPage } from './app.po';

describe('todolst App', function() {
  let page: TodolstPage;

  beforeEach(() => {
    page = new TodolstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
