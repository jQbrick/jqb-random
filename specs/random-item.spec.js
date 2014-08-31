
var random = require('../index');

describe('jqb-random :: item()', function() {
    
    it('should return a random item from a given array', function() {
        var testArray = ['apple','microsoft','ibm','next','hp'];
        var testResult = random.item(testArray);
        expect(
            testArray
        ).to.include(testResult);
    });
    
    it('should return a random letter from a given string', function() {
        var testString = 'test string';
        var testResult = random.item(testString);
        expect(
            testString
        ).to.include(testResult);
    });
    
    it('should return "-1" if "undefined" array was given', function() {
        expect(
            random.item()
        ).to.equal(-1);
    });
    
    it('should return "-1" if "numeric" value was given', function() {
        expect(
            random.item(22)
        ).to.equal(-1);
    });
    
    it('should return "-1" if "boolean true" value was given', function() {
        expect(
            random.item(true)
        ).to.equal(-1);
    });
    
    it('should return "-1" if "boolean false" value was given', function() {
        expect(
            random.item(false)
        ).to.equal(-1);
    });
    
});