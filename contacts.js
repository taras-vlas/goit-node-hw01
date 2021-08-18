// contacts.js

//***Імпортуємо
const fs = require('fs').promises;   //const fs = require('fs'); 
const path = require('path');

/*
 * Створення змінної  contactsPath  та запис в неї шлях до файлу  contacts.json
 * Для створення шляху використовуєм методи модуля path
 * 
 * Повний щлях до папки з поточним модулем / папка / файл
 */
//const contactsPath = path.resolve('db', './contacts.json'); // ('./db/contacts.json')
const contactsPath = path.join(__dirname, "db", "contacts.json");
//console.log(__dirname);
console.log('contactsPath: ', contactsPath );

// TODO: документуємо кожну функцію
// /* Отримуємо колекцію контактів. В функціях використання модуля fs і його методів readFile() та writeFile() */
    async function listContacts() {
        try{
            const data = await fs.readFile(contactsPath, 'utf8')
            //return JSON.parse(data);   //або
            const list = JSON.parse(data);  //Вивести 

            return console.table(list);     //console.log(list);
                                            //return list;
        } catch (err) {
            console.warn(err)
        } 
    };

    // Отримуємо контакт по id
    async function getContactById(contactId) {  // getContactById - містить 1 контакт
        try{
            const data = await fs.readFile(contactsPath, "utf8")
            const list = JSON.parse(data);  //Вивести 

            const contact = list.filter((contact) => contact.id === Number(contactId));  //find(({ id }) => id === contactId)
            return console.table(contact);
    
        } catch (err) {
            console.warn(err)
        } 
    };


    // Видаляємо контакт 
    async function removeContact(contactId) {   
        try {
            const data = await fs.readFile(contactsPath, "utf8")
            const contact = JSON.parse(data);  //Вивести 
                                               // все крім id = contactId
            const remainContent = contact.filter((contact) => contact.id !== Number(contactId)); 
             console.log('3....remainContent.length, data.length:',remainContent.length, contact.length);
            if (remainContent.length === contact.length) {
                console.log(`Contact with ID "${contactId}" not found and don't removed!`);
                return;
            }
            await fs.writeFile(contactsPath, (JSON.stringify(remainContent, null, '\t')), 'utf8');
            console.log(`Contact deleted - id:${contactId} `);
            
            return console.table(remainContent); 
        
        } catch (err) {
            console.warn(err)
        } 
    };

    // Добавляємо контакт
    async function addContact(name, email, phone) {
        try {
            const data = await fs.readFile(contactsPath, "utf8")
            const contact = JSON.parse(data);  //Вивести 

                //*** Метод  map    
            const arrayId = contact.map(allData => allData.id)
            
                //*** Метод  Math.max()
            //console.log(Math.max(...arrayId))         
            const nextId = Math.max(...arrayId) + 1;
         
            //console.log('4.... nextId: ', nextId, name, email, phone);
            if (name === "undefined") return 'Undefined value!';

            const contacts =
                [ ...contact, { id: nextId, name, email, phone }];
            
            await fs.writeFile(contactsPath,  JSON.stringify(contacts, null,'\t'), 'utf-8');
            console.log(`New contact added: ${name}`);
            return console.table(contacts);

        } catch (err) {
            console.warn(err)
        } 
    };

module.exports = {    //або  exports   для ECMOscript
    listContacts,
    getContactById,
    removeContact,
    addContact
};

