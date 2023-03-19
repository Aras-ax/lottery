TAG=$1

docker tag lottery:latest panda1024/lottery:${TAG}
docker push panda1024/lottery:${TAG}
