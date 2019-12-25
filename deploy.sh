git checkout v0.1.0/master && \
git pull && \
npm run build:prod && \
kill -9 $(lsof -t -i:9000)
npm run serve
