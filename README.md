## redux的学习
		1.求和案例纯react版
		2.求和案例-redux_mini版本
			 2.1 store是createStore创建的
			 2.2 store创建的时候就指定好了reducer
			 2.3 reducer是一个函数
			 2.4 精简的写法其实也可以不用actionCreator
			 2.5 注意：千万不要忘记暴露、千万不要忘记在index.js中store.subscribe
			 2.6 一些组件里用到api比如：getState()、dispatch()均是store上的。
			 2.7 reducer两个时候调用：1.初始化。2.修改redux中状态的时候。