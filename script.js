const stopwords = new Set(["a", "the", "to", "in", "of", "on", "at", "is", "and", "for", "with", "by", "an", "as", "that"]);

function tokenize(text) {
  return text.toLowerCase()
             .replace(/[^a-z0-9\s]/g, "")
             .split(/\s+/)
             .filter(word => word && !stopwords.has(word));
}

function stem(word) {
  return word.replace(/(ing|ed|es|s)$/g, "");
}

function jaccardSimilarity(setA, setB) {
  const a = new Set(setA);
  const b = new Set(setB);
  const intersection = [...a].filter(x => b.has(x)).length;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : intersection / union;
}

function cosineSimilarity(tokensA, tokensB) {
  const allTokens = Array.from(new Set([...tokensA, ...tokensB]));
  const vecA = allTokens.map(t => tokensA.filter(x => x === t).length);
  const vecB = allTokens.map(t => tokensB.filter(x => x === t).length);
  const dot = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
  return magA && magB ? dot / (magA * magB) : 0;
}

function checkSimilarity() {
  const text1 = document.getElementById("text1").value;
  const text2 = document.getElementById("text2").value;

  const tokens1 = tokenize(text1).map(stem);
  const tokens2 = tokenize(text2).map(stem);

  const jaccard = jaccardSimilarity(tokens1, tokens2);
  const cosine = cosineSimilarity(tokens1, tokens2);
  const finalScore = ((jaccard + cosine) / 2 * 100).toFixed(2);

  document.getElementById("result").innerHTML = `<p>Jaccard: ${(jaccard * 100).toFixed(2)}%</p>
                                                  <p>Cosine: ${(cosine * 100).toFixed(2)}%</p>
                                                  <h3>Similarity Score: ${finalScore}%</h3>`;
}