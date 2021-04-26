git pull origin master
pm2 delete node-appart
pm2 start ecosystem.config.js
cd ..
