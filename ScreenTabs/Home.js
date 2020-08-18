import * as React from "react";
import { Text, View } from "react-native";
import { Card, CardItem, Left, Right, Button, Icon, Body } from "native-base";

export default function Home() {
  return (
    <View>
      <Card>
        <CardItem>
          <Text>Hello World</Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    </View>
  );
}
