import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const articlesDirectory = path.join(process.cwd(), 'articles')

export function getSortedArticles() {
  const fileNames = fs.readdirSync(articlesDirectory)

  const allArticlesData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // parse articles metadata section
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getArticlesId() {
  const fileNames = fs.readdirSync(articlesDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getArticle(id) {
  const fullPath = path.join(articlesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const content = processedContent.toString()

  return {
    id, 
    content,
    ...matterResult.data
  }
}

// for later
export function getSortedArticlesByTag(tag) {

}
