// src/utils/localStorage.js

export function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving to localStorage for key "${key}":`, error);
  }
}

export function loadFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  try {
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(
      `Error parsing JSON from localStorage for key "${key}":`,
      error
    );
    return null;
  }
}

export function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage for key "${key}":`, error);
  }
}
