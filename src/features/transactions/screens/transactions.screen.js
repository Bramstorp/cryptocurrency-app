import React, { useState } from "react";
import { colors } from "../../../infrastructure/theme/colors";

import { View, Text, TouchableOpacity } from 'react-native';

import { Container, AvailableBalance, SendBtn, SendBtnText } from "../components/transactions.style"

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
      Available Balance:{ balance } ETH
    </AvailableBalance>

    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 35, fontWeight: 'bold', position: 'absolute', top: '20%' }}>
      { amount.length ? ( amount ) : ('0.000') } ETH
    </Text>
    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20, position: 'absolute', top: '27%' }}>
      
    </Text>

    <View style={{ width: '100%', position: 'absolute', bottom: 50 }} >
      <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: '12%' }} >
          <TouchableOpacity onPress={() => { setCurrenyAmount('1') }} style={{ width: '34%', marginHorizontal: 10, marginVertical: 15 }} >
            <Text style={{ color: '#fff', fontSize: 35, fontWeight: '400' }} > 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setCurrenyAmount('2') }} style={{ width: '34%', marginHorizontal: 10, marginVertical: 15 }} >
            <Text style={{ color: '#fff', fontSize: 35, fontWeight: '400' }} > 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setCurrenyAmount('3') }} style={{ width: '34%', marginHorizontal: 10, marginVertical: 15 }} >
            <Text style={{ color: '#fff', fontSize: 35, fontWeight: '400' }} > 3 </Text>
          </TouchableOpacity>
        </View>
        
      <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: '12%' }} >
        <TouchableOpacity onPress={() => { setCurrenyAmount('4') }} style={{ width: '34%', marginHorizontal: 10, marginVertical: 15 }} >
          <Text style={{ color: '#fff', fontSize: 35, fontWeight: '400' }} > 4 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setCurrenyAmount('5') }} style={{ width: '34%', marginHorizontal: 10, marginVertical: 15 }} >
          <Text style={{ color: '#fff', fontSize: 35, fontWeight: '400' }} > 5 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setCurrenyAmount('6') }} style={{ width: '34%', marginHorizontal: 10, marginVertical: 15 }} >
          <Text style={{ color: '#fff', fontSize: 35, fontWeight: '400' }} > 6 </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: '12%' }} >
        <TouchableOpacity onPress={() => { setCurrenyAmount('7') }} style={{ width: '34%', marginHorizontal: 10, marginVertical: 15 }} >
          <Text style={{ color: '#fff', fontSize: 35, fontWeight: '400' }} > 7 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setCurrenyAmount('8') }} style={{ width: '34%', marginHorizontal: 10, marginVertical: 15 }} >
          <Text style={{ color: '#fff', fontSize: 35, fontWeight: '400' }} > 8 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setCurrenyAmount('9') }} style={{ width: '34%', marginHorizontal: 10, marginVertical: 15 }} >
          <Text style={{ color: '#fff', fontSize: 35, fontWeight: '400' }} > 9 </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: '12%' }} >
        <TouchableOpacity onPress={() => { putPoint() }} style={{ width: '34%', marginHorizontal: 10, marginVertical: 15 }} >
          <Text style={{ color: '#fff', fontSize: 35, fontWeight: '400' }} > . </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setCurrenyAmount('0') }} style={{ width: '34%', marginHorizontal: 10, marginVertical: 15 }} >
          <Text style={{ color: '#fff', fontSize: 35, fontWeight: '400' }} > 0 </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={deleteLastChar} style={{ width: '34%', marginHorizontal: 10, marginVertical: 15 }} >
          <Icon style={{ fontSize: 30, position: 'relative', top: 10 }} name='delete' color='#fff' />
        </TouchableOpacity>
      </View>

      <SendBtn 
          onPress={() => updateBalance()}>
        <SendBtnText>Send ETH</SendBtnText>
      </SendBtn>
    </View>
  </Container>
  );
};
