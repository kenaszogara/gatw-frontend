import { fetchAPI } from './api'

export async function getAllArticlesForHome() {
  const data = await fetchAPI(
  `
    query Articles($where: JSON){
      articles(sort: "published_at:desc", limit: 10, where: $where) {
        id
        title
        slug
        excerpt
        published_at
        coverImage {
          url
          name
        }
        author {
          name
          picture {
            url
          }
        }
      }
    }
  `,
    {
      variables: {
        where: {
          status: 'published',
        },
      },
    }
  )
  return data ? data.articles : []
}

export async function getAllArticlesWithSlug() {
  const data = await fetchAPI(
  `
    {
      articles {
        slug
      }
    }
  `
  )

  return data ? data.articles : []
}

export async function getArticle(slug) {
  const data = await fetchAPI(
  `
    query ArticleBySlug($where: JSON) {
      articles(where: $where) {
        id
        title
        slug
        excerpt
        content
        published_at
        ogImage: coverImage{
          url
        }
        coverImage {
          url
          name
        }
        author {
          name
          picture {
            url
          }
        }
      }
    }
  `,
    {
      variables: {
        where: {
          slug,
          status: 'published',
        },
      },
    }
  )
  return data ? data.articles[0] : []
}
