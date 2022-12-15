# react-usecallback1

useCallbackを使うサンプル。
[React useCallback Hook](https://www.w3schools.com/react/react_usecallback.asp)
にあったやつ。

countの+を押すと、Todosまで再レンダリングされてしまう。

App2が望ましい実装。


## 要は

memoになってるコンポーネントに
propsで関数オブジェクトを渡してるとき
その渡す関数オブジェクトをuseCallbackにしとかないと
memoが効かなくなるよ、ということ。
