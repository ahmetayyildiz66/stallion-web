const compareList = ref<string[]>([])

const toggleCompareList = (id: string) => {
  const index = compareList.value.findIndex(item => item === id)

  index === - 1 ? compareList.value.push(id) : compareList.value.splice(index, 1)
}

export const useCompare = () => {
  return {
    toggleCompareList,
    compareList
  }
}