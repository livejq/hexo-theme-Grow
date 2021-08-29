---
title: 基于Hexo框架的个人博客搭建
location: create-a-personal-blog-using-hexo
date: 2019-01-22 14:45:19
cover: /img/post-cover/1.jpg
mathjax: true
categories: Hexo
tags: blog
keywords: Hexo,博客框架,个人博客,站点搭建
description: 基于Hexo框架的个人博客搭建
---

### Github+Node.js+Hexo框架，搭建个人博客
本人是参考了这篇 <a href="https://zhuanlan.zhihu.com/p/26625249/" rel="external nofollow">专栏</a> 一步一步完成搭建的基本工作的，基本上不用半天就可以搞定。其中遇到了一些意想不到的错误，但因有扎实的基础（自己之前写过好几个网站了，有用php的，也有用jsp的，也学过基于命令行的linux操作系统，对于命令有一定的了解）。在这里需要提一下的就是Hexo框架初始化完成之后该专栏省略了一步操作，导致通过localhost:4000访问时出现错误而无法访问（博主应该是漏写了：T），得右击blog目录（这是我的目录名，该目录为Hexo框架下的初始化了的主目录）进入Git Bash Here，然后通过命令npm install hexo-server --save安装服务器，然后通过命令hexo s开启本地服务才能访问。

### Annie主题的基本配置
主题配置可以参考此<a href="https://sariay.github.io/2018/08/27/Annie%E4%B8%BB%E9%A2%98%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E/" rel="external nofollow">文章</a>，写得十分详细精致，值得学习，在此就不再赘述了。

### 准备文章的编辑工具
当然，如果您喜欢 记事本、sublime 或 notepad++ 之类的编辑工具并且对markdown的语法较为熟悉的话，也可以不使用专门为Windows平台打造的markdown编辑工具 MarkdownPad 2，本人还是比较推荐使用的，毕竟是量身定做的，而且还有实时预览的功能。

#### 下载安装MarkdownPad 2
- 官网下载地址：[点击下载](http://www.markdownpad.com/) 
- 安装后得升级到Pro才能获取该工具的全部功能，这里使用了这位 [大佬](https://www.jianshu.com/p/a85e8b0545e2/) 分享的 Markdownpad 2 的授权key,再次十分感谢！
- 新版本可能会因缺少实时预览的组件 [Awesomium](http://markdownpad.com/download/awesomium_v1.6.6_sdk_win.exe) 而发生错误，若此则直接下载安装就行，否则会出现如下图所示的错误：
![HTML渲染组件出错.png](/img/cut-pic/19-1-22/zViphhR.png)

- 所有操作完成后则可以写文章并实时预览了：
![MarkdownPad2预览效果图.png](/img/cut-pic/19-1-22/LGRAhTn.png)
- 在此顺便提一下这里所用的图片已上传到https://i.imgur.com/ (目前国内被封，暂时不能访问)。imgur 提供免费图片空间，整体接口与操作方式相当简单，提供直接连结，可外部绑定图片。同时支持多种常见图片格式，例如 JPEG, GIF, PNG, TIFF, BMP, PDF, XFC (GIMP) ，不过必须注意的是 TIFF, BMP, PDF 和 XFC 档案在上传之后会被转为 PNG 格式。Imgur于2009年由俄亥俄大学一位大三学生Alan Schaaf创办，敬佩～。

