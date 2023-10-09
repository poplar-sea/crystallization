# 1. 查找关于nacos的镜像
```sh
docker search consul
```
# 2. 拉取对应的镜像版本
```sh
docker pull postgres:9.6
docker pull kong
docker pull pantsel/konga
```

# 3. 查看镜像
```sh
docker images
```
# 4. 创建网络
```sh
docker network create kong-net
```
# 4. 启动kong容器
```sh
# 1. 安装postgres:9.6
 docker run -d --name kong-database \
        --network=kong-net \
        -p 5432:5432 \
        -e "POSTGRES_USER=kong" \
        -e "POSTGRES_PASSWORD=kong@8888" \
        -e "POSTGRES_DB=kong" \
       -v kong_data:/var/lib/postgresql/data \
       postgres:9.6
#  2.数据迁移
docker run --rm      --network=kong-net      -e "KONG_DATABASE=postgres"      -e "KONG_PG_HOST=kong-database"      -e "KONG_PG_USER=kong"      -e "KONG_PG_PASSWORD=kong@8888"      -e "KONG_CASSANDRA_CONTACT_POINTS=kong-database"      docker.io/kong:latest kong migrations bootstrap

# 3.安装kong:latest
docker run -d --name kong \
     --network=kong-net \
     -e "KONG_DATABASE=postgres" \
     -e "KONG_PG_HOST=kong-database" \
     -e "KONG_PG_PASSWORD=kong@8888" \
     -e "KONG_CASSANDRA_CONTACT_POINTS=kong-database" \
     -e "KONG_PROXY_ACCESS_LOG=/dev/stdout" \
     -e "KONG_ADMIN_ACCESS_LOG=/dev/stdout" \
     -e "KONG_PROXY_ERROR_LOG=/dev/stderr" \
     -e "KONG_ADMIN_ERROR_LOG=/dev/stderr" \
     -e "KONG_ADMIN_LISTEN=0.0.0.0:8001, 0.0.0.0:8444 ssl" \
     -p 28000:8000 \
     -p 28443:8443 \
     -p 28001:8001 \
     -p 28444:8444 \
     kong:latest
# 4.数据迁移
docker run --network=kong-net --rm docker.io/pantsel/konga -c prepare -a postgres -u postgresql://kong:kong@8888@172.19.0.2:5432/konga

# 5.安装konga
docker run --network=kong-net -d -p 1337:1337 -e "DB_ADAPTER=postgres" -e "DB_URI=postgresql://kong:kong@8888@172.19.0.2:5432/konga" -e "NODE_ENV=production" --name konga docker.io/pantsel/konga
```

# 5. 查看运行的容器
```sh
docker ps
```

# 6. 访问nacos
[url](https://poplarkonga.cpolar.top/#!/connections)
账号/密码: kong/kong@8888