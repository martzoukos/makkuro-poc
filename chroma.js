import 'dotenv/config'
import { ChromaClient, InstructorEmbeddingFunction } from 'chromadb'

const client = new ChromaClient();

// const embedder = new instructorModelCollection({
//   openai_api_key: process.env.OPENAI_API_KEY,
//   openai_model: "text-embedding-ada-002",
// })

const embedder = new InstructorEmbeddingFunction()

const instructorModelCollection = await client.createCollection({
  name: 'instructor_collection',
  embeddingFunction: embedder,
})

await instructorModelCollection.add({
  ids: [1, 2, 3, 4],
  documents: [
    "Create a table type",
    "New table type feature",
    "Remove the table type",
    "Document the table type",
  ],
})

// const results = await collection.query({
//   nResults: 2,
//   queryTexts: ["This is a query document"]
// })

// const collection = await client.createCollection({
//   name: 'my_collection',
//   embeddingFunction: embedder,
// })

// const results = await collection.query({
//   nResults: 3,
//   queryTexts: [
//     "Create a table type",
//     "New table type feature",
//     "Remove the table type",
//     "Document the table type",
//   ]
// })
/**
 * With cosine function
 * "Create a table type"     -> 'Add a table type' 0.1396320067460133
 * "New table type feature"  -> 'Add a table type' 0.20917345732709258
 * "Remove the table type"   -> 'Add a table type' 0.19372474652360483
 * "Document the table type" -> 'Add a table type' 0.2186747601646773
 */

// console.log(results)