import { combineReducers } from "redux";

import { reducer as slide, State as SlideState } from "./modules/slide";
import { reducer as stage, State as StageState } from "./modules/stage";
export interface State {
  slide: SlideState;
  stage: StageState;
}

export default combineReducers<State>({ slide, stage });
