describe('Protractor Demo App', function(){
  it('Navigates to Login Page', function(){
    // browser.get('https://sendair.herokuapp.com')
    browser.get('http://localhost:3000')

    //sanity test
    expect(browser.getTitle()).toEqual('For-In Languages');

    var loginHeader = element(by.id('loginHeader'));
    expect(loginHeader.elementArrayFinder_.locator_.value).toBe('loginHeader');

  });

  xit('Login Successfully', function(){
    element(by.model('username')).sendKeys('admin');
    element(by.model('password')).sendKeys('password1234');
    element(by.id('loginButton')).click(); // get PR from arlen

    var mainPageHeader = element(by.id('mainView'));
    expect(mainPageHeader.elementArrayFinder_.locator_.value).toBe('For-In-Languages');
mainView
  });
});
