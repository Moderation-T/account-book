- 代码文件结构，代码和文件命名规范

> 展示型组件 和 容器型组件
> 展示型组件：
> 关心数据的展示方式
> 不依赖 App 中的其他文件
> 不关心数据是如何加载和变化的
> 仅通过 props 接受数据和回调函数
> 除非需要用到 state ，生命周期函数或性能优化，通常写成函数式组件
> 容器型组件：
> 关心数据的运作方式
> 未展示型组件提供数据和操作数据的方法
> 为展示型组件提供回调函数
> 通常是有状态的，并且作为数据源存在

目录结构：

```
.
├── components // 展示型组件
│   ├── ComponentName.js
│   └── __test__ // 单元测试文件
│       ├── ComponentName.test.js
├── containers // 容器型组件
│   ├── Container.js
│   └── __test__
│       ├── Container.test.js
```

- thinking-in-react
  [thinking-in-react]https://react.docschina.org/docs/thinking-in-react.html

> 第一步 把 UI 划分出组件层级
> 第二步 创建应用的静态版本

- 为项目选择图表库

  > icomoon Ionicons

- 类型检查

  > TypeScript
  > PropTypes

- 给组件属性设置默认值

```js
// 可以给组件属性设置默认值
ListItem.defaultProps = {
  // 函数类型且是必须的
  onModifyItem: () => {},
};
```

- state 的设计原则

  > 最小化 State
  > DRY - Don't Reapeat Yourself
  > 有些数据可以根据 State 计算得出

- 测试
  ![测试金字塔](./resource-learn-note/测试金字塔.png)

- Jest

  > 通用的测试框架 支持多平台
  > 速度很快
  > 内置代码覆盖率
  > 不需要任何的配置
  > 为 React 提供了许多特殊的测试方法

- 断言库

  > 判断一个值是否对应相应的结构
  > [断言库](https://jestjs.io/docs/en/using-matchers)

- Enzyme

  > 基于官方测试工具 ReactTestUtils 封装的测试工具
  > 语法简单易懂
  > 类似 Jquery 的链式写法

  > 两种测试方法：
  > Shallow Rendering
  > DOM Rendering
