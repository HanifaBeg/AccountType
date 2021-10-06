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
    test("Should return the type of account and run sucessfully", function() {
      expect(Check(accountBalanceHistory)).toBe("Hey! Your Account is Fixed account.");
    });
    test("Should check data passed", function() {
        expect(accountBalanceHistory && typeof accountBalanceHistory === 'object').toBe(true)
      });
  });