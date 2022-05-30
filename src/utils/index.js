import { ANIMAL_IMAGES, CAT, DOG, ELEPHANT, LION, MONKEY } from '../constants'

export const getAnimalImage = (animal) => {
  if (![CAT, DOG, ELEPHANT, LION, MONKEY].includes(animal)) return null
  return ANIMAL_IMAGES[animal]
}
