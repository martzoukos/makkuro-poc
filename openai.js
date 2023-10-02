import 'dotenv/config'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function getEmbeddings(strings) {
  const response = await openai.embeddings.create({
    input: strings,
    model: "text-embedding-ada-002"
  })
  return response.data
}