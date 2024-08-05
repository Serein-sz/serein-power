
const refreshMap = new Map<Symbol, Ref<number>>()
export function useRefresh(key: Symbol): Ref<number> {
  if (refreshMap.get(key)) {
    return refreshMap.get(key)!
  }
  return refreshMap.set(key, ref(0)).get(key)!
}

export const recordRefreshKey = Symbol('recordRefreshKey')
