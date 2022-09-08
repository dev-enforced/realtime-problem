import { actionConstants } from "constants";
const initialFilterState = {
  sortChoice: "",
  brandsChosen: {},
  sizesChosen: {},
};
const {
  FILTERS: { FILTER_CATEGORY },
  SORTERS: {
    SORT_BY_PRICE: { HIGH_TO_LOW, LOW_TO_HIGH },
  },
  CLEAR_ALL_FILTERS,
} = actionConstants;
const filterReducer = (currentFilterState, actionProvided) => {
  const { type: actionType, payload } = actionProvided;
  switch (actionType) {
    case HIGH_TO_LOW:
      return { ...currentFilterState, sortChoice: HIGH_TO_LOW };
    case LOW_TO_HIGH:
      return { ...currentFilterState, sortChoice: LOW_TO_HIGH };
    case FILTER_CATEGORY:
      if (Object.keys(currentFilterState.brandsChosen).length === 0) {
        return {
          ...currentFilterState,
          brandsChosen: {
            ...currentFilterState.brandsChosen,
            [payload.categoryGiven]: true,
          },
        };
      } else {
        return {
          ...currentFilterState,
          brandsChosen: {
            ...currentFilterState.brandsChosen,
            [payload.categoryGiven]:
              !currentFilterState.brandsChosen[payload.categoryGiven],
          },
        };
      }
    case CLEAR_ALL_FILTERS:
      return { ...initialFilterState };
    default:
      return { ...currentFilterState };
  }
};
export { initialFilterState, filterReducer };
