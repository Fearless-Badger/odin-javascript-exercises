const findTheOldest = function (people = []) {
  const cur_year = new Date().getFullYear();
  let oldest = 0;
  let result;

  people.forEach(function (person) {
    let cur_age;
    if (person.yearOfDeath) {
      cur_age = person.yearOfDeath - person.yearOfBirth;
    } else {
      cur_age = cur_year - person.yearOfBirth;
    }

    if (cur_age > oldest) {
      oldest = cur_age;
      result = person;
    }
  });

  return result;
};

// Do not edit below this line
module.exports = findTheOldest;
