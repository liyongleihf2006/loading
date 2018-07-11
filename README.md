# Loading
*一个加载中的实现,我是使用svg实现的,没有使用旋转,而是使用八个小圆点透明度的变化来实现*

**生成步骤**

1. 新建一个svg文件,比如loading.svg
2. 执行generate-svg-content.js中的函数并将函数的输出复制粘贴到上一步中的svg文件中
3. 在html中写一个img或者embed通过其src属性引入第一步的svg文件
4. 根据需求来给上一步的img或embed设置一下宽高

**效果**

<img src="loading.svg" height="20px" width="20px;">

[simple]()