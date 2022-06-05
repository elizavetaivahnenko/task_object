
// Task 1 Создайте объект ноутбука 
const laptope = {
	serialNumber:'3V5E7EA',
	model: 'HP 225 G8',
	display: {
		display: 'IPS',
		screenResolution: { h: 1920, w: 1080 },
	},
	prozessor: {
		numberOfCores: 8,
		generation: 'AMD',
		type: 'Ryzen 7',
		model: '5700U',
		CPU: '1.8 - 4.3 ГГц',
	},
	memory: '8GB',
	drives: {
		volume: ['HDD', '256 ГБ', 'SSD'],
		videoCard:['AMD', 'Radeon', 'Graphics'],
	},
	frame: {
		color: 'gray',
		weight: '1.7',
		dimensions: {
			w: 358,
			h: 242,
			d:19,
		}
	}
}
//Task 2 Создайте класс который описывает создание нового пользователя с помощью логина и пароля. Сделайте несколько обьектов. 

class USER {
	constructor(loginValue, passwordValue,) {
		this.login = loginValue;
		this.password = passwordValue;
	}
}
const user1 = new USER('login task2', 'password task2'); 
const user2 = new USER('login 2', 'pasword2');
console.log(user1);
console.log(user2);

///попробовала еще при помощи класса создать массив 
const newArray = [
	userArray = new USER('login1', 'qwerty'),
	userArray2=new USER('login2','qwerty')
]
console.log(newArray)
//Создайте массив из нескольких обьектов(не вводите id)
let userArr = [
	{
		login: 'login1',
		password:'qwerty',
	},
	{
		login: 'login2',
		password:'qwerty2',
	},
]
	
// Task 3 Из полученого массива в задании 2 сделайте карту (map). в качестве ключа используйте логин
let userMap = new Map();
for (let i = 0; i < userArr.length; i++){
	userMap.set(userArr[i].login, userArr[i]);
}
console.log(userMap)

// Task 4* разными способами решите вопрос соединения двух массивов без повторов






