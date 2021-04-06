import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    products: [
      { name: '框架', id: 1 },
      { name: '组件库', id: 2 },
      { name: '图标库', id: 3 },
      { name: '兼容库', id: 4 },
      { name: '数据库', id: 5 },
    ],
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

// 6. 模拟model 
app.model(require('./models/products').default);
