const hasLicence = true;
const age = 19;
const isDrunk = false;
const canDrive = (hasLicence && (age >= 18) && !isDrunk);
console.log(`Машину водить: ${canDrive ? 'можно' : 'нельзя'}`);
