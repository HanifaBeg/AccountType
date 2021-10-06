const Check=require('./index')
const accountBalanceHistory = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
]
describe("Check suite", function() {
    //expect function should run sucessfully
    test("Should return the type of account and run sucessfully", function() {
      expect(Check(accountBalanceHistory)).toBe("Hey! Your Account is Fixed account.");
    });

    //Data type of the sample data should be correct
    test("Should check data passed", function() {
        expect(accountBalanceHistory && typeof accountBalanceHistory === 'object').toBe(true);
        expect(accountBalanceHistory[0].hasOwnProperty('account')).toBe(true);
      });
   
   //Run sucessfully when passed no paraemeter by using default value given in code
    test("Should return expected value when passed no parameter", function() {
        expect(Check()).toBe("Hey! Your Account is Fixed account.");
      });

    
      test("Structure of data should be correct  ", function() {
        expect(accountBalanceHistory[0].hasOwnProperty('account')).toBe(true);
      });

      
  });