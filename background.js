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
  console.log('pasteCollapsibleSection');
}
