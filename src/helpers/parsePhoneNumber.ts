type parsePhoneNumberType = (str: string) => string;

const parsePhoneNumber: parsePhoneNumberType = (str) =>
  str
    .split(/[+()_-\s]*/gi)
    .join("")
    .trim();

export default parsePhoneNumber;
