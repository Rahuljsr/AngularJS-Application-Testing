describe('AngularJS Login functionality', function() {
  
	it('should have a title', function() {
    browser.get('http://localhost:8080/#!/login');

  	 element(by.model('vm.username')).sendKeys('Test123');
	 element(by.model('vm.password')).sendKeys('123');
   	 element(by.xpath('/html/body/div[1]/div/div/div/div/form/div[3]/button')).click();
	console.log('Unable to Login');
});
  
	 
});