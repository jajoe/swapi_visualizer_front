import types from './types';

/** 
 Array used to defined the options of the Select component in the page Home.
 This array includes objects with two values : 
 - the "value" props of the <option> of the Select
 - the text which will be displayed in the <option>
*/
const arrayOfFilters = [
  { value: types.ALL, text: 'Aucun filtre' },
  { value: types.PEOPLE, text: 'Personnages' },
  { value: types.SPECIES, text: 'Espèces' },
  { value: types.STARSHIPS, text: 'Vaisseaux' },
  { value: types.VEHICLES, text: 'Véhicules' },
  { value: types.PLANETS, text: 'Planètes' },
];

export default arrayOfFilters;
