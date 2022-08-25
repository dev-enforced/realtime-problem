const cumulativeFiltersAndSorts =
  (...particaptingFilters) =>
  (filterStateReceived, currentProductsList) =>
    particaptingFilters.reduce(
      (resultObtained, currentFilteringFn) =>
        currentFilteringFn(filterStateReceived, resultObtained),
      currentProductsList
    );
export { cumulativeFiltersAndSorts };
