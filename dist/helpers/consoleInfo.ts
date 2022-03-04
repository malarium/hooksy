export const hooksyInfo = (data: any) => {
  const css = `background-color: blue; color: #fff; font-weight: bold;`;
  console.log(`%c${"HOOKSY INFO!"}`, css);
  console.log(data);
};
export const hooksyWarning = (text: string) => {
  const css = `background-color: orange; color: #fff; font-weight: bold;`;
  console.log(`%c${"HOOKSY WARNING!"}`, css);
  console.warn(`%c${text}`, css);
};
export const hooksyError = (text: string) => {
  const css = `background-color: red; color: #fff; font-weight: bold;`;
  console.log(`%c${"HOOKSY ERROR! "}`, css);
  console.error(`%c${text}`, css);
};
