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

const initQueryProps = (props: any) => {
  if (Object.keys(props).length) {
    Object.keys(props).forEach(p => {
      if (!Array.isArray(props[p])) {
        queryProps.value[p] = props[p].split(' ')
      }
      else {
        queryProps.value[p] = props[p]
      }
    })
  }
}

export const useRouteQuery = () => {
  return {
    queryProps,
    addQuery,
    removeQuery,
    initQueryProps,
  }
}