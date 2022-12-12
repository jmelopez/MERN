const { faker } = require('@faker-js/faker');

const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newUser = {
        _id: faker.random.numeric(5),
        fistName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number('###-###-####'),
        email: faker.internet.email(),
        password: faker.internet.password(18)
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        _id: faker.random.numeric(5),
        name: faker.company.name(),
        address: faker.address.streetAddress(true) + ' ' + faker.address.city() + ' ' + faker.address.stateAbbr() + ' ' + faker.address.zipCode() +' ' + faker.address.country()
    };
    return newCompany;
};
app.use( express.json() );
app.use( express.urlencoded( { extended: true }) )

app.get("/api/users/new", (req,res) => {
    res.json( createUser() )
})

app.get('/api/companies/new', (req,res) => {
    res.json( createCompany() )
})

app.get('/api/user/company', (req,res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const companyUser = {
        user: newUser,
        company: newCompany
    };
    res.json( companyUser );
});

app.listen( port, () => console.log(`Listening on port: ${port}`));
// const newUserTest = createUser();
// console.log(newUserTest);

// const newCompanyTest = createCompany();
// console.log(newCompanyTest);

