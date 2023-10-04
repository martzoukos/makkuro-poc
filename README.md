# makkuro-poc

## Research goal:

- Assess if we can test similarity via embeddings, for example if a task title is similar to another one.

## Process:

Test chromadb with embedding function from OpenAI to test whether the meaning of a task's title is similar to another one.

This source sentence was used:

- "Add a table type"

And these sentences were used (their similarity scores in parenthesis, lower is better):

- "Create a table type" -> 'Add a table type' 0.1396320067460133
- "New table type feature" -> 'Add a table type' 0.20917345732709258
- "Remove the table type" -> 'Add a table type' 0.19372474652360483
- "Document the table type" -> 'Add a table type' 0.2186747601646773

The cosine function was used for the distance calculation.

## Outcome

Even though similarity is achieved, it's mostly grammatical. For example:

- "Remove the table type" yields a better score than "New table type feature", but its meaning is the exact opposite.
- However, trying with a more pair, such as "Go to bed" and "Fall asleep" we get a good score (0.170) which means that the similarity is not only on grammar but also on meaning, as long as the model has been trained on it.
- This leads me to believe if the model is finetuned in more examples of digital product project management lingo, it will get the implied meaning behind these embeddings.
- Another approach is also to explore instructor models for the embeddings creation as it seems that a contextual prompt is provided: https://docs.trychroma.com/embeddings#instructor-models
