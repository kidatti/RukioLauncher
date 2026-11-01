# Release workflow

- A release request includes the notarized GitHub/Web release and App Store Connect upload preparation. The user's latest standing instruction on 2026-11-02 requires stopping before App Review submission for the user's final check; it supersedes the earlier instruction to submit automatically.
- Update the App Store screenshots and Japanese/English release metadata, upload the Store build, wait for processing, select it, and apply and verify the screenshots/metadata. Then stop and provide the uploaded contents for final review. Submit for App Review only after the user explicitly approves that release.
- Reuse existing App Store Connect contacts, URLs, pricing, availability, and release settings. Report upload, review submission, and public availability separately and verify each claimed state.
- Report completed uploads as awaiting the user's final review. If credentials or Apple-side requirements block preparation, finish independent work and report the remaining step. Do not claim review submission or Store publication before they happen.
- The application source is in `/Users/kida/wk/RukioLancher` (the spelling differs from this binary distribution repository). See its `Distribution/AppStore/README.md` and `API-AUTOMATION.md` for Store operations. Keep source code, credentials, and unnotarized binaries out of this distribution repository.
