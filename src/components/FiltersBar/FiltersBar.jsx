import React from "react";
import { useFilters } from "context";
import styles from "./FiltersBar.module.css";
import { actionConstants, brandsAvailable } from "constants";

const FiltersBar = () => {
  const {
    filterState: { sortChoice, brandsChosen },
    updateFilterState,
  } = useFilters();
  const {
    FILTERS: { FILTER_CATEGORY },
    SORTERS: {
      SORT_BY_PRICE: { HIGH_TO_LOW, LOW_TO_HIGH },
    },
    CLEAR_ALL_FILTERS,
  } = actionConstants;
  return (
    <div>
      <div>
        <button
          onClick={() => {
            updateFilterState({ type: CLEAR_ALL_FILTERS });
          }}
        >
          CLEAR ALL FILTERS
        </button>
      </div>
      <div>
        <h2>SORT BY PRICE</h2>
        <label htmlFor="high-to-low">HIGH-TO-LOW</label>
        <input
          type="radio"
          name="price-sort"
          id="high-to-low"
          checked={sortChoice === HIGH_TO_LOW}
          onChange={() => {
            updateFilterState({ type: HIGH_TO_LOW });
          }}
        />
        <label htmlFor="low-to-high">LOW-TO-HIGH</label>
        <input
          type="radio"
          name="price-sort"
          id="low-to-high"
          checked={sortChoice === LOW_TO_HIGH}
          onChange={() => {
            updateFilterState({ type: LOW_TO_HIGH });
          }}
        />
      </div>
      <div>
        <h1>BRANDS</h1>
        {brandsAvailable?.map(({ id, brandName }) => {
          return (
            <span key={id}>
              <input
                type="checkbox"
                name="brand-choice"
                id={brandName}
                checked={brandsChosen[brandName]}
                onChange={(event) => {
                  updateFilterState({
                    type: FILTER_CATEGORY,
                    payload: { categoryGiven: brandName },
                  });
                }}
              />
              <label htmlFor={brandName}>{brandName}</label>
            </span>
          );
        })}
      </div>
    </div>
  );
};
export { FiltersBar };
