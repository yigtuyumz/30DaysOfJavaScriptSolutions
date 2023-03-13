'use strict';

/*
	forEach(): Array'in her bir elemani uzerinde callback fonksiyonu uygular.
	for dongusu ile ayni mantikta calisir.

	array.forEach((element) => {console.log(element)})


	for (let element of array)
	{
		console.log(element)
	}
*/


/*
	map(): Array'in her elemani uzerinde callback fonksiyonundaki modifikasyonlari uygular.
	Ve modifiye edilmis elemanlari yeni bir array'in icerisine sirasiyla yerlestirerek yeni array'i return eder.
	
	forEach ise sadece array'in elemanlari uzerinde sirasiyla callback islemlerini gerceklestirir.

	let array2 = array1.map((element) => { return (Math.sqrt(element)); });


	array2 forEach ile olusturulmak istenseydi, kod su sekilde olabilirdi:

	let array2 = [];
	array1.forEach((element) => { array2.push(Math.sqrt(element)); });
*/


/*
	filter(): array'daki callback'taki kosula uyan elemanlari dondurur.
	Dondurulen elamanlar, yeni bir array'e yerlestirilir. Dolayisiyla yeni bir array olusur.

	let array2 = array.filter((element) => { return (element.length >= 6); });
	ya da
	let array2 = array.filter(element => element.length >= 6);
*/


/*
	reduce(): Bu metod, array'in her elemani icin bir callback yurutur ve sonunda diziyi tek bir elemana indirger.
	Metodun donus degeri ilk parametresi olan `accumulator` icerisinde saklanir.

	`accumulator` baslangicta array'in ilk elemanidir.

	filter()'den farki, filter istenilen degerleri cekmemize yararken,
	reduce() tum elemanlari tek bir degere indirger.
*/

// Last Edit : 2023-02-17 13:39:11
