const findTheOldest = function (people) {
  const listOfAge = people.map((person) => {
    if(person.yearOfDeath == undefined){
      person.yearOfDeath = 2026;
    }
    return person.yearOfDeath - person.yearOfBirth;
  })
  const sortedAge = listOfAge.sort((a, b) => {
    return b - a;
  })
  const oldestAge = sortedAge[0];
  const oldestPersonObject = people.filter((person) => {
    return (person.yearOfDeath - person.yearOfBirth) == oldestAge;
  });
  return oldestPersonObject[0];
  // return listOfAge;


};

const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
