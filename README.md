# Prompt libraries (published data)

Generated files, read by AI Prompt Assistant. Do not edit: this branch is rewritten as a
single commit every time the crawler on `main` runs.

- `manifest.json` lists each library's file, its SHA-256, its prompt count and when it
  was last crawled to the end.
- `<library>.<hash>.json` is one library, in the app's cache format.
- `vectors.json` names the embedding model and lists each library's vector file, its
  SHA-256, how many of the library's entries it covers, and the library file it was made
  from.
- `<library>.<hash>.apv` is one library's search vectors (int8, one per entry, each with
  a hash of the text it was made from).

The prompts are collected from the public prompt galleries of
[YouMind](https://youmind.com) and from public GitHub collections
(YouMind-OpenLab's Nano Banana Pro and GPT Image 2 collections, and
jau123/nanobanana-trending-prompts), and belong to their authors, credited in each entry.
See the `main` branch for how this is produced.
