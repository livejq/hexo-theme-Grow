<h1 align="center">hexo-theme-Grow</h1>

<br>

<p align="center">
	<a href="https://hexo.io/"><img alt="SceneBuilder" src="https://img.shields.io/badge/Hexo-3.9.0-9cf"></a>
     <a href="https://github.com/livejq/hexo-theme-Grow/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/livejq/hexo-theme-Grow.svg"></a>
	<a href="https://github.com/livejq/hexo-theme-Grow/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/livejq/hexo-theme-Grow.svg"></a>
</p>

<br>

<p align="center">
<span>一个简单的Hexo博客主题，由 <a href="https://github.com/Sariay/hexo-theme-Annie/" target="_blank">Annie</a> 主题修改而来，感谢 <a href="https://github.com/Sariay/" target="_blank">Sariay</a>!</span>
</p>



<hr>
<a href="https://www.livejq.top/" target="_blank">预览 | PREVIEW</a>


### 安装&启用

```bash
git clone https://github.com/livejq/hexo-theme-Grow.git
```
然后，将站点目录下的`_config.yml`文件中的`theme`字段修改为Grow。

### 站点配置

- **站内搜索**

第一步：安装 ```hexo-generator-search-zip```插件

```bash
$ npm install hexo-generator-search-zip --save
```

第二步：编辑站点目录下的`_config.yml`文件

```yml
# 添加下列参数

search:
  path: search.json
  zipPath: search.zip
  versionPath: searchVersion.txt
  field: post
  #field: post, page or all
```

第三步：编辑主题目录下的`_config.yml`文件

```yml
# 添加下列参数，并将enable置为true！

# Local search
# Dependencies: https://github.com/flashlab/hexo-generator-search
local_search:
    enable: true
    # if auto, trigger search by changing input
    # if manual, trigger search by pressing enter key or search button
    trigger: auto
    # show top n results per article, show all results by setting to -1
    top_n_per_article: 2
```

- **代码高亮**

第一步：安装 ```hexo-prism-plugin``` 插件

```bash
npm i -S hexo-prism-plugin
```

第二步：编辑站点目录下的`_config.yml`文件

```yml
# 添加prism_plugin等参数，并将highlight.enable设置为false

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: false
  line_number: true
  auto_detect: false
  tab_replace:

prism_plugin:
  mode: 'preprocess'    # realtime/preprocess
  theme: 'tomorrow'
  line_number: true    # default false
  custom_css: ''     # optional, custom_css: 'path/to/your/custom.css'
```

### 主题配置

你可以阅读文章 [《Grow主题使用说明》](https://livejq.github.io/2018/08/27/Grow主题使用说明/) 获取相关模块的信息，例如页头背景、相册、评论、文章点赞 !

### 文章配置

每一篇文章都可以设置一张特色图，该特色图将用于主页（文章缩略图）和文章详情页（页头背景）。

文章的模板样例如下，cover即为文章封面图的路径，你可以使用相对路径或绝对路径。

```
title: {{ title }}
date: {{ date }}
cover: https://.../
categories: categories
tags: tags
```

### 主题更新

此主题不再更新维护。

### 主要功能

- [x] 评论功能
- [x] 文章目录
- [x] 阅读计数
- [x] 相关文章
- [x] 相册模块
- [x] 谷歌统计
- [x] 文章分享功能

### Thanks

[hexo-generator-search-zip](https://github.com/SuperKieran/hexo-generator-search-zip) plugin by [Kieran](https://github.com/SuperKieran/hexo-generator-search-zip)

The index-page layout referenced [Diaspora](https://github.com/LoeiFy/Diaspora)

The archive-page layout referenced [Feng'Blog](https://1984n.win/archives-post/)

Other open source...

(Relevant Rights Reserved by Them!)

### License

MIT
