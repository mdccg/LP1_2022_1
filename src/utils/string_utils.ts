/**
 * perdoa a gambiarra e não desiste de mim pfv TwT
 */
export const toKehabCase = (string: string) => {
  return string
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(' ')
    .filter(Boolean)
    .join('-')
}