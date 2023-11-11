const queryProps = ref<Record<string, string[]>>({})

const addQuery = (name: string, id: string) => {
  if (!queryProps.value[name]) {
    queryProps.value[name] = [id]
  } else {
    Object.keys(queryProps.value).forEach(q => {
      if (q === name) {
        queryProps.value[q].push(id)
      }
    })
  }
}

const removeQuery = (name: string, id: string) => {
  queryProps.value[name] = queryProps.value[name].filter((prop) => prop !== id);
}


export const useRouteQuery = () => {
  return {
    queryProps,
    addQuery,
    removeQuery
  }
}