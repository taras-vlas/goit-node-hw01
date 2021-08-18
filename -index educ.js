//***Імпортуємо
const { getCurrentDate } = require('./contactsUtils');
const Calc = require('calc-js').Calc;
const path = require('path');  
//const fs = require('fs');
const fs = require('fs').promises; //МОЖНА працювати без callback НА promises
    
    const qwe = path.resolve('./qwe'); //абсолютний путь
    const qwe1 = './qwe';   //відносний путь
    console.log('QWE: ', qwe,'QWE1: ', qwe1);

//***Визиваємо
console.log(`get current date function result: ${getCurrentDate()}`);


//***Визиваємо
//console.log(process.env);   //змінна середовища
console.log(process.argv);   //з якими аргументами(параметрами) був запуск процесу
//console.log(__dirname);       // __глобальна змінна
//console.log(__filename);


console.log( new Calc(0.4).sum(0.3).finish()); // !!!! npm start  запустимо так - без консолі

// const [, , a, b] = process.argv;  // !!!! node index 1 2  запустимо з 4-ма параметрами так - через консоль
    // const a = process.argv[2]; //або аналогічний запис
    // const b = process.argv[3]; //або аналогічний запис
    
//console.log( new Calc(parseInt(a)).sum(parseInt(b)).finish()); //Тут показана робота з бібліотекою, а можна було як a+b
//console.log( new Calc(parseFloat(a)).sum(parseFloat(b)).finish());


//***Визиваємо 
console.log(path.resolve('./contactsUtils.js'));


//*****Визиваємо async операцію   чи
// fs.readFile('./data.txt', 'utf8', (error, data) => {   // () => { - визначаєм callback
//     if (error) {
//         console.error(error);
//     }
//     console.log(data);
// });
//     console.log(22222222222);

//*****Визиваємо Sync операцію !!! Не використовувати
// const data = fs.readFileSync(path.resolve('./data.txt'), 'utf8');   // без callback
//     console.log(data);
//     console.log(22222222222);

//*****Визиваємо async операцію: МОЖНА працювати без callback НА promises
// fs.readFile(path.resolve('./data.txt'), 'utf8')
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.error)

// console.log(22222222222)
    //*****АБО Визиваємо async операцію: синтаксисом async
    // (async () => {
    //     const data = await fs.readFile(path.resolve('./data.txt'),'utf8')
    //     console.log(data)
    // })();
    //*****АБО 
    (async () => {
        try{
            // const data = await fs.readFile(path.resolve('./data.txt'),'utf8')
            // console.log(data)
            const data = await fs.readFile(path.resolve('./package.json'),'utf8')
            console.log(JSON.parse(data).dependencies) //Вивести dependencies

            //До старої  інфи дозаписуєм щось <schooll> і створюємо новий файл
            const newContent = `${data} schooll`
            await fs.writeFile(path.resolve('./data1.txt'), newContent, 'utf8');
            //дозаписуєм щось у файл
            await fs.appendFile('./data1.txt', ' lecture', 'utf8');
            //Перейменувати файл і Перемістити до /tmp
            //await fs.rename('./data1.txt', './tmp/data01.txt');
            
            //Прочитаєм директорію tmp
            console.log(await fs.readdir('./tmp'));
            //Видалити файл з /tmp
            // await fs.unlink('./tmp/data01.txt');
        } catch (error) {
            console.error(error)
        } 
    })();