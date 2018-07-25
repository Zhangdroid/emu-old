import produce from "immer";
import { each, toArray } from "utils";

import { Slide } from "core/slide";
import { Actions, ActionTypes } from "./actions";

export interface State {
  list: Slide[];
  current?: Slide;
  selected: Slide[];
}

const initialState: State = {
  list: [],
  current: undefined,
  selected: []
};

const slide = (state = initialState, action: Actions) =>
  produce(state, draft => {
    const { list } = draft;
    switch (action.type) {
      case ActionTypes.ADD_SLIDE: {
        const { slide, index } = action.payload;
        if (index) {
          each(slide, item => list.splice(index, 0, item));
        } else {
          each(slide, item => list.push(item));
        }
        break;
      }
      case ActionTypes.DELETE_SIDE: {
        const { slide } = action.payload;
        each(slide, item => list.splice(list.indexOf(item), 1));
        break;
      }
      case ActionTypes.SET_CURRENT_SLIDE: {
        const { slide } = action.payload;
        draft.current = slide;
        break;
      }
      case ActionTypes.SET_SELECTED_SLIDE: {
        const { slide } = action.payload;
        draft.selected = toArray(slide);
        break;
      }
    }
  });

export default slide;
