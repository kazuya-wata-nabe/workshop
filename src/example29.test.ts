const createFilter = <T>(predicate: (it: T) => boolean) => {
  return (sequence: T[]) => {
    function* filterGenerator() {
      for (const item of sequence) {
        if (predicate(item)) {
          yield item
        }
      }
    }
    return filterGenerator()
  }
}

type Item = {
  isAvailable: boolean
}

export const availabilityFilter = createFilter((item: Item) => item.isAvailable)
