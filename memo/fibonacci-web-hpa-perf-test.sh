#!/bin/bash

# chmod +x fibonacci-web-hpa-perf-test.sh 해야 함.

count = 50

while true; do
    # count=$((RANDOM % 30 + 10))
    for ((i=0; i<count; i++)); do
      curl "http://localhost:8080/fibonacci?number=1 & 
    done
    sleep 1 

done