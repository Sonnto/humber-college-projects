//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete Part 2 of the lab.
//6. Once everything is working, tackle the Extra Challenge!

let bankCustomer = {
  lastName: "Wilson",
  branchNumber: "123",
  accountBalance: 500.25,
  interestRate: 1.03,
  multipleAccounts: false,
  makeDeposit: function (depositAmount) {
    bankCustomer.accountBalance += depositAmount;
    return `Thank you, your current balance is now $${bankCustomer.accountBalance}.`;
  },
  makeWithdrawal: function (withdrawAmount) {
    bankCustomer.accountBalance -= withdrawAmount;
    return `Thank you, your current balance is now $${bankCustomer.accountBalance}.`;
  },
  addInterest: function () {
    if (bankCustomer.multipleAccounts === true) {
      let newInterestRate = (bankCustomer.interestRate += 0.005);
      bankCustomer.accountBalance *= newInterestRate;
      return `Since you have multiple accounts, interest rate is $${newInterestRate}. Your current balance is now: $${bankCustomer.accountBalance.toFixed(
        2
      )}.`;
    } else {
      bankCustomer.accountBalance *= bankCustomer.interestRate;
      return `Since you only have one account, interest rate is $${
        bankCustomer.interestRate
      }. Your current balance is now: $${bankCustomer.accountBalance.toFixed(
        2
      )}.`;
    }
  },
};

console.log(bankCustomer.accountBalance);

console.log(bankCustomer.makeDeposit(200));
// console.log(`Current balance: $${bankCustomer.accountBalance}`);

console.log(bankCustomer.makeWithdrawal(75));
// console.log(`Current balance: $${bankCustomer.accountBalance}.`);

console.log(bankCustomer.addInterest());
// console.log(`Current balance: $${bankCustomer.accountBalance.toFixed(2)}.`);
// console.log(`Current interest rate is: $${bankCustomer.interestRate}`);
