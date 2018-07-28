import produce from "immer";

export interface State {
  scale: number;
  width: number;
  height: number;
}

const initialState: State = {
  scale: 0.6,
  width: 1024,
  height: 768
};

const stage = (state = initialState) =>
  produce(state, draft => {
    // Todo
  });

export default stage;
