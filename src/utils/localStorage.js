export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export function clearLocalStorage(key) {
  localStorage.removeItem(key);
}
