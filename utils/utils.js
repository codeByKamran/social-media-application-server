export const generateUserName = (str) => {
  return String(str).toLocaleLowerCase().split(" ")[0];
};

export const getFirstName = (str) => {
  return String(str).split(" ")[0];
};

export const getLastName = (str) => {
  return String(str).split(" ")[-1];
};
