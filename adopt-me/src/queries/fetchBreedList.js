const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return null;

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchBreedList;