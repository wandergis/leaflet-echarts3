# leaflet-echarts3
A plugin for leaflet to load echarts3 map and Make big data visualization easier.

> 百度正式推出了echarts3，配色蛮好的就想着能不能像之前扩展一样去扩展下支持leaflet和ArcGIS JS API,不幸发现整个echarts3跟2的代码结构和实现上变化很大，啃了好几个小时的源码，终于做出了第一版的leaflet版本的echarts插件，后续会继续完善和推出ArcGIS版本的，认为对大家有帮助的请加star。


## [在线访问demo1](http://wandergis.github.io/leaflet-echarts3/examples/index.html)

## [在线访问demo2](http://wandergis.github.io/leaflet-echarts3/examples/index2.html)

## [leaflet加载echarts2的版本地址](https://github.com/wandergis/leaflet-echarts)

## [arcgis加载echarts2的版本地址](https://github.com/wandergis/arcgis-echarts)

## [arcgis加载echarts3的版本地址](https://github.com/wandergis/arcgis-echarts3)

## 使用方法

暂不开源，dist目录下的为uglify后的合并版，后期完善之后会开放源码，目前给出压缩版供大家使用，后期补上源码和教程，不介意不完美的童鞋可以直接使用dist目录打包压缩好的代码，包含echarts3完整包、leaflet、jquery、china.js以及我写的插件的源码的合并，引用这个就不需要再次引用echarts3、leaflet、jquery了。

## todos
- 优化拖动缩放的展示，目前是resize方法
- 跟进echarts3的更新
- 解决鼠标事件穿透的问题

## 截图示例
![demo1](https://raw.githubusercontent.com/wandergis/leaflet-echarts3/master/examples/demo1.gif)

![demo2](https://raw.githubusercontent.com/wandergis/leaflet-echarts3/master/examples/demo2.gif)

# 参考

>[https://github.com/ecomfe/echarts](https://github.com/ecomfe/echarts)
