// TODO: write your code here
export function getHealth(hero) {
  if (hero.health >= 50) {
    return 'healthy';
  } if (hero.health < 50 && hero.health >= 15) {
    return 'wounded';
  } if (hero.health < 15 && hero.health >= 1) {
    return 'critical';
  }
  return 'dead';
}
