import Tile from './Tile';
import json from '../dashboard/restaurants.json';

export default function SearchMenu() {
  return (
    <>
      {Object.entries(json).map(([key, value]) => (
        <Tile title={value.title} rating="3.7(5492)" prepTime="42 mins" />
      ))}
    </>
  );
}
