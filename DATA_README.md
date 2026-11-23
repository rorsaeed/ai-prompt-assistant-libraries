# Prompt libraries (published data)

Generated files, read by AI Prompt Assistant. Do not edit: this branch is rewritten as a
single commit every time the crawler on `main` runs.

- `manifest.json` lists each library's file, its SHA-256, its prompt count and when it
  was last crawled to the end.
- `<library>.<hash>.json` is one library, in the app's cache format.

The prompts are collected from the public prompt galleries of
[YouMind](https://youmind.com) and belong to their authors, credited in each entry. See
the `main` branch for how this is produced.
