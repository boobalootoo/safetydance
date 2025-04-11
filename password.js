// password.js
const usedPasswords = new Set();

export function isPasswordReused(password) {
  return usedPasswords.has(password);
}

export function addUsedPassword(password) {
  usedPasswords.add(password);
}
