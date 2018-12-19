var numberOfSams = 15;

const getSamCount = () => {
  return numberOfSams;
}

const addSamCount = () => {
  return ++numberOfSams;
}

const subtractSamCount = () => {
  return --numberOfSams;
}


module.exports = {
  subtractSamCount,
  addSamCount,
  getSamCount,
}

