import { listProjectIssues } from './linear.js'
import { getEmbeddings } from './openai.js'

const PROJECT_ID = "e4a85863-6586-4cc5-9c92-8c971e680358" // GH Issues playground

const issues = await listProjectIssues(PROJECT_ID)

const embeddingsPromises = issues.map(async issue => {
  const titleEmbedding = await getEmbeddings(issue.title)
  const descriptionEmbedding = issue.description?.length > 0 ? await getEmbeddings(issue.description) : null
  return [titleEmbedding, descriptionEmbedding]
})

const embeddings = await Promise.all(embeddingsPromises)
console.log(embeddings[0][0])