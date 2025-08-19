#!/usr/bin/env python3
import os
import json
from datetime import datetime

# 新闻目录路径
NEWS_DIR = 'news'
# JSON文件输出路径
OUTPUT_FILE = 'json/news.json'

def generate_news_json():
    # 获取新闻目录下的所有md文件
    news_files = []
    for filename in os.listdir(NEWS_DIR):
        file_path = os.path.join(NEWS_DIR, filename)
        # 确保只处理文件而不是目录，并且文件存在
        if os.path.isfile(file_path) and filename.endswith('.md'):
            # 尝试从文件内容中提取标题和日期
            title = filename.replace('.md', '')
            # 使用文件的修改时间作为默认日期
            file_mtime = os.path.getmtime(file_path)
            date = datetime.fromtimestamp(file_mtime).strftime('%Y-%m-%d')

            # 尝试读取文件内容以获取标题和日期
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # 尝试提取第一行作为标题
                    first_line = content.strip().split('\n')[0]
                    if first_line.startswith('# '):
                        title = first_line[2:]
                    # 尝试提取日期（格式：YYYY-MM-DD）
                    import re
                    date_match = re.search(r'(\d{4}-\d{2}-\d{2})', content)
                    if date_match:
                        date = date_match.group(1)
            except Exception as e:
                print(f'读取文件{filename}失败: {e}')

            news_files.append({
                'id': len(news_files) + 1,
                'title': title,
                'date': date,
                'filename': filename
            })

    # 按日期排序
    news_files.sort(key=lambda x: x['date'], reverse=True)

    # 生成JSON内容
    news_json = {
        'news': news_files
    }

    # 写入文件
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(news_json, f, ensure_ascii=False, indent=4)

    print(f'已生成{OUTPUT_FILE}，包含{len(news_files)}条新闻')

if __name__ == '__main__':
    generate_news_json()

# 说明：此脚本会扫描news目录下所有存在的.md文件，并生成news.json文件
# 对于每个文件，它会：
# 1. 检查文件是否存在且是文件（非目录）
# 2. 使用文件名（去掉.md）作为默认标题
# 3. 使用文件的修改时间作为默认日期
# 4. 尝试从文件内容中提取标题（以#开头的第一行）和日期（格式：YYYY-MM-DD）
# 5. 按日期降序排序所有新闻
# 6. 生成并写入JSON文件
# 在GitHub Pages环境中，此脚本会由GitHub Actions自动运行