import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Wrapper, LeftWrapper, Image, LeftTitle, Title, SubTitle, RightWrapper } from "./list-item.style"

export const ListItem = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress }) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

  return (
    <TouchableOpacity onPress={onPress}>
      <Wrapper>
        <LeftWrapper>
          <Image source={{ uri: logoUrl }} />
          <LeftTitle>
            <Title>{ name }</Title>
            <SubTitle>{symbol.toUpperCase()}</SubTitle>
          </LeftTitle>
        </LeftWrapper>

        <RightWrapper>
          <Title>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Title>
          <SubTitle style={{color: priceChangeColor}}>{priceChangePercentage7d.toFixed(2)}%</SubTitle>
        </RightWrapper>

      </Wrapper>
    </TouchableOpacity>
  )
}