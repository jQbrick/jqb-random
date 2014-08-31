
var random = require('../index');

describe('jqb-random :: selection()', function() {
    
    var testArray = ['apple','microsoft','ibm','next','hp'];
    
    for (var i=0; i<testArray.length; i++) {
        it('should return a random selection of ' + i + ' items', function() {
            var testResult = random.selection(testArray, i);
            expect(
                testResult.length
            ).to.equal(i);
        });
    }
    
});