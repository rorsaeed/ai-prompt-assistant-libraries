# Prompt libraries for AI Prompt Assistant

This repository publishes the prompt libraries AI Prompt Assistant shows in its Prompts
tab, as ready-made JSON files, so that the app downloads one file per library instead of
every copy of it reading the sources page by page. Beside them it publishes each library's
search vectors, so that no copy of the app has to compute them.

- **`main`** holds the crawler (`crawler.cjs`) and the scheduled workflow that runs it.
- **`data`** holds what the app reads: `manifest.json` and one `<library>.<hash>.json` per
  library, and `vectors.json` and one `<library>.<hash>.apv` per library. It is rewritten
  as a single commit on every run.

## How it works

Three times a day the workflow runs the crawler. It reads each of the eight libraries
once with the app's own sync code (the five YouMind galleries at no more than 25 page
requests a minute, the three GitHub collections file by file), merges what it finds into
what was published last time, and writes the result. A library the source would not serve
to the end keeps its previous date in the manifest; the app stops trusting a library whose
date is more than three days old and reads the source itself, as it did before this mirror
existed.

It then embeds every entry that is new or changed since the last run with the app's pinned
embedding model (`paraphrase-multilingual-MiniLM-L12-v2`, fetched once from huggingface.co,
checked against its SHA-256 and cached between runs) and writes one vector file per
library. A vector from an earlier run is reused while its entry is unchanged, so a normal
run embeds a few dozen entries in seconds. The first run embeds about 49,000; if a run
reaches its time budget it publishes what it has and the next run continues. An entry
without a vector is still found by its words in the app.

To run it by hand: **Actions → Update prompt libraries → Run workflow**. To run it on a
computer instead (Node 22):

```
npm install --no-save onnxruntime-node@1.29.0
node crawler.cjs --out data --vectors --model-dir models
```

Without `--vectors` it builds the libraries only, and needs nothing installed.

## Updating the crawler

`crawler.cjs` is built from the app's own sync and embedding code. After a change to that
code, run `npm run mirror:bundle` in the app's repository and replace `crawler.cjs` here
with `.library-mirror/crawler.cjs`. If the app moves to another `onnxruntime-node`
version, change the version in the workflow's *Install ONNX Runtime* step to match.

## Where the prompts come from

The prompts belong to their authors, who are credited in each entry (`author_name`,
`author_url`, `source_url`). This repository only re-serves public data, to reduce the
load on the sources.

- The public prompt galleries of [YouMind](https://youmind.com): Seedance 2.0, Seedance
  2.5, Grok Imagine, Claude Opus 5.5 and GPT 6 Astra.
- [YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill](https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill)
  (Nano Banana Pro) and
  [YouMind-OpenLab/gpt-image-2-prompts-search](https://github.com/YouMind-OpenLab/gpt-image-2-prompts-search)
  (GPT Image 2). YouMind OpenLab publishes its collections under
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); see
  [github.com/YouMind-OpenLab](https://github.com/YouMind-OpenLab).
- [jau123/nanobanana-trending-prompts](https://github.com/jau123/nanobanana-trending-prompts)
  (Nano Banana Trending), under the terms of that repository.

The vectors are computed from those prompts with
[sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2](https://huggingface.co/sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2)
(Apache-2.0).
