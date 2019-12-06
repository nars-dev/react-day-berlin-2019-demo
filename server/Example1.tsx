import * as React from "react";
import { View, Image } from "nars";
import * as Style from "./Style";
import * as Resources from "./Resources";
import { useInterval } from "./useInterval";

type Props = {
  color1: string;
  color2: string;
};

export const Example1 = (props: Props) => {
  const [isColor1, setIsColor1] = React.useState(true);
  const style = {
    ...Style.Example1.container,
    backgroundColor: isColor1 ? props.color1 : props.color2
  };
  useInterval(() => setIsColor1(b => !b), 500);
  return (
    <View style={style}>
      <Image
        style={Style.Example1.image}
        source={Resources.ReactDayBerlinLogo}
      />
    </View>
  );
};
