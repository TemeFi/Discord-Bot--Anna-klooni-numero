const mongo = require('./mongoose');
const guildModel = require ('./models/guild');
const mongoose = require('./mongoose');
var fs = require('fs');


module.exports.checkDouble = async (guildId, number) => {
    
    var array = fs.readFileSync('canonClones.txt').toString();

    var dbArray = [];

    const all = await guildModel.find({
        guildId
    })

    for (let counter = 0; counter < all.length; ++counter) {
        dbArray.push(all[counter].ctNumber);
    }

    while (dbArray.includes(number) == true || array.includes(number)) 
    {
        console.log('Old number ' + number)
        number = 'CT-' + Math.floor(Math.random() * 100) + '-' + Math.floor(Math.random() * 10000);
        console.log('Generated new number ' + number)

    } 

    console.log('Final Number: ' + number)
    return number;
}