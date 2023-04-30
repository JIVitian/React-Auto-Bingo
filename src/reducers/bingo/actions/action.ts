export type Action<ActionType, PayloadType> = {
  type: ActionType;
  payload: PayloadType;
};
