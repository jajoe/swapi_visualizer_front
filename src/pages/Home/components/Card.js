import React from 'react';
import {
  imageStarship,
  imageVehicle,
  imagePeople,
  imageFilms,
  imagePlanets,
  imageSpecies,
} from '../../../constants/images';
import {
  CardContainer,
  CardImageWrapper,
  CardName,
  CardSubContainer,
  StyledCardImage,
} from '../styles/index';

const cardImagesMapping = {
  starships: imageStarship,
  vehicles: imageVehicle,
  species: imageSpecies,
  people: imagePeople,
  planets: imagePlanets,
  films: imageFilms,
};

const Card = ({ id, content = '', onClick, type }) => (
  <CardContainer onClick={onClick}>
    <CardSubContainer>
      {type && (
        <CardImageWrapper>
          <StyledCardImage
            alt={`${content} (category: ${type})`}
            src={cardImagesMapping[type]}
            width="100%"
          />
        </CardImageWrapper>
      )}
      <CardName>
        #{id}: {content}
      </CardName>
    </CardSubContainer>
  </CardContainer>
);

export default Card;
