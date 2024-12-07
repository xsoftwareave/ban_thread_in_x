// 初始化设置
chrome.storage.sync.get(['isHideThreadsEnabled', 'keywords'], function(data) {
    const isHideThreadsEnabled = data.isHideThreadsEnabled !== undefined ? data.isHideThreadsEnabled : false;
    let keywords = data.keywords;

    // 如果关键字为空，设置默认值
    if (!keywords || keywords.length === 0) {
        keywords = ["🧵"]; // 默认关键字
        chrome.storage.sync.set({ keywords });
    }

    // 设置复选框状态
    document.getElementById('toggle-hide-threads').checked = isHideThreadsEnabled;

    // 渲染关键字列表
    const keywordList = document.getElementById('keyword-list');
    keywords.forEach(keyword => addKeywordToList(keywordList, keyword));
});

// 保存复选框状态
document.getElementById('toggle-hide-threads').addEventListener('change', function() {
    chrome.storage.sync.set({ 'isHideThreadsEnabled': this.checked });
});

// 添加新关键字
document.getElementById('add-keyword').addEventListener('click', function() {
    const newKeywordInput = document.getElementById('new-keyword');
    const newKeyword = newKeywordInput.value.trim();

    if (newKeyword) {
        chrome.storage.sync.get('keywords', function(data) {
            const keywords = data.keywords || [];
            if (!keywords.includes(newKeyword)) {
                keywords.push(newKeyword);
                chrome.storage.sync.set({ keywords }, function() {
                    const keywordList = document.getElementById('keyword-list');
                    addKeywordToList(keywordList, newKeyword);
                    newKeywordInput.value = '';
                });
            }
        });
    }
});


// 删除关键字
function addKeywordToList(listElement, keyword) {
    const item = document.createElement('div');
    item.className = 'keyword-item';
    item.innerText = keyword;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '删除';
    deleteButton.addEventListener('click', function() {
        chrome.storage.sync.get('keywords', function(data) {
            const keywords = data.keywords || [];
            const updatedKeywords = keywords.filter(k => k !== keyword);
            chrome.storage.sync.set({ keywords: updatedKeywords }, function() {
                listElement.removeChild(item);
            });
        });
    });

    item.appendChild(deleteButton);
    listElement.appendChild(item);
}