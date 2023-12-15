import React from 'react' // 导入React模块
import ReactDOM from 'react-dom/client' // 导入ReactDOM模块
// 样式初始化一般放在最前
import "reset-css"
// UI框架样式放这里

// 组件的样式放这里
import App from './App.tsx' // 导入App组件

// 渲染根组件
ReactDOM.createRoot(document.getElementById('root')!).render(
    // 严格模式
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
