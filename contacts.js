const fs = require('fs').promises; 
const path = require('path');



const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log('contactsPath: ', contactsPath );

    async function listContacts() {
        try{
            const data = await fs.readFile(contactsPath, 'utf8')

            const list = JSON.parse(data);  

            return console.table(list);     
                                            
        } catch (err) {
            console.warn(err)
        } 
    };

    async function getContactById(contactId) {  
        try{
            const data = await fs.readFile(contactsPath, "utf8")
            const list = JSON.parse(data); 

            const contact = list.filter((contact) => contact.id === Number(contactId));  
            return console.table(contact);
    
        } catch (err) {
            console.warn(err)
        } 
    };


    async function removeContact(contactId) {   
        try {
            const data = await fs.readFile(contactsPath, "utf8")
            const contact = JSON.parse(data);   
                                               
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

    
    async function addContact(name, email, phone) {
        try {
            const data = await fs.readFile(contactsPath, "utf8")
            const contact = JSON.parse(data);   

                   
            const arrayId = contact.map(allData => allData.id)
            
            const nextId = Math.max(...arrayId) + 1;
         
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

module.exports = {    
    listContacts,
    getContactById,
    removeContact,
    addContact
};

