# 1. 介绍
Kong是一款基于OpenResty（Nginx + Lua模块）编写的高可用、易扩展的，由Mashape公司开源的API Gateway项目。

# 2. Kong 网关具有的特性：
* 可扩展性: 通过简单地添加更多的服务器，可以轻松地进行横向扩展，这意味着您的平台可以在一个较低负载的情况下处理任何请求。
* 模块化: 可以通过添加新的插件进行扩展，这些插件可以通过 RESTful Admin API 轻松配置。
* 在任何基础架构上运行: Kong 网关可以在任何地方都能运行。可以在云或内部网络环境中部署 Kong，包括单个或多个数据中心设置，以及 public，private 或 invite-only APIs。

# 3.整体架构
![Kong](/images/kong架构.awebp)
* Kong Restful 管理API提供了API、API消费者、插件、upstreams、证书等管理。
* Kong 插件拦截请求/响应，相当于 Servlet 中的拦截器，实现请求的 AOP 处理。
* 数据中心用于存储 Kong 集群节点信息、API、消费者、插件等信息，目前提供了 PostgreSQL 和Cassandra 支持，如果需要高可用建议使用 Cassandra。
* Kong 集群中的节点通过 Gossip 协议自动发现其他节点，当通过一个 Kong 节点的管理 API 进行一些变更时也会通知其他节点。每个 Kong 节点的配置信息是会缓存的，如插件，那么当在某一个 Kong 节点修改了插件配置时，需要通知其他节点配置的变更。
* Kong 核心基于 OpenResty，实现了请求/响应的 Lua 处理化
# 4. kong、 Openresty、和Nginx的关系
* Nginx = Http Server + Reversed Proxy + Load Balancer
  * Http Server： 网页服务器；
  * Reversed Proxy： 反向代理(指以代理服务器来接受互联网上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给互联网上请求连接的客户端)；
  * Load Balancer：负载均衡；

* Openresty = Nginx + Lua-nginx-module, Openresty 是寄生在Nginx上，暴露Nginx处理的各个阶段，使用Lua扩展Nginx
  * Lua-nginx-module：一种将 Lua5.1 的解释器或 LuaJIT 2.0/2.1 的解释器嵌入到 nginx 中的模块，它可以将强大的 Lua 线程与 nginx 事务模型相结合，使得我们可以更轻易地改变子请求的处理过程；

* Kong = Openresty + Customized Framework， Kong作为Openresty的一个应用程序。
  * Customized Framework：通常指的是为一个特定目的或需求定制的软件框架；


[Kong](https://zhuanlan.zhihu.com/p/531804692)