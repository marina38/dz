let money = prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
	бюджет: money,
	timeData: time,
	expenses: {
		"ответ на первый вопрос" : "ответ на второй вопрос"
	},
	optionalExpenses:'',
	income: '',
	savings:false
}
var a = prompt('Введите обязательную статью расходов в этом месяце?');
var b = prompt("Во сколько обойдется?");
alert(money/30);
console.log(money/30)