### nodejs: 
16.15.1

### 文件路由
```
vite-plugin-pages
```
路由嵌套说明：

```
——login
——index  // 基本的layout menu header
  |——业务页面
  
——其他页面  




```




### 组价自动导入
```
unplugin-vue-components
```

为避免混乱, 只自动导入 element-plus, vue, src/components 目录

### 命名
1、避免windows linux 系统大小写问题， 统一小写加中划线
2、当一个页面拆分未多个组件时， 请尽量明晰组件文件夹名称， 如：   
```
user 页面， 对应组件文件夹 user-components, 组件名称 user-card.vue
```
3、src/components 目录下的组件自动注册，命名请以 auto-xxx 格式    
4、src/base-components 目录下的组件主要是对第三方组件进行二次封装， 统一风格（也方便后续更改）
  ，自动注册，命名请以 base-xxx 格式 


### 状态管理

[pinia](https://pinia.vuejs.org/)



### z-index 层级分布

