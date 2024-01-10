export async function generateOllamaEmbedding(content: any) {
    const response = await fetch(process.env.NEXT_PUBLIC_OLLAMA_URL + '/api/embeddings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "starling-lm:7b-alpha-q4_0",
            prompt: content
        })
    });

    const data = await response.json();
    return data.embedding;
}