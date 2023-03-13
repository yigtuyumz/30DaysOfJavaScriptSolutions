'use strict';
/*
	Bir fonksiyonu parametre olarak alan
	veya
	bir fonksiyon return eden
	fonksiyonlara Higher Order Function
	denir.
*/
///////////////////////////////////////////////////////////////////////////////
{
	const callback = (...args) =>
	{
		for (let e of args)
		{
			process.stdout.write(`${e.toString()} `);
		}

	};

	setTimeout(callback, 0, 'arg1', 'arg2', 'arg3', '...', 'argn');
}
///////////////////////////////////////////////////////////////////////////////
{
	const callback2 = (n) => {
		return (n * n);
	};
	
	const test = (callback2, n) =>
	{
		return (callback2(n) * n);
	};
	
	/* console.log */	test(callback2, 5);
}
///////////////////////////////////////////////////////////////////////////////
{
	/* Higher Order Functions deger olarak bir `fonksiyon` dondurur. */
	/* 3 adet `anonymous function` kullaniliyor. */
	const function1 = (param1) =>
	{
		const function2 = (param2) =>
		{
			const function3 = (param3) =>
			{
				return (param1 + param2 + param3);
			};
			return (function3);
		};
		return (function2);
	};

	/* console.log */	function1(2)('a')(5);
}
///////////////////////////////////////////////////////////////////////////////
function function1(param1)
{
	function function2(param2)
	{
		function function3(param3)
		{
			return (param3 + param2 + param1);
		}
		return (function3);
	}
	return (function2);
}
/* console.log */	function1(1)(3)(4);
///////////////////////////////////////////////////////////////////////////////

// Last Edit : 2023-02-25 16:33:25
