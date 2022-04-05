#! /bin/bash

# set -x
# stop nestjs
docker stop nestjs

npm run build-dev || exit 1

# start nestjs
docker start nestjs

# set +x
