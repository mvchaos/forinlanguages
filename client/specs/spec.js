describe('Protractor Demo App', function(){
  it('Navigates to Login Page', function(){
    // browser.get('https://sendair.herokuapp.com')
    browser.get('http://localhost:3000')

    //sanity test
    expect(browser.getTitle()).toEqual('For-In Languages');

    var loginHeader = element(by.id('loginHeader'));
    expect(loginHeader.elementArrayFinder_.locator_.value).toBe('loginHeader');
  });

  it('Login Successfully', function(){
    browser.get('http://localhost:3000')

    element(by.model('username')).sendKeys('admin');
    element(by.model('password')).sendKeys('password1234');
    element(by.id('loginButton')).click();

    var mainPageHeader = element(by.id('mainView'));
    expect(mainPageHeader.elementArrayFinder_.locator_.value).toBe('For-In-Languages');
  });

  it('Signup Successfully', function(){
    browser.get('http://localhost:3000/#/signup');

    element(by.model('username')).sendKeys('admin');
    element(by.model('passwordOne')).sendKeys('password1234');
    element(by.model('passwordTwo')).sendKeys('password1234');
    element(by.model('email')).sendKeys('admin@sendair.com');
    element(by.id('signupButton')).click();

    var mainPageHeader = element(by.id('mainView'));
    expect(mainPageHeader.elementArrayFinder_.locator_.value).toBe('For-In-Languages');
  });
});
