import React from "react";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";
import { Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

const UsernameText = styled.Text`
  color: rgb(255, 255, 255)
  font-size: 20px
`;


export const SettingsScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <UsernameText variant="label">USERNAME</UsernameText>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          titleStyle={{color:"white"}}
          title="Logout"
          left={(props) => <List.Icon {...props} color="white" icon="door" />}
          onPress={console.log("LOGOUT")}
        />
      </List.Section>
    </SafeArea>
  );
};
