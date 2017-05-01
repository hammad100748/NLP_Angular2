import { NLPTrainerPage } from './app.po';

describe('nlptrainer App', () => {
  let page: NLPTrainerPage;

  beforeEach(() => {
    page = new NLPTrainerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
