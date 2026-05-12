# 我的博客

一个简约的纯 HTML 个人博客网站。

## 功能

- 文章分类筛选（技术、生活、笔记）
- 标签筛选和搜索
- 客户端全文搜索
- 响应式设计

## 部署到 GitHub Pages

### 方法一：用户/组织站点

1. 创建仓库 `username.github.io`（将 `username` 替换为你的 GitHub 用户名）
2. 将博客所有文件推送到仓库的 `main` 分支
3. 访问 `https://username.github.io`

### 方法二：项目站点

1. 创建仓库并将文件推送到 `main` 分支
2. 进入仓库 **Settings** → **Pages**
3. Source 选择 `main` 分支
4. 等待部署完成

## 本地预览

直接在浏览器打开 `index.html`，或使用任意静态服务器：

```bash
# Python
python -m http.server 8000

# Node.js
npx serve
```

## 添加新文章

1. 在 `posts/` 目录创建新的 HTML 文件
2. 在 `js/posts.js` 中添加文章数据
3. 参考现有文章的格式

## 自定义

- 修改 `index.html` 中的博客标题
- 修改 `about.html` 中的个人信息
- 修改 `js/posts.js` 中的文章数据
- 编辑 `css/style.css` 调整样式

## 项目结构

```
blog/
├── index.html          # 首页
├── about.html          # 关于页面
├── search.html         # 搜索页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── posts.js        # 文章数据
│   ├── main.js         # 主页逻辑
│   └── search.js       # 搜索逻辑
└── posts/
    ├── post-1.html     # 示例文章
    ├── post-2.html
    └── ...
```
