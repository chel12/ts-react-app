import React from 'react';
import logo from './logo.svg';
import './App.css';
//!примитивные типы
let a: number | null = 10; //явное присвоение
let name: string = 'it';
let isSamurai: boolean | null = true;
isSamurai = null;

//!не примитивные типы (это значит созданный наш тип, пишем в конце Type для понимания что это тип всего-то)
type AddressType = {
	city?: null;
	country?: null;
};

//!способы указания типа массива
//1 способ для массива <уточнение,generic> <это уточнение>
let names: Array<string> = ['1', '2', '3'];
//2 способ для массива
let names2: string[] = ['4', '5', '6'];

//!строка как тип
let sex: 'male' | 'female';
sex = 'male';

//!Типы для обьекта
type UserType = {
	sayHello: Function; //(message:string) => void - (указываем что функция не должна ничего возвращать)
	//делается в основном для метода
	//параметры функции тоде должны быть типизированы
	name: string;
	age: number;
	isSamurai: boolean;
	address: AddressType | null;
};
//обьекты
// let user: UserType = { //присобачили раннее созданый тип и на его базе заполняем
// 	sayHello(message:string){alert('yo')},
// 	name:'Sima',
// 	age:32,
// 	isSamurai:true,
// 	address:{
// 		country:'Belarus',
// 	}
// }

const summ = (a: number, b: number) => {
	return a + b;
};

//!any - значити может быть все что угодно
//Функция, типизация параметров
// let initialState = {
// 	name:'Sima',
// 	age:32,
// 	isSamurai:true,
// 	address:{
// 		country:'Belarus'
// 	}
// }
//!автоматом проверить и сделать такой тип
// export type InitialStateType = typeof initialState;
//но если в таком случае мы ещё не получили данные с сервера, то тогда получим null
//! решение такое
// let initialState = {
// 	name:null as string|null, воспринимай нулл как строка или нул
// 	age:null as number | null,
// 	isSamurai:null as true | null,
// 	address:{
// 		country: null,
//       city:null
// 	} as AddressType
// }
// export type InitialStateType = {
// 	name: string,
// 	age:number,
// 	isSamurai:boolean,
// 	address: AddressType | null,
// 	counter:number,
// }
let initialState = {
	name: null as string | null,
	age: null as number | null,
	isSamurai: null as boolean | null,
	address: [] as Array<AddressType>,
	counter: 0,
};
export type InitialStateType = typeof initialState;
let state: InitialStateType = {
	address: [{ city: null, country: null }],
	age: null,
	isSamurai: false,
	counter: 4,
	name: 'he-he',
};

//!Создание своего типа для Экшена
//!typeof в TS возвращает тип обьекта, никак у JS

let GET_TASKS = 'APP/GetTASKS';
type GetTasksActionType = {
	id: number;
	type: typeof GET_TASKS; //сделать тип на базе переменной GET_TASKS
};
let action: GetTasksActionType = {
	//описание типа для экшена, который мы задиспачим
	id: 2,
	type: GET_TASKS, //тип который записан в эту переменную
};






function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
