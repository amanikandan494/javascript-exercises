const findTheOldest = function (people) {
    return people.reduce((old, individual) => {
      let latestYear=individual.yearOfDeath;
      let oldestYear=old.yearOfDeath;
      if(!latestYear){
          latestYear = new Date().getFullYear();
      }
      if(!oldestYear){
          oldestYear = new Date().getFullYear();
      }
      const individualAge = latestYear - individual.yearOfBirth;
      const oldestAge = oldestYear - old.yearOfBirth;
      return oldestAge>=individualAge?old:individual
    });
  };

// Do not edit below this line
module.exports = findTheOldest;
