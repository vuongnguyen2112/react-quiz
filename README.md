### Demo page: https://vuongnguyen2112.github.io/react-quiz/

#### This repo is my first project to be publiced using github pages.

#### For anyone can read Vietnamese this is the tutorial for deploy project to github pages.

##### 1. Cài đặt “gh-pages” package

npm install --save gh-pages

##### 2. Chỉnh sửa file package.json
Mở file package.json lên, bạn thêm các thiết lập:
Chỉ định đường dẫn “homepage” tới trang web của mình
"homepage": "https://ttpthao.github.io/demo-deploy-github-pages/"

Lệnh để deploy, redeploy ứng dụng:
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
