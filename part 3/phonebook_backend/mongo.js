const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const nameInput = process.argv[3];
const numberInput = process.argv[4];

const url = `mongodb+srv://mariiarogina:${password}@cluster0.zhn2t.mongodb.net/RoginaPhoneDatabase?retryWrites=true&w=majority`;

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: nameInput,
  number: numberInput,
});

if (!nameInput && !numberInput) {
  Person.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((person) => {
      console.log(person.name + " " + person.number);
    });
    mongoose.connection.close();
  });
} else {
  person.save().then(() => {
    console.log("Person saved!");
    mongoose.connection.close();
  });
}
