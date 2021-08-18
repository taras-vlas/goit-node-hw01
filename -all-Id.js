// map  приклад    https://tproger.ru/translations/javascript-arrays-best-practices/

const arrayData = [
    { title: 'My activity', coordinates: [50.123, 3.291], id: 2 },
    { title: 'Another activity', coordinates: [1.238, 4.292], id: 5 }
]
//Метод  map
const arrayId = arrayData .map(allData => allData.id)
console.log(arrayId)
//Метод  Math.max()
console.log(Math.max(...arrayId))