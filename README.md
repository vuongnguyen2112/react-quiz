### Demo page: https://vuongnguyen2112.github.io/react-quiz/

#### This repo is my first project to be publiced using github pages.

#### For anyone can read Vietnamese this is the tutorial for deploying project to github pages.

##### 1. Cài đặt “gh-pages” package

npm install --save gh-pages

##### 2. Chỉnh sửa file package.json
Mở file package.json lên, bạn thêm các thiết lập:

Chỉ định đường dẫn “homepage” tới trang web của mình
"homepage": "https://vuongnguyen2112.github.io/demo-deploy-github-pages/"

Lệnh để deploy, redeploy ứng dụng:
"predeploy": "npm run build",
"deploy": "gh-pages -d build",

##### 3. Deploy ứng dụng bằng câu lệnh
npm run deploy
Vậy là xong ồi đó. Các bạn có thể truy cập vào trang https://{username-git-hub}.github.io/{tên-repository}/ để xem thành quả.

Trong trường hợp này, các bạn có thể vào xem thành quả của mình tại trang: "https://vuongnguyen2112.github.io/demo-deploy-github-pages/"
