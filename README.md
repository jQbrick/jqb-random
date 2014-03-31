jqb-random
==========

Randomization library.

    var random = require('jqb-random');
    
## Run Tests

If you want to run tests on this module you can prompt:

    npm install && grunt
    
## Methods

### random.integer()

    // random integer form 0 to 10
    random.integer(10);
    
    // random integer from 10 to 20
    random.integer(10, 20);

### random.item()

    // random array item
    random.item(['apple','google','microsoft']);
    
    // random letter from a string
    random.item('a string');
    