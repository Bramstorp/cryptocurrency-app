import React, { useState } from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";


import { TitleWrapper, Title, Count, InputValue } from "../components/transactions.style"

export const TransactionsScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeArea>
        <TitleWrapper>
          <Title>Transactions</Title>
          <Count>{count} DKK</Count>
          <InputValue
            onChangeText={(x) => setCount(x)}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </TitleWrapper>
    </SafeArea>
  );
};
