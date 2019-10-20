exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: 'Darrell',
          lastName: 'Couch',
          isAdmin: false,
          isClient: false,
          isDonor: false,
          isVolunteer: true,
          phoneNumber: "1115550101",
          shirtSize: "md",
          streetAddress: "123 s. code Rd.",
          city: "Devland",
          state: "AZ",
          zipCode: 85207,
          businessName: "",
          email: "darrell.couch16@gamil.com",
          createdOn: new Date(),
          createdAtEvent_Id: 1
        },
        {
          firstName: 'Mike',
          lastName: 'Smith',
          isAdmin: false,
          isClient: false,
          isDonor: true,
          isVolunteer: true,
          phoneNumber: "2225550202",
          shirtSize: "md",
          streetAddress: "173 s. java st.",
          city: "Codeland",
          state: "AZ",
          zipCode: 85212,
          businessName: "the Mike Co.",
          email: "mikeTheMan@gamil.com",
          createdOn: new Date(),
          createdAtEvent_Id: 1
        },
        {
          firstName: 'jon',
          lastName: 'McCarthy',
          isAdmin: true,
          isClient: false,
          isDonor: false,
          isVolunteer: true,
          phoneNumber: "3335550303",
          shirtSize: "md",
          streetAddress: "123 s. Ruby Way.",
          city: "ReactsVille",
          state: "AZ",
          zipCode: 85275,
          businessName: "",
          email: "jon_mccarthy@gamil.com",
          createdOn: new Date(),
          createdAtEvent_Id: null
        },
        {
          firstName: 'Derek',
          lastName: 'Mann',
          isAdmin: true,
          isClient: true,
          isDonor: false,
          isVolunteer: false,
          phoneNumber: "4445550404",
          shirtSize: "md",
          streetAddress: "123 s. Node Dr.",
          city: "Applestown",
          state: "AZ",
          zipCode: 85293,
          businessName: "",
          email: "derek@gamil.com",
          createdOn: new Date(),
          createdAtEvent_Id: 1
        }
      ]);
    });
};



