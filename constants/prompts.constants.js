const OPENAI_PROMPTS = {
  SYSTEM_PROMPT:
    'You are an SEO expert specialized in keyword analysis. Provide detailed, structured keyword analysis focusing on search intent and semantic relevance.',
  META_ANALYZER: (metadata) => `
    Analyze the following website metadata and extract important keywords and phrases:

    Title: ${metadata.title}
    Meta Description: ${metadata.description}

    Please provide:
    1. Main keywords (individual important words)
    2. Key phrases (important word combinations)
    3. Semantic relevance (related terms that could be targeted)
    4. Content gaps (important related terms that are missing)

    Format the response as a JSON object.

    Note: The key names should be: main_keywords, key_phrases, semantic_relevance, content_gaps
  `,
};

module.exports = { OPENAI_PROMPTS };
