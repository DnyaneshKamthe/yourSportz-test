const User = require("../models/user");

const getUSers = (req, res) => {
  User.sync({
    force: false,
  })
  .then(() => {
    return User.findAll();
  })
  .then((people) => {
    res.send(people);
  });
};

// // Assuming you want to find a person by their email
// app.get("/find-by-email/:email", (req, res) => {
//   const email = req.params.email;

//   People.findOne({
//     where: {
//       email: email // Find by email
//     }
//   })
//   .then((person) => {
//     if (person) {
//       res.send(person);
//     } else {
//       res.status(404).send("Person not found");
//     }
//   })
//   .catch((error) => {
//     console.error("Error finding person:", error);
//     res.status(500).send("Internal Server Error");
//   });
// });

// app.post("/create", (req, res) => {
//   // Assuming `People` is your Sequelize model for the user
//   People.sync({ force: false })
//     .then(() => {
//       return People.create({
//         name: req.body.name,
//         phoneNo: req.body.phoneNo
//       });
//     })
//     .then((createdPerson) => {
//       res.send("Person created with name: " + createdPerson.name);
//     })
//     .catch((err) => {
//       console.log("Error:", err.message);
//       res.status(500).send("Error occurred while creating the person.");
//     });
// });


// app.post("/create", (req, res) => {
//   People.sync({
//     force: false,
//   })
//   .then(() => {
//     return People.bulkCreate([
//         {
//             name: req.body.name,
//             phoneNo: req.body.phoneNo
//         },
//     ]);
//   })
//   .catch((err) => {
//     console.log("error:-", err.message);
//   })
//   res.send("people created with name:- " + req.body.name);
// });

const deleteUsers = (req, res) => {
    User.drop();
    res.send("Users table dropped");
};

module.exports = {getUSers, deleteUsers};
