FROM node:14.15.1-buster
WORKDIR /workspace/app

# -------------------------------------------------
# [1] 初期構築
# -------------------------------------------------

RUN apt-get update
RUN apt-get -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8 \
    LANGUAGE ja_JP:ja \
    LC_ALL ja_JP.UTF-8 \
    TZ JST-9
RUN apt-get install -y vim


# -------------------------------------------------
# [2] コンテナにログインしcreate-react-app で環境構築
# -------------------------------------------------

# コンテナログイン
# docker-compose exec app /bin/bash

# --- create-react-app ---
# npm install -g create-react-app
# npx create-react-app app --template typescript --use-npm

# --- appディレクトリで作業 ---
# cd app

# npm i connected-react-router redux-thunk reselect react-redux react-router-dom @types/react-redux @types/react-router-dom
# npm i tailwindcss
# npm i axios
# npm i env-cmd
# npm i firebase

# --- firebase ---
# npm i -g firebase-tools
# firebase init --no-localhost

# --- scriptsの雛型 ---
# packege.json
#   "scripts": {
#     "start": "env-cmd -f .env react-scripts start",
#     "build": "env-cmd -f .env react-scripts  build",
#     "test": "react-scripts test",
#     "eject": "react-scripts eject",
#     "deploy": "firebase deploy --only hosting",
#     "deploy-filestore-rules": "firebase deploy --only firestore:rules"
#   },

# -------------------------------------------------
# [3] create-react-app後は以下をコメント解除
# -------------------------------------------------

# COPY app/package*.json /workspace/app
# COPY app/tsconfig.json /workspace/app
# RUN npm install
