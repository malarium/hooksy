const useSortAplhabetically = (arr: Array<string>) => {
  return arr.sort((a, b) => a.localeCompare(b));
};
export default useSortAplhabetically;
