import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "../components/Results";
import useBreedList from "../hooks/useBreedList";
import fetchPets from "../queries/fetchPets";
import AdoptedPetContext from "../context/AdoptedPetContext";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requesParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  // eslint-disable-next-line no-unused-vars
  const [adoptedPet, _] = useContext(AdoptedPetContext);
  const results = useQuery(["pets", requesParams], fetchPets);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      location: formData.get("location") ?? "",
      animal: formData.get("animal") ?? "",
      breed: formData.get("breed") ?? "",
    };
    setRequestParams(obj);
  };

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🐾</h2>
      </div>
    );
  }

  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="location"
          name="location"
        />
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          name="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option value="" />
          {ANIMALS.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select id="breed" name="breed" disabled={breeds.length === 0}>
          <option value="" />
          {breeds.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
