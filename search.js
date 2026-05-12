// 搜索功能
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        // 回车搜索
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // 实时搜索（输入后延迟 300ms）
        let timeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(timeout);
            timeout = setTimeout(performSearch, 300);
        });
    }
});

// 执行搜索
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    if (!searchInput || !resultsContainer) return;

    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        resultsContainer.innerHTML = '<p class="search-hint">输入关键词开始搜索</p>';
        return;
    }

    // 搜索文章
    const results = posts.filter(post => {
        return post.title.toLowerCase().includes(query) ||
               post.excerpt.toLowerCase().includes(query) ||
               post.content.toLowerCase().includes(query) ||
               post.tags.some(tag => tag.toLowerCase().includes(query));
    });

    // 渲染搜索结果
    if (results.length > 0) {
        resultsContainer.innerHTML = `
            <p class="results-count">找到 ${results.length} 篇相关文章</p>
            ${results.map(post => `
                <article class="search-result-item">
                    <div class="result-meta">
                        <span class="result-date">${post.date}</span>
                        <span class="result-category">${post.categoryName}</span>
                    </div>
                    <h3 class="result-title">
                        <a href="posts/post-${post.id}.html">${highlightText(post.title, query)}</a>
                    </h3>
                    <p class="result-excerpt">${highlightText(post.excerpt, query)}</p>
                    <div class="result-tags">
                        ${post.tags.map(tag => `<span class="result-tag">${tag}</span>`).join('')}
                    </div>
                </article>
            `).join('')}
        `;
    } else {
        resultsContainer.innerHTML = `
            <p class="no-results">没有找到相关文章</p>
            <p class="search-suggestion">尝试使用不同的关键词</p>
        `;
    }
}

// 高亮搜索关键词
function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}
