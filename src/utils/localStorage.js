export function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
  const value = localStorage(key);
  return value ? JSON.parse(vlaue) : null;
}

export function clearLocalStorage(key) {
  localStorage.removeItem(key);
}
