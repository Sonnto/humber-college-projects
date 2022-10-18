//CREATE OBJECT
let macBookPro = {
  year: 2018,
  ram: "16gb",
  storage: "1tb",
  screenSize: "13inch",
  upgradeInternals: function () {
    macBookPro.ram = "32gb";
    alert(
      `Your MacBook Pro's RAM has been successfully upgraded to ${macBookPro.ram}`
    );
  },
};

//OUTPUT OBJECT INTO CONSOLE
console.log(macBookPro);

//USER UPGRADES macBookPro.year
let yearUpgrade = prompt(
  "Please insert a year to upgrade your MacBook Pro:",
  macBookPro.year
);
macBookPro.year = yearUpgrade;
console.log(macBookPro);

//USER UPGRADES macBookPro.screenSize
let screenChoice = prompt(
  "Please choose a screen size between 13inch or 16inch",
  macBookPro.screenSize
);
macBookPro.screenSize = screenChoice;
console.log(macBookPro);

//USER GETS FREE UPGRADE OF macBookPro.ram THROUGH APPLE
macBookPro.upgradeInternals();
console.log(macBookPro);
