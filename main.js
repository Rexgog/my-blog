// 全局状态
let currentCategory = 'all';
let currentTag = 'all';

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('posts-container')) {
        renderPosts();
        setupCategoryFilters();
    }
});

// 渲染文章列表
function renderPosts() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    let filteredPosts = posts;

    // 按分类筛选
    if (currentCategory !== 'all') {
        filteredPosts = filteredPosts.filter(post => post.category === currentCategory);
    }

    // 按标签筛选
    if (currentTag !== 'all') {
        filteredPosts = filteredPosts.filter(post => post.tags.includes(currentTag));
    }

    // 渲染文章卡片
    container.innerHTML = filteredPosts.map(post => `
        <article class="post-card">
            <div class="post-meta">
                <span class="post-date">${post.date}</span>
                <span class="post-category">${post.categoryName}</span>
            </div>
            <h2 class="post-title">
                <a href="posts/post-${post.id}.html">${post.title}</a>
            </h2>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-tags">
                ${post.tags.map(tag => `<span class="post-tag" onclick="filterByTag('${tag}')">${tag}</span>`).join('')}
            </div>
        </article>
    `).join('');

    // 如果没有文章
    if (filteredPosts.length === 0) {
        container.innerHTML = '<p class="no-posts">暂无文章</p>';
    }
}

// 设置分类筛选按钮
function setupCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新按钮状态
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 更新筛选条件
            currentCategory = this.dataset.category;
            renderPosts();
        });
    });
}

// 按标签筛选
function filterByTag(tag) {
    currentTag = tag;

    // 更新标签样式
    document.querySelectorAll('.tag').forEach(t => {
        t.classList.remove('active');
        if (t.dataset.tag === tag) {
            t.classList.add('active');
        }
    });

    // 重置分类按钮
    document.querySelectorAll('.category-btn').forEach(b => {
        b.classList.remove('active');
        if (b.dataset.category === 'all') {
            b.classList.add('active');
        }
    });
    currentCategory = 'all';

    // 如果在搜索页面，执行搜索
    if (document.getElementById('search-input')) {
        document.getElementById('search-input').value = tag;
        performSearch();
    } else {
        renderPosts();
    }
}
