export function each<T>(value: T | T[], callback: (value: T) => void) {
  if (Array.isArray(value)) {
    value.forEach(item => callback(item));
  } else {
    callback(value);
  }
}

export function toArray<T>(value: T | T[]) {
  return Array.isArray(value) ? value : [value];
}
