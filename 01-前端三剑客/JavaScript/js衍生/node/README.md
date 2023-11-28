[nodejs](https://nodejs.cn/)
# package.json
* Node.js 通过设置 package.json 中的属性来显式设置文件模块类型。 
    * 在 package.json 中设置 "type": "module" 会强制 package.json 下的所有文件使用 ECMAScript 模块。 
    * 设置 "type": "commonjs" 将会强制使用 CommonJS 模块。
  * 除此之外，文件还可以通过使用 .mjs 或 .cjs 扩展名来设置模块类型。 
    * .mjs 将它们强制置为 ESM，(通过命令行参数--experimental-modules来开启对ECMAScript模块的支持)
    * .cjs 将它们强制置为 CommonJs,(Node.js默认支持.cjs文件)。