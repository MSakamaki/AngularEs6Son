describe('/',()=> {
  it('新規登録ボタンが表示されている', ()=> {
    //TODO: URL ハードコードを設定ファイルにまとめる
    browser.get('http://localhost:9000');

    var addBeansBtn = element(by.id('add-button'));

    browser.wait(()=> {
      return addBeansBtn.isPresent();
    }, 50000).then(()=> {
      expect(addBeansBtn.isPresent()).toBe(true);
    });
  });
});
