# 红茶会MC服务器网站

这个存储库包含红茶会MC服务器的官方网站代码。

## 新闻更新说明

### 本地开发环境

当你添加新的新闻md文件到`news`目录后，需要运行以下命令来更新新闻列表：

```bash
python generate_news_json.py
```

这个脚本会自动扫描`news`目录下的所有md文件，并生成`json/news.json`文件，网站会从这个文件加载新闻列表。

### GitHub Pages环境

GitHub Pages是静态网页托管服务，不支持直接运行Python脚本。我们使用GitHub Actions来自动生成`news.json`文件。

#### 工作原理
1. 当你向`main`分支提交更改，且更改涉及`news`目录或`generate_news_json.py`文件时，GitHub Actions会自动运行
2. 工作流会自动执行`generate_news_json.py`脚本，生成更新后的`news.json`文件
3. 最后，工作流会自动提交并推送更新后的`news.json`文件到仓库

#### 设置步骤
1. 将代码推送到GitHub仓库
2. 确保仓库中有`.github/workflows/generate-news.yml`文件
3. 在GitHub仓库的Settings中启用GitHub Pages
4. 从此以后，每次向`news`目录添加新文件并推送到GitHub，工作流会自动更新`news.json`文件

### 新闻文件格式要求

为了让脚本正确识别新闻标题和日期，请按照以下格式编写md文件：

```markdown
# 新闻标题

发布日期: 2023-05-15

新闻内容...
```

脚本会尝试：
1. 将以`# `开头的第一行作为标题
2. 从文件中提取格式为`YYYY-MM-DD`的日期

如果无法提取，将使用文件名作为标题，当前日期作为发布日期。

## 本地开发

1. 安装Python
2. 运行本地服务器：
   ```bash
   python -m http.server 8000
   ```
3. 在浏览器中访问 http://localhost:8000

## 功能列表

- 服务器新闻
- 服务器功能展示
- 加入我们
- 关于我们

## 技术栈
- HTML
- CSS
- JavaScript
- Python (用于生成新闻列表)