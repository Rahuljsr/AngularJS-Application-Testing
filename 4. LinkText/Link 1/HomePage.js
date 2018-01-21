describe('AngularJS Login functionality', function() {
  
	it('should have a title', function() {
   	 browser.get('http://localhost:8080/#!/login');

	  
	 element(by.linkText('AngularJS User Registration and Login Example')).click();
	 expect(browser.getCurrentUrl()).toBe('http://jasonwatmore.com/post/2015/03/10/angularjs-user-registration-and-login-example-tutorial'); // To check current URL
	 console.log('Successfully Navigated');
});
  
	 
});