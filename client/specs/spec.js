describe('Protractor Demo App', function(){
  it('Login successfully', function(){
    // browser.get('https://sendair.herokuapp.com')
    browser.get('http://localhost:3000')

    // change to page header instead of title
    expect(browser.getTitle()).toEqual('For-In Languages');

    element(by.model('username')).sendKeys('admin');
    element(by.model('password')).sendKeys('password1234');

    // element(by.id('loginButton')).click(); // get PR from arlen

    // element(by.id('loginHeader')).then(function(attr){
    //   console.log(attr);
    // });
  });
});
