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

  it('リスト画面から新規登録画面に遷移できること', ()=> {
    //TODO: URL ハードコードを設定ファイルにまとめる
    browser.get('http://localhost:9000');

    var addBeansBtn = element(by.id('add-button'));
    var submit = element(by.id('submit'));

    browser.wait(()=> {
      return addBeansBtn.isPresent();
    }, 50000).then(()=> {
      return addBeansBtn.click();
    }).then(()=> {
      return submit.isPresent();
    }).then((isPresent)=> {
      expect(submit.isPresent()).toBe(true);
    });
  });
});
