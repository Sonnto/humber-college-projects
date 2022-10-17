//CREATE OBJECT
let macBookPro = {
  year: "early 2018",
  ram: "16gb",
  storage: "1tb",
  displaySize: "16 inches",
  upgradeInternals: function () {
    macBookPro.ram = "32gb";
    alert(
      `Your MacBook Pro's RAM has been successfully upgraded to ${macBookPro.ram}`
    );
  },
};
