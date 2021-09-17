import React, { useState } from "react";
import { colors } from "../../../infrastructure/theme/colors";

import { View, Text, TouchableOpacity } from 'react-native';

import {
  Container,
  AvailableBalance,
  SendBtn,
  SendBtnText,
  AmountText,
  NumberWrap,
  FlexRow,
  NumberBtn,
  NumberText,
  IconBtn
} from "../components/transactions.style";

import Icon from 'react-native-vector-icons/Feather';

export const TransactionsScreen = ({ navigation }) => {
  const [balance, setBalance] = useState("1000");
  const [amount, setAmount] = useState("");

  const deleteLastChar = () => {
    setAmount(amount.substring(0, amount.length - 1));
  }

  const setCurrenyAmount = (addAmount) => {
    setAmount(amount.toString() + addAmount);
  }

  const putPoint = () => {    
    if (amount.includes('.')) {
      
    } else {
      setAmount(amount.toString() + '.');
    }
  }

  const updateBalance = () => {
    setBalance(+balance + +amount);
  }

  return (
    <Container>
        
    <AvailableBalance>
      Available Balance: { balance } ETH
    </AvailableBalance>

    <AmountText>
      { amount.length ? ( amount ) : ('0.000') } ETH
    </AmountText>

    <NumberWrap>
        <FlexRow>
          <NumberBtn onPress={() => { setCurrenyAmount('1') }} >
            <NumberText> 1 </NumberText>
          </NumberBtn>
          <NumberBtn onPress={() => { setCurrenyAmount('2') }} >
            <NumberText> 2 </NumberText>
          </NumberBtn>
          <NumberBtn onPress={() => { setCurrenyAmount('3') }} >
            <NumberText> 3 </NumberText>
          </NumberBtn>
        </FlexRow>
        
      <FlexRow >
        <NumberBtn onPress={() => { setCurrenyAmount('4') }} >
          <NumberText> 4 </NumberText>
        </NumberBtn>
        <NumberBtn onPress={() => { setCurrenyAmount('5') }} >
          <NumberText> 5 </NumberText>
        </NumberBtn>
        <NumberBtn onPress={() => { setCurrenyAmount('6') }} >
          <NumberText> 6 </NumberText>
        </NumberBtn>
      </FlexRow>

      <FlexRow >
        <NumberBtn onPress={() => { setCurrenyAmount('7') }} >
          <NumberText> 7 </NumberText>
        </NumberBtn>
        <NumberBtn onPress={() => { setCurrenyAmount('8') }} >
          <NumberText> 8 </NumberText>
        </NumberBtn>
        <NumberBtn onPress={() => { setCurrenyAmount('9') }} >
          <NumberText> 9 </NumberText>
        </NumberBtn>
      </FlexRow>

      <FlexRow >
        <NumberBtn onPress={() => { putPoint() }} >
          <NumberText> . </NumberText>
        </NumberBtn>
        <NumberBtn onPress={() => { setCurrenyAmount('0') }} >
          <NumberText> 0 </NumberText>
        </NumberBtn>
        <NumberBtn  onPress={deleteLastChar} >
          <IconBtn name='delete' color='#fff' />
        </NumberBtn>
      </FlexRow>

      <SendBtn 
          onPress={() => updateBalance()}>
        <SendBtnText>Send ETH</SendBtnText>
      </SendBtn>
    </NumberWrap>
  </Container>
  );
};
