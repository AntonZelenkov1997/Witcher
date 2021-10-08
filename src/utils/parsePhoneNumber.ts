type parsePhoneNumberType = (str: string) => string;

const parsePhoneNumber: parsePhoneNumberType = (str) =>
  str
    .split(/[\s+()_-]*/gi)
    .join("")
    .trim();

export default parsePhoneNumber;
