import Tile from './Tile';
import json from '../dashboard/restaurants.json';

export default function SearchMenu() {
  return (
    <>
      {Object.entries(json).map(([key, value]) => (
        <Tile
          title={value.title}
          rating={value.rating}
          prepTime={value.prepTime}
          items={value.menu.items}
        />
      ))}
    </>
  );
}
