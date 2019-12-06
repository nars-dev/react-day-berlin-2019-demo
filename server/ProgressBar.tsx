import React from "react";
import { View, Animated,Text } from "nars";
import * as Style from "./Style";

const { concat } = Animated;

type Props = {
  value: Animated.Adaptable<number>;
};

export const ProgressBar = (props: Props) => {
  const progressStyle = {
    width: concat(props.value, "%"),
    backgroundColor: Style.red,
    height: 30,
    borderRadius: 10
  };
  return (
    <View
      style={[
        {
          borderRadius: 4
        }
      ]}
    >
      <Text style={{fontSize: 20, paddingBottom: 10}}>{"Progress:"} </Text>
      <Animated.View style={progressStyle} />
      <View style={{paddingBottom: 20}} />
    </View>
  );
};
