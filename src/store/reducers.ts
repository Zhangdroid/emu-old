import { combineReducers } from "redux";

import slide, { State as SlideState } from "./modules/slide/reducer";

export interface State {
  slide: SlideState;
}

export default combineReducers<State>({ slide });
