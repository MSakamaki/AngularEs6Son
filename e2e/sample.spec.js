describe('protractor sample',()=> {

  it('list done', ()=> {
    browser.get('http://localhost:9000/');
    var member1 = element(by.repeater('member in list.members').row(0));
    browser.wait(()=>{
      return member1.isPresent();
    }, 10000, 'about add cart').then(()=>{
      expect(member1.getText()).toEqual('ID：1 名前：鈴木 一郎 登録日：2015/01/02 更新日：2015/01/01 所属：Japan 編集 削除');
    });
  });
});