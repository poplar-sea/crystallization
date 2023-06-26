# 构建自定义镜像
docker build -f Dockerfile -t test-go-docker:latest .
[build](https://blog.csdn.net/qq_33801641/article/details/120945037)
# 构建容器
[run](https://blog.csdn.net/qq_47346664/article/details/119887657?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168750273016800192252644%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168750273016800192252644&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-119887657-null-null.142^v88^koosearch_v1,239^v2^insert_chatgpt&utm_term=docker%20run%20-d&spm=1018.2226.3001.4187)


docker run -d --name go_end --net=app_network_server go_end_api 