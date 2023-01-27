import { Card, Navigator } from "../../../components";
import { Routes } from "../../../models";
import { getCharacters } from "./services";

async function fetchCharacters() {
  return getCharacters();
}

async function Characters() {
  const characters = await fetchCharacters();
  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.LOCATIONS]} />
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
}
export default Characters;
