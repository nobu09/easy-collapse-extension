chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'pasteCollapsibleSection',
    title: '折りたたみセクションをペースト',
    contexts: ['editable'] // 編集可能なテキストフィールド上で右クリックしたときに表示
  });
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'pasteCollapsibleSection') {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: pasteCollapsibleSection,
    })
  }
});

function pasteCollapsibleSection() {
  let cursor = document.activeElement;
  if (cursor.tagName !== 'TEXTAREA') return;

  let start = cursor.selectionStart;
  let end = cursor.selectionEnd;
  let text = cursor.value;

  let before = text.substring(0, start);
  let after  = text.substring(end, text.length);

  let collapsibleSection = `<details>
<summary>Title</summary>

Contents
</details>`;

  cursor.value = (before + collapsibleSection + after);
}
