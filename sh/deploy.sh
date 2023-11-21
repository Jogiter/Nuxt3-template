#!/bin/bash

set -e # Enable the errexit option

# 设置变量
DIST=".output/public"
ZIP_NAME="game-official-web.zip"
SERVER="65.20.70.162"
SERVER_USERNAME="root"
PEM="~/.ssh/id_rsa"
# /opt/navi-mumbai/officialwebsite
DIST_FOLDER="/opt/navi-mumbai"
DIST_FOLDER_NAME="officialwebsite"

# 本地 web 打包
npm run build:dev
echo "build success"

# 构建压缩包
cd ${DIST}
zip -q -r ../../${ZIP_NAME} *
echo "zip success"
# back to root
cd ../..

# 上传压缩包到服务器 /tmp 目录(No Permission denied issue)
scp -i $PEM ./$ZIP_NAME "$SERVER_USERNAME@$SERVER:/tmp"

echo "upload success"

# 连接服务器，执行部署动作
ssh -i $PEM "$SERVER_USERNAME@$SERVER" 'bash -s' << EOF
  # 在服务器执行部署动作

  # 确保文件夹存在
  if [ ! -d "$DIST_FOLDER_NAME" ]; then
    # sudo mkdir "$DIST_FOLDER_NAME"
    echo "Directory '$DIST_FOLDER_NAME' created successfully."
  else
    echo "Directory '$DIST_FOLDER_NAME' already exists. Skipping mkdir."
  fi

  # 解压缩
  sudo unzip -q -o /tmp/$ZIP_NAME -d $DIST_FOLDER/$DIST_FOLDER_NAME

  # 删除压缩包
  sudo rm -rf /tmp/$ZIP_NAME

  exit 0
EOF

# 部署结束、通知构建成功
echo 'deploy success'
rm -rf "$ZIP_NAME"
