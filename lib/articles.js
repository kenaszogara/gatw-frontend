import axios from 'axios'
import Config from './../config'

const type = 'articles'

export async function getSortedArticles() {
  const articles =  await getAll()

  return articles.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getArticlesPathId() {
  const articles = await getAll()

  return articles.map(article => {
    return {
      params: {
        id: article.slug
      }
    }
  })
}

export async function getArticleBySlug(slug) {
  try {
    const res = await axios.get(`${Config.apiUrl}/wp/v2/${type}?slug='${slug}'`)
    return res.data[0]

  } catch (error) {
    console.error(error)
  }
}


export async function getAll() {
  try {
    const res = await axios.get(`${Config.apiUrl}/wp/v2/${type}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export async function getAuthor(id) {
  try {
    const res = await axios.get(`${Config.apiUrl}/wp/v2/users/${id}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
} 

