git pull origin master
pm2 delete node-appart
npm i
pm2 start ecosystem.config.js
cd ..
