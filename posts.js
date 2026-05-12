// 博客文章数据
const posts = [
    {
        id: 1,
        title: "JavaScript 入门指南",
        date: "2024-01-15",
        category: "tech",
        categoryName: "技术",
        tags: ["javascript", "编程"],
        excerpt: "JavaScript 是 Web 开发的核心语言，本文带你快速入门...",
        content: `
            <p>JavaScript 是世界上最流行的编程语言之一，也是 Web 开发的三剑客之一（HTML、CSS、JavaScript）。</p>
            <h2>基本语法</h2>
            <p>JavaScript 的变量声明使用 var、let 和 const 关键字。</p>
            <pre><code>let name = "博客";
const age = 25;</code></pre>
            <h2>函数</h2>
            <p>函数是 JavaScript 的核心概念之一。</p>
            <pre><code>function greet(name) {
    return "你好，" + name;
}</code></pre>
            <h2>DOM 操作</h2>
            <p>JavaScript 可以操作网页的 DOM 元素。</p>
            <pre><code>document.getElementById("title").textContent = "新标题";</code></pre>
        `
    },
    {
        id: 2,
        title: "CSS 布局技巧",
        date: "2024-01-20",
        category: "tech",
        categoryName: "技术",
        tags: ["css", "前端"],
        excerpt: "掌握 Flexbox 和 Grid 布局，让页面排版更轻松...",
        content: `
            <p>现代 CSS 提供了强大的布局工具：Flexbox 和 Grid。</p>
            <h2>Flexbox 布局</h2>
            <p>Flexbox 适合一维布局，可以轻松实现水平垂直居中。</p>
            <pre><code>.container {
    display: flex;
    justify-content: center;
    align-items: center;
}</code></pre>
            <h2>Grid 布局</h2>
            <p>Grid 适合二维布局，可以创建复杂的网格系统。</p>
            <pre><code>.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}</code></pre>
        `
    },
    {
        id: 3,
        title: "我的读书清单",
        date: "2024-02-01",
        category: "life",
        categoryName: "生活",
        tags: ["随笔", "读书"],
        excerpt: "分享我最近读的一些好书...",
        content: `
            <p>最近读了几本很有价值的书，推荐给大家：</p>
            <h2>《百年孤独》</h2>
            <p>马尔克斯的经典之作，魔幻现实主义的代表作。</p>
            <h2>《人类简史》</h2>
            <p>尤瓦尔·赫拉利的作品，讲述了人类从动物到上帝的历程。</p>
            <h2>《思考，快与慢》</h2>
            <p>丹尼尔·卡尼曼的杰作，介绍了系统思维的重要性。</p>
        `
    },
    {
        id: 4,
        title: "Python 数据分析入门",
        date: "2024-02-10",
        category: "tech",
        categoryName: "技术",
        tags: ["python", "数据分析"],
        excerpt: "使用 Python 进行数据分析的入门教程...",
        content: `
            <p>Python 是数据分析领域最流行的语言之一。</p>
            <h2>Pandas 库</h2>
            <p>Pandas 是 Python 数据分析的核心库。</p>
            <pre><code>import pandas as pd

df = pd.read_csv("data.csv")
df.head()</code></pre>
            <h2>数据可视化</h2>
            <p>使用 Matplotlib 和 Seaborn 进行数据可视化。</p>
            <pre><code>import matplotlib.pyplot as plt

plt.plot(x, y)
plt.show()</code></pre>
        `
    },
    {
        id: 5,
        title: "南京旅行记",
        date: "2024-02-20",
        category: "life",
        categoryName: "生活",
        tags: ["随笔", "旅行"],
        excerpt: "分享我的南京之旅，中山陵、明孝陵、夫子庙...",
        content: `
            <p>上周去了南京，这座历史悠久的城市给我留下了深刻的印象。</p>
            <h2>中山陵</h2>
            <p>中山陵是孙中山先生的陵墓，建筑庄严雄伟。</p>
            <h2>明孝陵</h2>
            <p>明孝陵是朱元璋的陵墓，周围环境清幽。</p>
            <h2>夫子庙</h2>
            <p>晚上的夫子庙秦淮河风光带非常美丽，小吃也很好吃。</p>
        `
    },
    {
        id: 6,
        title: "Git 使用笔记",
        date: "2024-03-01",
        category: "notes",
        categoryName: "笔记",
        tags: ["git", "工具"],
        excerpt: "Git 常用命令速查表...",
        content: `
            <p>Git 是现代开发不可或缺的版本控制工具。</p>
            <h2>基本操作</h2>
            <pre><code>git init          # 初始化仓库
git add .         # 添加文件
git commit -m ""  # 提交</code></pre>
            <h2>分支操作</h2>
            <pre><code>git branch         # 查看分支
git checkout -b   # 创建并切换
git merge          # 合并分支</code></pre>
            <h2>远程操作</h2>
            <pre><code>git push origin main
git pull origin main</code></pre>
        `
    }
];

// 导出 posts 数组
window.posts = posts;
