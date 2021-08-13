const faker = require('faker');

const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});

    const userData = [];

    for (let i = 0; i < 20; i++) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
        const name = faker.name.findName();

        userData.push({ username, email, password, name });
    }

    const createdUsers = await User.collection.insertMany(userData);

    console.log('All Done');
    process.exit(0);
})