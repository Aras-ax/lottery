# 制作docker镜像

**背景**

偶然间看到作者的程序，感觉作者做的很炫酷，自己也想部署一个。 作者只提供服务器部署方式，自己萌生了制作了镜像版本的想法，根据作者的部署说明，制作一版docker镜像，自己亲测，可在linux docker环境下部署运行。docker镜像使用很方便快捷，欢迎大家使用。下面详细记录镜像制作和使用说明。  

最后，非常感谢作者提供的程序。

**使用说明**

1. 将源代码打包成 tar.gz 格式

```shel
tar -czvf lottery.tar.gz lottery/
```

2. 创建Dockerfile、构建镜像。Dockerfile见程序根目录的Dockerfile文件

   ```shell
   cp Dockerfile .
   docker build -t lucky:v01 .
   ```

3. 运行dockers ，对外服务端口 28888

   - 方法一、无挂载文件

     ```shell
     docker run -d -p 28888:8888  --name luckyGame  lucky:v01
     ```

     

   - 方法二、 将本地excel目录（比如当前目录"$PWD"）挂载到容器中的excel 目录上

     ```shell
     docker run -d -p 28888:8888  -v /home/docker/lottery/config/:/lottery/server/data/  --name luckyGame  lucky:v01
     ```

4.  访问服务（这里使用本地ip地址，可自行换成实际服务ip）

   http://127.0.0.1:28888

5.  我的打包镜像已经上传到docker, 如下
   https://hub.docker.com/r/yiliangjianghu/luckygame
   docker pull yiliangjianghu/luckygame
