import * as React from "react";
import { View, TouchableOpacity } from "nars";
import { Example2 as Style } from "./Style";
import { ProgressBar } from "./ProgressBar";
import { ButtonView } from "./ButtonView";
import { useFakeProgress } from "./useFakeProgress";
import { useAnimatedValue } from "./useAnimatedValue";

export const Example2 = () => {
  const { value, increment } = useFakeProgress();
  const animatedValue = useAnimatedValue(value);
  return (
    <View style={Style.container}>
      <ProgressBar value={animatedValue} />
      <TouchableOpacity onPress={increment}>
        <ButtonView />
      </TouchableOpacity>
    </View>
  );
};
