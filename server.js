const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;



class User {
    constructor(){
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}


class Company{
    constructor(){
        this._id = faker.datatype.uuid()
        this.name = faker.company.companyName()
    }
}


app.get('/api/users/new', (req, res) => {
    let newUser = new User()
        res.json({employee:newUser})
})

app.get('/api/company/new', (req, res) => {
    let newCompany = new Company()
        res.json({result:newCompany})
})

app.get('/api/company/user', (req, res) => {
    let newCompany = new Company()
    let newUser = new User()
        res.json({company: newCompany, employee: newUser})
})




app.listen(port, () => console.log(`Listening on port: ${port}`));