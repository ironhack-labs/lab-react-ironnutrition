const URL_REGEX =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

export const isRequiredValidator = (value) => {
  return !value;
};

export const urlValidator = (value) => {
  return !URL_REGEX.test(value);
};
