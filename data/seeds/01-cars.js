exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars").del()
    .then(function () {
      // Inserts seed entries
      // add validation --> VIN cannot contain Q, I, or O --> all VINs are 17 characters long
      return knex("cars").insert([{
          VIN: "KNAFT4A22D5675895",
          make: "Kia",
          model: "Forte",
          year: 2013,
          mileage: 120000,
        },
        {
          VIN: "JHMBB2269NC026648",
          make: "Honda",
          model: "Prelude",
          year: 1992,
          mileage: "190920",
        },
        {
          VIN: "1GNDX03E8WD341403",
          make: "Chevrolet",
          model: "Venture",
          year: 1998,
          mileage: 190980,
        },
        {
          VIN: "JH4DC4440SS014645",
          make: "Acura",
          model: "Integra",
          year: 1995,
          mileage: 190950,
        },
      ]);
    });
};