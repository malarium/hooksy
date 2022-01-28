import { hooksyError } from "./helpers/consoleInfo";

const useSort = () => {
  const sortAlphabetically = (arr: string[]) => {
    return arr.sort((a, b) => a.localeCompare(b));
  };

  const sortNumbers = (arr: number[]) => {
    if (arr.includes(NaN) || arr.includes(Infinity)) {
      hooksyError(
        `Array of numbers to sort cannot contain neither "NaN" nor "Infinity"!`
      );
      return;
    }
    return arr.sort((a, b) => a - b);
  };
  return { sortAlphabetically, sortNumbers };
};
export default useSort;
