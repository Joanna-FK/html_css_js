var number = 10;
let number2 = number; //kupiujemy wartość  - w typach prymitywnych

console.log(number, number2);
number2 = 20;
console.log(number, number2);

// typy referencyjne - {}, [], () => {} (obiekt, tablica, funkcja)

let person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
};

let newPerson = person; //kopiujemy adres - w obiektach
console.log(person, newPerson);

newPerson.firstName = 'Jakub';
console.log(person, newPerson);

//var, let, const - definiowanie zmiennych
//const myNumber = 10;
const numbersArray = [1, 2, 3, 4, 5, 6];
console.log(numbersArray[numbersArray.length + 5])
let myData = null;
console.log(myData);

//Hoisting - wynoszenie zmiennej przed jej inicjalizację
console.log(myName);
var myName = 'Jakub';

//Temporary Dead Zone
let myOyherName = 'Kuba';
console.log(myOyherName);

myFunction();
function myFunction() {
    console.log('Hello World');
}

//const mynumber = 10;
//mynumber = 11;

const peopleArray = [];
peopleArray.push('Jakub');
console.log(peopleArray);

console.log(typeof peopleArray);
console.log(typeof{});
console.log(Array.isArray([]));
console.log(1 === 1); //korzystamy tylko z potrójenego operatora
console.log(1 === '1'); //korzystamy tylko z potrójenego operatora
console.log(1 == '1');
console.log({} === {});
console.log(_.isEqual({},{}));

console.log([] instanceof Object); //czy dana zmienna jest instancją klasy
console.log([]);
console.log(!!1);
console.log(!!0); //rzutowanie number na boolean
console.log(Boolean(1));
console.log(typeof +'1'); //rzutowanie string na number 
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2 === 0.3.toFixed(1)); //toFixed zaaokrągla

const loremIpsum = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab provident necessitatibus aliquid inventore voluptatem reprehenderit? Earum modi quasi saepe rem quos. Alias odit eos labore atque unde officiis modi ullam!'

console.log(loremIpsum.match(/[A-Za-z]+/g));
console.log(loremIpsum.match(/[A-Za-z]/g));

console.log(parseInt('FF',16));
//1111 =>F
//1110 =>E

class Rowerzysta{
    constructor(rower, kask, vMax){
        this.rower = rower;
        this.kask = kask;
        this.vMax = vMax;
    }

    czyRowerzystaMaKask(){
        console.log(
            //Elvis operator
            //ternart operator
            this.kask === true
            ? 'Rowerzysta ma kask :)'
            : 'Rowerzysta nie ma kasku :c');
    }

    czyRowerzystaJestSzybki(){
        console.log(this.vMax > 40 ? '': '');
    }
}
const rowerzysci = [];
rowerzysci.push(new Rowerzysta('Wigry 3', false, 35));
rowerzysci.push(new Rowerzysta('Wigry 4', true, 25));
rowerzysci.push(new Rowerzysta('Wigry 5', true, 45));
rowerzysci.push(new Rowerzysta('Wigry 6', true, 38));
rowerzysci.push(new Rowerzysta('Wigry 7', true, 45));
rowerzysci.push(new Rowerzysta('Wigry 8', false, 25));
rowerzysci.push(new Rowerzysta('Wigry 8', false, 36));



//rowerzysta1.czyRowerzystaMaKask();

//function test() {} => test = () => {}

console.log(rowerzysci.filter((el, index) => el.kask === true))

const rowerzysciNaZawody = rowerzysci.map((el, index) => {
    const rowerzysta = el;
    rowerzysta.numerStartowy = index +1
    return rowerzysta;
});
console.log(rowerzysciNaZawody);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

const data =  new Promise((resolve, rejected) =>{
    fetch('https://jsonplaceholder.typicode.com/todos')//pobieramy dane z APi, zwracamy promise
  .then(response => resolve(response.json())) //przekazujemy dane z api do metody resolved
  .catch(error => rejected(error))  //metoda reject zostanie wywołana w przypadku błedu pobierania danycn z API
});

data 
.then(dataFromApi => console.log(dataFromApi)) 
.catch(err => console.log(err))

data // data tpo Promise, który posiada dwie wbudowane metody => then, catch
.then(dataFromApi =>{ //dane pobrane z API wykorzystujemy do wyświetlenia na stronie
    const userTask = dataFromApi.filter((el) => el.userId === 2); //tworzymy nową tablicę, poprzez filtrowanie danych z Api. Filtrujemy po polu 'userID' i wartośći '2'
    // console.log(userTask);
    const documentContainer = document.querySelector('#todoList');//wskazujemy kontener w drzewie html (DOM)
    userTask.forEach((el) => { //pętla forEach wywołana na tablicy z zadaniami dla użytkownika o ID ==2
        const htmlEl = document.createElement('p'); //tworzymy elementy drzewa HTML (paragraf)
        htmlEl.innerText = el.title; //do naszego paragrafu wpisujemy tytuł zadania
        documentContainer.appendChild(htmlEl); //dopisujemy nowy node do naszego wcześniej wskazanego kontenera
    })
})
.catch(err => console.log(err))

//wskazujemy kontener
//document.querySelector().classList.includes('darkMode') ? document.querySelector().classList.add('darkMode') : document.querySelector().classList.remove('darkMode')







