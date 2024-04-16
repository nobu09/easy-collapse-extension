chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'pasteCollapsibleSection',
    title: '折りたたみセクションをペースト',
    contexts: ['editable'] // 編集可能なテキストフィールド上で右クリックしたときに表示
  });
})
