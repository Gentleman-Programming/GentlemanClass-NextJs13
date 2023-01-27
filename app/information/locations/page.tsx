import { Card, Navigator } from "../../../components";
import { Routes } from "../../../models";
import { getLocations } from "./services";

async function fetchLocations() {
  return getLocations();
}

async function Locations() {
  const locations = await fetchLocations();
  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.CHARACTERS]} />
      {locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
}
export default Locations;
