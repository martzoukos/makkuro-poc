import 'dotenv/config'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const response = await openai.embeddings.create({
  input: "Your text string goes here",
  model: "text-embedding-ada-002"
})
console.log(response.data[0].embedding)