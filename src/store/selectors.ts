import { State } from "./reducers";

export const getAspectRatio = (state: State) =>
  state.stage.width / state.stage.height;
