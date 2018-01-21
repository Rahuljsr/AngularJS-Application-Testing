describe('AngularJS Login functionality', function() {
  
	it('should have a title', function() {
   	 browser.get('http://localhost:8080/#!/login');

	  
	 element(by.linkText('Register')).click();
	 element(by.model('vm.user.firstName')).sendKeys('Test'); // First Name
	 element(by.model('vm.user.lastName')).sendKeys('Test2');
	 element(by.model('vm.user.username')).sendKeys('Test123');
	 element(by.model('vm.user.password')).sendKeys('123');
	 element(by.xpath('/html/body/div[1]/div/div/div/div/form/div[5]/button')).click();
	console.log('Registration Successful');

	 element(by.model('vm.username')).sendKeys('Test123');
	 element(by.model('vm.password')).sendKeys('123');
   	 element(by.xpath('/html/body/div[1]/div/div/div/div/form/div[3]/button')).click();
	console.log('Successfully Logged In');
});
  
	 
});