import styled from 'styled-components'

const GifRenderer = ({ gif = null }) => {
  return (
    <StyledGifRenderer>
      {gif !== null && (
        <img
          alt={gif.title}
          className="gif-img drop-shadow-2xl"
          src={gif.images.fixed_height_still.url}
        />
      )}
    </StyledGifRenderer>
  )
}

export default GifRenderer

const StyledGifRenderer = styled.div`
  height: 200px;
`
