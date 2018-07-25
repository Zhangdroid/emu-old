import { Slide } from "core/slide";
import { createAction, ActionUnion } from "store/helpers";

export enum ActionTypes {
  ADD_SLIDE = "@slide/ADD",
  DELETE_SIDE = "@slide/DELETE",
  SET_CURRENT_SLIDE = "@slide/SET_CURRENT",
  SET_SELECTED_SLIDE = "@slide/SET_SELECTED"
}

export const actions = {
  addSlide: (payload: { slide: Slide | Slide[]; index?: number }) =>
    createAction(ActionTypes.ADD_SLIDE, payload),
  deleteSlide: (payload: { slide: Slide | Slide[] }) =>
    createAction(ActionTypes.DELETE_SIDE, payload),
  setCurrentSlide: (payload: { slide: Slide }) =>
    createAction(ActionTypes.SET_CURRENT_SLIDE, payload),
  setSelectedSlide: (payload: { slide: Slide | Slide[] }) =>
    createAction(ActionTypes.SET_SELECTED_SLIDE, payload)
};

export type Actions = ActionUnion<typeof actions>;
