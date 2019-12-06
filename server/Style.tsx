import * as Resources from "./Resources";

export const blue = Resources.ReactDayBerlinBlue;
export const red = "red";

export const Example1 = {
  container: {
    backgroundColor: blue,
    flex: 1,
    alignItems: "center" as const,
    justifyContent: "center" as const
  },
  image: { width: 200, height: 200 }
};

export const Example2 = {
  container: {
    flex: 1,
    paddingTop: 80,
    padding: 20
  }
};
