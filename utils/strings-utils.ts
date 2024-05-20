export const firstLetterUpperCase = (str: string) => {
  return str ? str.charAt(0).toLocaleUpperCase() + str.slice(1) : "";
};
