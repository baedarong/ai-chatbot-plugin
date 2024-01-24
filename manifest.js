// manifest 버전과 익스텐션 이름, 버전 등이 들어있는 명세서 같은 파일

import fs from 'node:fs';
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
const manifest = {
  manifest_version: 3,
  default_locale: 'en',
  /**
   * if you want to support multiple languages, you can use the following reference
   * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization
   */
  name: '__MSG_extensionName__',
  version: packageJson.version,
  description: '__MSG_extensionDescription__',
  permissions: ['storage', 'sidePanel'],
  side_panel: {
    default_path: 'src/pages/sidepanel/index.html',
  },
  //익스텐션 관리 페이지에서 설정 누르면 보이는 페이지
  options_page: 'src/pages/options/index.html',
  // service worker로 브라우저 이벤트를 반응해서 동작하는 스크립트
  // Cross-origin XMLHttpReqeust가 가능하다는 점입니다. 쉽게 말하면 권한(permission)을 추가했다면 외부 API를 마음껏 호출할 수 있습니다!
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  //익스텐션 아이콘 누르면 보이는 팝업 창
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'avatar.png',
  },
  chrome_url_overrides: {
    newtab: 'src/pages/newtab/index.html',
  },
  icons: {
    128: 'avatar.png',
  },
  // 웹페이지에 직접 주입할 수 있는 스크립트
  // 웹 페이지의 DOM에 접근하거나 아예 새로운 DOM을 그릴 수도 있고, 여러 가지 재미있는 일을 할 수 있게 됩니다.
  // API 통신: 현재 하이라이트 정보를 담은 메시지를 content script에서 background script로 보냅니다.
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/contentInjected/index.js'],
      // KEY for cache invalidation
      css: ['assets/css/contentStyle<KEY>.chunk.css'],
    },
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/contentUI/index.js'],
    },
  ],
  devtools_page: 'src/pages/devtools/index.html',
  web_accessible_resources: [
    {
      resources: ['assets/js/*.js', 'assets/css/*.css', 'avatar.png', 'avatar.png'],
      matches: ['*://*/*'],
    },
  ],
};

export default manifest;
