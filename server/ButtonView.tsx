import React from "react";
import { View, Text } from "nars";
import * as Style from "./Style";

export const ButtonView = () => {
  return (
    <View
      style={[
        {
          padding: 20,
          borderRadius: 10,
          backgroundColor: Style.blue,
          justifyContent: "center",
          width: 100,
          "alignItems": "center"
        }
      ]}
    >
      <Text style={{fontSize: 20, color: "white" }}>{"Next"} </Text>
    </View>
  );
};
