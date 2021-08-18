/*  index.js */


/**** модуль commander для парсинга аргументов командной строки. */

const {listContacts, getContactById, removeContact, addContact} = require("./contacts.js");

const { Command } = require("commander"); // використання модуля commander, як більш популярна альтернатива модуля yargs
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

// index.js
const argv = program.opts();

// TODO: рефакторити
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    
    case "list":
      // ...
                              //listContacts().then((contacts) => console.table(contacts));
      listContacts();
      break;

    case "get":
      // ... id
                              // getContactById(id).then((data) => {
                              //   if (data) console.table([data]);
                              //   else console.warn(`No contacts found by given id: ${id}`);
                              // });
      getContactById(id);
      break;

    case "add":
      // ... name email phone
                              // addContact(name, email, phone).then((data) => {
                              //   if (data) console.log("Successfully added");
                              //   else console.warn(`No data was added. Check the entered data.`);
                              // });
      addContact(name, email, phone);
      break;

    case "remove":
      // ... id
                              // removeContact(id).then((data) => {
                              //   if (data) console.log("Successfully removed");
                              //   else console.warn(`No data was removed. Check the entered data.`);
                              // });
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);




// //***Імпортуємо
// const yargs = require('yargs');
// const fncontacts = require("./contacts");
//     // const { listContacts,getContactById,removeContact,addContact
//     //      } = require('./contacts');

//     // //***Визиваємо
//     // console.log(`get current date function result: ${listContacts()}`);
//     // console.log(`Id date function result: ${getContactById()}`);
//     // console.log(`remove date function result: ${removeContact()}`);
//     // console.log(`add date function result: ${addContact()}`);


// /**** Імпорт пакету yargs для парсінга аргументів командної строки. */
// // const argv = require('yargs').argv;    // використання модуля commander, як більш популярна альтернатива модуля yargs
// const argv = yargs
//   .string("action")
//   .number("id")
//   .string("name")
//   .string("email")
//   .string("phone").argv;

// // TODO: рефакторить
// /* функція invokeAction() отримує тип виконуємої дії та необхідні аргументи. Функція викликає відповідний метод з файла contacts.js передаючи йому необхідні аргументи. */
// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {

//     case 'list':
//       // ... 
//      //  fncontacts.listContacts();
//       const contactList = await fncontacts.listContacts();
//       console.table(contactList);
//       break;

//     case 'get':
//       // ... id     
//      //  fncontacts.getContactById(id);
//       const contactById = await fncontacts.getContactById(id);
//       console.log(contactById);
//       break;

//     case 'add':
//       // ... name email phone
//      //  fncontacts.addContact(name, email, phone);
//       const contactAdd = await fncontacts.addContact(name, email, phone);
//       console.table(contactAdd);
//       break;

//     case 'remove':
//       // ... id
//      //  fncontacts.removeContact(id);
//       const contactRemove = await fncontacts.removeContact(id);
//       console.table(contactRemove);      
//       break;

//     default:
//       console.warn('\x1B[31m Unknown action type!');
//   }
// }

// invokeAction(argv);


