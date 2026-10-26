/* Only release binaries are offered here; application source is kept elsewhere. */
(() => {
  'use strict';
  const repository = 'kidatti/RukioLauncher';
  const status = document.getElementById('release-status');
  const download = document.getElementById('download');
  const detail = document.getElementById('download-detail');
  const checksum = document.getElementById('checksum');

  function safeAssetURL(asset) {
    if (!asset || typeof asset.browser_download_url !== 'string') return null;
    try {
      const url = new URL(asset.browser_download_url);
      if (url.origin !== 'https://github.com' || url.username || url.password ||
          !url.pathname.startsWith(`/${repository}/releases/download/`)) return null;
      return url.href;
    } catch { return null; }
  }

  async function loadRelease() {
    status.textContent = '最新の配布ファイルを確認しています…';
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(`https://api.github.com/repos/${repository}/releases/latest`, {
        headers: { Accept: 'application/vnd.github+json' }, signal: controller.signal
      });
      if (response.status === 404) {
        status.textContent = 'Web配布版は準備中です。';
        return;
      }
      if (!response.ok) throw new Error('Release lookup failed');
      const release = await response.json();
      const assets = Array.isArray(release.assets) ? release.assets : [];
      const asset = assets.find(item => /^Rukio-Launcher-[0-9.]+-build[0-9.]+-arm64\.zip$/.test(item.name) && safeAssetURL(item));
      if (release.draft || release.prerelease || !asset) {
        status.textContent = 'Web配布版は準備中です。';
        return;
      }
      const [, version, build] = asset.name.match(/^Rukio-Launcher-([0-9.]+)-build([0-9.]+)-arm64\.zip$/);
      status.textContent = `最新版 v${version}（Build ${build}）`;
      download.href = safeAssetURL(asset);
      download.hidden = false;
      const megabytes = Number.isFinite(asset.size) && asset.size > 0 ? ` · ${(asset.size / 1024 / 1024).toFixed(1)} MB` : '';
      detail.textContent = `ZIP形式 · Apple Silicon${megabytes}`;
      detail.hidden = false;
      const hash = assets.find(item => item.name === `${asset.name}.sha256` && safeAssetURL(item));
      if (hash) { checksum.href = safeAssetURL(hash); checksum.hidden = false; }
    } catch {
      status.textContent = '配布状況を取得できませんでした。下のリンクから確認できます。';
    } finally { clearTimeout(timer); }
  }
  loadRelease();
})();
