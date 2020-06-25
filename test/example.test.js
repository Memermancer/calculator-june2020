// IMPORT MODULES under test here:
import { add } from '../util.js';
import { subtract } from '../util.js';
import { multiply } from '../util.js';
import { divide } from '../util.js';
// import example from '../example.js';

const test = QUnit.test;

test('addtest 4+12=16', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param1 = 4;
    const param2 = 12;
    const expected = 16;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(param1, param2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('addtest 2+13=15', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param1 = 2;
    const param2 = 13;
    const expected = 15;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(param1, param2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('addtest 7+10=17', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param1 = 7;
    const param2 = 10;
    const expected = 17;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(param1, param2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtest 4-12=-8', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param1 = 4;
    const param2 = 12;
    const expected = -8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(param1, param2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtest 20-10=10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param1 = 20;
    const param2 = 10;
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(param1, param2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtest 40-16=24', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param1 = 40;
    const param2 = 16;
    const expected = 24;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(param1, param2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multest 4*4=16', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param1 = 4;
    const param2 = 4;
    const expected = 16;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(param1, param2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multest 5*6=30', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param1 = 5;
    const param2 = 6;
    const expected = 30;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(param1, param2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multest 2*3=6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param1 = 2;
    const param2 = 3;
    const expected = 6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(param1, param2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divtest 4/2=2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param1 = 4;
    const param2 = 2;
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(param1, param2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divtest 18/3=6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param1 = 18;
    const param2 = 3;
    const expected = 6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(param1, param2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divtest 21/3=7', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param1 = 21;
    const param2 = 3;
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(param1, param2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});