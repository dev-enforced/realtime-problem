import { actionConstants } from "constants";
const initialFilterState = {
  sortChoice: "",
  brandsChosen: {},
  sizesChosen: {},
};
const {
  FILTERS,
  SORTERS: {
    SORT_BY_PRICE: { HIGH_TO_LOW, LOW_TO_HIGH },
  },
} = actionConstants;
const filterReducer = (currentFilterState, actionProvided) => {
  const { type: actionType, payload } = actionProvided;
  switch (actionType) {
  }
};
export { initialFilterState, filterReducer };
