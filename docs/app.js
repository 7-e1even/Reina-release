/* Reina site — theme toggle, scroll reveal, platform-aware download */
(function () {
  var KEY = 'reina-theme';
  var root = document.documentElement;

  // ---- theme ----
  function setTheme(t) {
    root.setAttribute('data-theme', t === 'night' ? 'night' : 'day');
    var b = document.getElementById('theme-toggle');
    if (b) b.setAttribute('aria-pressed', String(t === 'night'));
  }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  setTheme(saved === 'night' ? 'night' : 'day');

  document.addEventListener('click', function (e) {
    var t = e.target;
    var b = (t && t.id === 'theme-toggle') ? t : (t && t.closest ? t.closest('#theme-toggle') : null);
    if (!b) return;
    e.preventDefault();
    var next = root.getAttribute('data-theme') === 'night' ? 'day' : 'night';
    setTheme(next);
    try { localStorage.setItem(KEY, next); } catch (err) {}
  });

  // ---- scroll reveal ----
  var items = [].slice.call(document.querySelectorAll('[data-reveal]'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // ---- platform-aware deep-link to the real latest installer (facts from GitHub API) ----
  var REPO = '7-e1even/Reina-release';
  var RELEASES = 'https://github.com/' + REPO + '/releases';
  function platform() {
    var ua = navigator.userAgent;
    if (/Win/i.test(ua)) return 'Windows';
    if (/Mac/i.test(ua)) return 'macOS';
    return null;
  }
  function setDownload(href, label, meta) {
    ['hero-download', 'nav-download'].forEach(function (id) {
      var a = document.getElementById(id);
      if (a) a.href = href;
    });
    var lbl = document.getElementById('hero-download-label');
    if (lbl && label) lbl.textContent = label;
    var m = document.getElementById('dl-meta');
    if (m && meta) m.textContent = meta;
  }
  var os = platform();
  // sensible default before the API resolves
  setDownload(RELEASES, os ? 'Download for ' + os : 'Download Reina', '免费 · Windows & macOS');
  if (window.fetch) {
    fetch('https://api.github.com/repos/' + REPO + '/releases/latest')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (rel) {
        if (!rel || !rel.assets) return;
        var assets = rel.assets;
        var pick = function (re) { for (var i = 0; i < assets.length; i++) if (re.test(assets[i].name)) return assets[i]; return null; };
        var asset = null;
        if (os === 'Windows') asset = pick(/win-x64\.exe$/i) || pick(/x64\.exe$/i);
        else if (os === 'macOS') asset = pick(/mac.*arm64\.dmg$/i) || pick(/\.dmg$/i);
        if (asset) {
          var mb = Math.round(asset.size / 1048576);
          setDownload(asset.browser_download_url, 'Download for ' + os,
            '免费 · ' + rel.tag_name + ' · ' + mb + 'MB' + (os === 'macOS' ? ' · Apple Silicon' : ''));
        } else {
          var m = document.getElementById('dl-meta');
          if (m) m.textContent = '免费 · ' + rel.tag_name + ' · Windows & macOS';
        }
      })
      .catch(function () {});
  }

  // ---- live GitHub star count ----
  var starEl = document.getElementById('gh-star-count');
  if (starEl && window.fetch) {
    var fmt = function (n) {
      if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'k';
      return String(n);
    };
    fetch('https://api.github.com/repos/7-e1even/Reina-release')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (d && typeof d.stargazers_count === 'number' && d.stargazers_count > 0) starEl.textContent = fmt(d.stargazers_count);
      })
      .catch(function () {});
  }
})();
