describe('AngularJS Login functionality', function() {
  
	it('should have a title', function() {
    browser.get('http://localhost:8080/#!/login');

    expect(browser.getTitle()).toEqual('AngularJS User Registration and Login Example');
 	console.log('Successfully Passed'); 
});
  
	 
});