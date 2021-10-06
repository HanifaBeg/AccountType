const accountBalance = [
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


const accountTypeChecker = (accountBalanceHistory) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/



    let result = 0;

    /**
     * Taking out the initial Difference and assumes that 
     * Account is of Fixed type
     */

    var InitialDiff = accountBalanceHistory[1].account.balance.amount - accountBalanceHistory[0].account.balance.amount;

    for (i = 1; i + 1 < accountBalanceHistory.length; i++) {

        /**
         * Comparing the initial difference with rest of the difference 
         * If all the difference in Amount is same for all then 
         * The account is of Fixed type 
         */
        let CurrAmt = accountBalanceHistory[i + 1].account.balance.amount - accountBalanceHistory[i].account.balance.amount;

        if (CurrAmt !== InitialDiff) {

            /**
             * Here the Difference is different 
             * Only variable account fullfills this
             * condition
             */
            result = 1
            break;
        }

    }

    return result ? "A" : "B";
};

//Check();  uncomment it if not using testcase file

module.exports = function Check(accountBalanceHistory) {
    var accType;
    /**
     * If no parameter is passed then it uses predefined value 
     * declared above as accountBalance
     */
    if(accountBalanceHistory==undefined)
    {
        accType= accountTypeChecker(accountBalance)
    }
   else
   {
    /**
     * else it used the value passed from testing function
     * 
     */
     
    accType = accountTypeChecker(accountBalanceHistory);
   }
    
    
    
    
    if (accType === "A") {
        console.log("Hey! Your Account is Variable account.")
        return "Hey! Your Account is Variable account.";
    }
    else {
        console.log("Hey! Your Account is Fixed account.")
        return "Hey! Your Account is Fixed account.";
    }

}
