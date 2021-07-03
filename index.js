function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

const fuzzyMatch = (drivers, partialName) => drivers.filter(driver => driver.match(new RegExp(`^${partialName}`, 'i')));

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}