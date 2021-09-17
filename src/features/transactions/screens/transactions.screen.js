import React, { useState } from "react";
import { colors } from "../../../infrastructure/theme/colors";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

import { Container, AvailableBalance, SendBtn, SendBtnText } from "../components/transactions.style"

import Icon from 'react-native-vector-icons/Feather';
import Dialog from "react-native-dialog";

export const TransactionsScreen = ({ navigation }) => {
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false); 
  const [transactionLoader, setTransactionLoader] = useState(false);  
  const [receiver, setReceiver] = useState(undefined);

  const showDialog = () => {
    if (receiver === undefined) {
      setDialogVisible({ dialogVisible: true });
    } else {
      console.log("err")
    }
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const transfer = () => {
    console.log("TRANSFER")
  }

  const deleteLastChar = () => {
    setAmount({ amount: amount.substring(0, amount.length - 1) });
  }

  const setCurrenyAmount = (amount) => {
    setAmount({ amount: amount.toString() + amount  });
  }

  const putPoint = () => {
    console.log(amount.includes('.'));
    
    if (amount.includes('.')) {
      
    } else {
      setAmount({ amount: amount.toString() + '.'  });
    }
  }

  return (
    <Container>
        
    <AvailableBalance>
      Available Balance:  { balance } ETH
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
          onPress={showDialog}>
        <SendBtnText>Send ETH</SendBtnText>
      </SendBtn>
    </View>

    <Dialog.Container visible={dialogVisible}>
      <Dialog.Title> Sen ETH </Dialog.Title>
      <Dialog.Description>
        Enter the recipient's Ethereum address below.
      </Dialog.Description>
      <Dialog.Input onChangeText={(x) => setReceiver(x)} />
      <Dialog.Button label="Send" onPress={transfer}/>
      <Dialog.Button label="Cancel" onPress={handleCancel} />
    </Dialog.Container>

    <Dialog.Container visible={transactionLoader}>
      <Dialog.Title> Processing </Dialog.Title>
      <Dialog.Description>
        <ActivityIndicator/>
      </Dialog.Description>
    </Dialog.Container>
  </Container>
  );
};
