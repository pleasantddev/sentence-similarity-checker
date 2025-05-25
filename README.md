# 🧠 Sentence Similarity Checker

This is a **minimal, lightweight sentence similarity checker** built entirely with vanilla JavaScript — no frameworks, no libraries, just clean code and a modern UI.

It compares two or more sentences and gives you a similarity score based on:

- ✅ Tokenization
- ✅ Stopword removal
- ✅ Basic stemming (e.g. "running" → "run")
- ✅ **Jaccard similarity**
- ✅ **Cosine similarity**
- ✅ Combined average score for better accuracy

---

## 🚀 How It Works

1. You enter two sentences.
2. The app:
   - Breaks them into words (tokenizes)
   - Removes basic stopwords like "the", "of", "in"
   - Stems the remaining words
3. It then calculates how similar they are using:
   - Jaccard Index (intersection over union)
   - Cosine Similarity (vector-based overlap)
4. It averages both to give you a percentage similarity score.

---

## 💻 How To Use

1. Clone this repo or download the ZIP.
2. Open `index.html` in your browser.
3. Type two sentences and hit **Check Similarity**.

You’ll get a breakdown of:
- Jaccard similarity %
- Cosine similarity %
- Final combined score

---

## 📁 Project Structure

