#!/usr/bin/env bash

# 构建
npm run build:example

# 发布
grunt release

# 清空本地构建文件
grunt clean
