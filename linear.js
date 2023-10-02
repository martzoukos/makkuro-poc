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
    const issues = await linearClient.issues(filters)
    if (issues.nodes.length > 0) {
      return issues
    } else {
      return null
    }
  } catch (error) {
    throw error.status
  }
}