export const validateEmail = (email: string): boolean => {
  return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email);
};
