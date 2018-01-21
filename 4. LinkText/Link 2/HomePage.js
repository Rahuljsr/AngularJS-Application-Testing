describe('AngularJS Login functionality', function() {
  
	it('should have a title', function() {
   	 browser.get('http://localhost:8080/#!/login');

	  
	 element(by.linkText('JasonWatmore.com')).click();
	 expect(browser.getCurrentUrl()).toBe('http://jasonwatmore.com/'); // To check current URL
	 console.log('Successfully Navigated To JatsonWatmore Page');
});
  
	 
});