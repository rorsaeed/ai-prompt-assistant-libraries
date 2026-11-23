# Prompt libraries for AI Prompt Assistant

This repository publishes the prompt libraries AI Prompt Assistant shows in its Prompts
tab, as ready-made JSON files, so that the app downloads one file per library instead of
every copy of it reading the source website page by page.

- **`main`** holds the crawler (`crawler.cjs`) and the scheduled workflow that runs it.
- **`data`** holds what the app reads: `manifest.json` and one `<library>.<hash>.json`
  per library. It is rewritten as a single commit on every run.

## How it works

Three times a day the workflow runs the crawler. It walks each library once, at no more
than 25 page requests a minute, merges what it finds into what was published last time,
and pushes the result. A library the source would not serve to the end keeps its previous
date in the manifest; the app stops trusting a library whose date is more than three days
old and reads the source itself, as it did before this mirror existed.

To run it by hand: **Actions → Update prompt libraries → Run workflow**. To run it on a
computer instead: `node crawler.cjs --out data`.

## Updating the crawler

`crawler.cjs` is built from the app's own sync code. After a change to that code, run
`npm run mirror:bundle` in the app's repository and replace `crawler.cjs` here with
`.library-mirror/crawler.cjs`.

## Where the prompts come from

The prompts are collected from the public prompt galleries of
[YouMind](https://youmind.com) (Seedance 2.0, Seedance 2.5, Grok Imagine, Claude Opus 5.5
and GPT 6 Astra) and belong to their authors, who are credited in each entry
(`author_name`, `author_url`, `source_url`). YouMind OpenLab publishes its own collections
under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); see
[github.com/YouMind-OpenLab](https://github.com/YouMind-OpenLab). This repository only
re-serves that public data to reduce the load on the source.
