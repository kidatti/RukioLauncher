# Rukio Launcher — Downloads

Rukio Launcherのバイナリ配布専用リポジトリです。アプリ本体のソースコードは含めません。

- 配布サイト: https://kidatti.github.io/RukioLauncher/
- バイナリ: https://github.com/kidatti/RukioLauncher/releases
- 対応環境: Apple Silicon（M1以降）、macOS 14以降

## サイトの公開

GitHubのSettings → Pages → Build and deploymentでSourceを **GitHub Actions** に設定してください。`main` に `docs/` の変更をpushすると公開します。サイトはビルド不要のHTML/CSS/JavaScriptです。

公開済みの最新の正式リリースから、次の名前のZIPとチェックサムを自動表示します。リリースがない場合は「Web配布版は準備中です」と表示します。GitHub APIへ接続できない場合にもReleasesへのリンクを表示します。ドラフト・プレリリースは対象外です。

```text
Rukio-Launcher-1.3.0-build6-arm64.zip
Rukio-Launcher-1.3.0-build6-arm64.zip.sha256
```

## バイナリの公開

開発リポジトリ `/Users/kida/wk/alfred` でDeveloper ID署名・Appleの公証・検証を完了し、公開用ZIPを作成します。

```sh
cd /Users/kida/wk/alfred
make build-web
make notarize-web RUKIO_NOTARY_PROFILE=rukio-web
```

成功して生成されたZIPとチェックサムだけをGitHub Releaseに添付します。例:

```sh
gh release create v1.3.0-build6 \
  '/Users/kida/wk/alfred/dist-web/Rukio-Launcher-1.3.0-build6-arm64.zip' \
  '/Users/kida/wk/alfred/dist-web/Rukio-Launcher-1.3.0-build6-arm64.zip.sha256' \
  --repo kidatti/RukioLauncher \
  --title 'Rukio Launcher 1.3.0 (Build 6)' \
  --notes 'Apple Silicon / macOS 14以降。ZIPを展開し、アプリケーションフォルダへ移動してください。'
```

上記のバージョン・Build・ファイル名は実際の成果物に合わせます。`.app` 原本や公証前のZIP、開発用署名のバイナリは添付しないでください。配布ZIPをこのGitリポジトリへコミットする必要はありません。アプリを更新した際は同じバージョンのReleaseを書き換えるのではなく、新しいバージョンまたはBuildで公開します。

## ローカル確認

```sh
python3 -m http.server 8080 --directory docs
```

http://localhost:8080/ を開きます。リリースの取得にはネットワーク接続が必要です。JavaScriptを無効にしていてもReleasesへのリンクを利用できます。
