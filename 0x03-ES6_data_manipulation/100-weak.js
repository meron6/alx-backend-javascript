export const weakMap = new WeakMap();

const MAX_ENDPOINT_CALLS = 5;

export function queryAPI(endpoint) {
  let callCount = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, callCount + 1);
  if (callCount >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
