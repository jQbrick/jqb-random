
var random = require('../index');

describe('jqb-random :: integer()', function() {
    
    it('should return a random integer', function() {
        expect(
            random.integer(1,10)
        ).to.be.an.integer;
    });
    
    it('should run on a single item range', function() {
        expect(
            random.integer(1,1)
        ).to.equal(1);
    });
    
    it('if called without params it return 0', function() {
        var stub = sinon.stub(random, "random", function(a,b) {
            expect(a+b).to.equal(0);
            stub.restore();
        });
        random.integer();
    });
    
});