'use strict';

let personAccount = {
	/* properties */
	firstName		:	'waga',
	lastName		:	'bond12',
	currency		:	'USD',
	incomes			:
	{
		income1		:
		{
			amount			:	100,
			description		:	'income1 Description Text'
		},
		income2		:
		{
			amount			:	120,
			description		:	'income2 Description Text'
		},
		income3		:
		{
			amount			:	110,
			description		:	'income3 Description Text'
		},
		income4		:
		{
			amount			:	130,
			description		:	'income4 Description Text'
		},
		income5		:
		{
			amount			:	140,
			description		:	'income5 Description Text'
		}
	},
	expanses		:
	{
		expanse1	:
		{
			amount			:	10,
			description		:	'expanse1 Description Text'
		},
		expanse2	:
		{
			amount			:	30,
			description		:	'expanse2 Description Text'
		},
		expanse3	:
		{
			amount			:	20,
			description		:	'expanse3 Description Text'
		},
		expanse4	:
		{
			amount			:	40,
			description		:	'expanse4 Description Text'
		},
		expanse5	:
		{
			amount			:	50,
			description		:	'expanse5 Description Text'
		}
	},

	/* methods */
	totalIncome		:	function() {
		let income;

		income = 0;
		Object.values(this.incomes).forEach(key => {
			income += key.amount;
		});

		return (income);
	},

	totalExpanse	:	function() {
		let expanse;

		expanse = 0;
		Object.values(this.expanses).forEach(key => {
			expanse += key.amount;
		});

		return (expanse);
	},

	accountInfo		:	function() {
		let fullName = this.firstName + ' ' + this.lastName;

		return (`Account owner '${fullName}'`);
	},

	addIncome		:	function(amt, desc) {
		let newIncomeName;
		newIncomeName = 'income' + ((Object.keys(this.incomes).length) + 1);

		if (desc === undefined)
		{
			desc = 'No Description.';
		}
		else
		{
			desc = desc + '';
		}

		this.incomes[newIncomeName] = {
			amount		:	amt,
			description	:	desc
		};
	},

	addExpense		:	function(amt, desc) {
		let newExpanseName;
		newExpanseName = 'expanse' + ((Object.keys(this.expanses).length) + 1);

		if (desc === undefined)
		{
			desc = 'No Description.';
		}
		else
		{
			desc = desc + '';
		}

		this.expanses[newExpanseName] = {
			amount		:	amt,
			description	:	desc
		};
	},

	accountBalance	:	function() {
		return (`Balance of ${this.accountInfo()} is : ${this.totalIncome() - this.totalExpanse()}${this.currency}`);
	}
};

console.log(personAccount);

// Last Edit : 2023-02-25 16:32:23
