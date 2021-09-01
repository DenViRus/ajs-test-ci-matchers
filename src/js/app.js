// TODO: write your code here
export function sortByHealth(array) {
  array.sort((a, b) => (a.health > b.health ? -1 : 1));
  return array;
}
