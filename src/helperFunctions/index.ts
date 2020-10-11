export const validateEmail = (testEmail: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(testEmail).toLowerCase());
}

export const validatePhone = (testPhone: string) => {
  const re = /^[0-9\b]+$/;
  return re.test(testPhone);
}
