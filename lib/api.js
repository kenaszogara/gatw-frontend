import axios from 'axios'

export async function fetchAPI(query, { variables } = {}) {
  const res = await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      query,
      variables,
    })
  }).then((result) => {
    if (result.errors) {
      console.error(result.erros)
      throw new Error('Failed to fetch API')
    }

    return result.data
  })

  return res.data
}
