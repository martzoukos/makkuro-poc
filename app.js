import { listProjectIssues } from './linear.js'

const PROJECT_ID = "e4a85863-6586-4cc5-9c92-8c971e680358" // GH Issues playground

const issues = await listProjectIssues(PROJECT_ID)
const issue = issues.nodes[0]
const issueComments = await issue.comments()
console.log(issueComments)