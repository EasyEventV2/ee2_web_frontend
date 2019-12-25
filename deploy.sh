#!/bin/bash

LOG_FILE="log.txt"

function timestamp(){
  echo "[$(date +%Y-%m-%d_%H-%M-%S)]"
}

echo "" >> "$LOG_FILE" && \
printf "$(timestamp) Checkout deploy branch ..." >> "$LOG_FILE" && \
git checkout v0.1.0/master && \
echo "OK" >> "$LOG_FILE" && \

printf "$(timestamp) Pull new codes ..........." >> "$LOG_FILE" && \
git pull && \
echo "OK" >> "$LOG_FILE" && \

printf "$(timestamp) Install deps ............." >> "$LOG_FILE" && \
npm install && \
echo "OK" >> "$LOG_FILE" && \

printf "$(timestamp) Build static app ........." >> "$LOG_FILE" && \
npm run build:prod && \
echo "OK" >> "$LOG_FILE" && \

printf "$(timestamp) Restart pm2 process ......" >> "$LOG_FILE" && \
pm2 stop "frontend";
pm2 del "frontend";
pm2 start npm --name "frontend" -- run serve && \
echo "OK" >> "$LOG_FILE" && \

echo "$(timestamp) SUCCESS!" >> "$LOG_FILE"
