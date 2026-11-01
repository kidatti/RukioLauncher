# Release workflow

- A release request includes both the notarized GitHub/Web release and App Store Connect submission for review. This is the user's standing instruction, recorded on 2026-11-02.
- Update the App Store screenshots and Japanese/English release metadata for each release, upload the Store build, wait for processing, select it, apply the screenshots/metadata, and submit for review. Do not stop at uploading the build.
- Reuse existing App Store Connect contacts, URLs, pricing, availability, and release settings. Report upload, review submission, and public availability separately and verify each claimed state.
- If credentials or Apple-side requirements block submission, finish all independent preparation and report the specific remaining step. Do not describe the whole release as complete while Store submission is pending.
- The application source is in `/Users/kida/wk/RukioLancher` (the spelling differs from this binary distribution repository). See its `Distribution/AppStore/README.md` and `API-AUTOMATION.md` for Store operations. Keep source code, credentials, and unnotarized binaries out of this distribution repository.
