const fetchDogs = async () => {
  try {
    const URL = "https://dog.ceo/api/breeds/image/random";
    const data = await fetch(URL);
    const dataJson = data.json();
    const randomDog = dataJson;
    return randomDog;
  } catch (e) {
    throw e.message;
  }
};

module.exports = { fetchDogs };