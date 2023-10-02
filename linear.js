import 'dotenv/config'
import { LinearClient } from '@linear/sdk'

// Api key authentication
const linearClient = new LinearClient({
  apiKey: process.env.LINEAR_API_KEY
})

export async function listProjectIssues(projectId) {
  let filters
  if (projectId !== undefined) {
    filters = {
      filter: {
        project: {
          id: {
            eq: projectId
          }
        }
      }
    }
  }
  try{
    const issuesResponse = await linearClient.issues(filters)
    const issuesPromises = issuesResponse.nodes.map(async issue => {
      const comments = await issue.comments()
      const commentsTexts = comments.nodes.map(comment => comment.body)
      return {
        title: issue.title,
        description: issue.description,
        comments: commentsTexts,
      }
    })
    const issues = await Promise.all(issuesPromises)
    if (issues.length > 0) {
      return issues
    } else {
      return null
    }
  } catch (error) {
    throw error.status
  }
}