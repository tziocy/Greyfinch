import styled from 'styled-components'
import { getAnimalImage } from '../utils'
import { ALL_ANIMALS } from '../constants'

const AnimalSelector = ({ gifAnimal, setScore, isLoading }) => {
  //  On Animal Selection, check if animal selected is the correct shown on gif and update score accordingly
  const onSelectAnimal = (selectedAnimal) => {
      setScore((prev) => selectedAnimal === gifAnimal ? prev + 1 : prev - 1)
  }

  return (
    <div class="grid grid-cols-3 sm:grid-cols-5 gap-4 justify-start content-start">
      {ALL_ANIMALS.map((a) => (
        <StyledButton
          className="shadow-xl hover:drop-shadow-xl"
          disabled={isLoading}
          key={a}
          onClick={() => onSelectAnimal(a)}
        >
          <img className="object-contain" src={getAnimalImage(a)} alt={a} />
        </StyledButton>
      ))}
    </div>
  )
}

export default AnimalSelector

const StyledButton = styled.button`
  img {
      max-width: 100px;
}
`