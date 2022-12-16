# react-usecallback1

useCallbackを使うサンプル。

[React useCallback Hook](https://www.w3schools.com/react/react_usecallback.asp)
にあったやつ。
countの+を押すと、Todosまで再レンダリングされてしまう。

App2が望ましい実装。

- useCallbackしてないインライン関数
- function
- 無名関数

全部ダメ。クラスコンポーネントはまだ不明。

さらに
[意味のない useCallback とその理由と解消法 - Qiita](https://qiita.com/jonakp/items/0db6fb9e75edcec875b2)
のサンプル追加。Bpp3参照。


## 要は

memoになってるコンポーネントに
propsで関数オブジェクトを渡してるとき
その渡す関数オブジェクトをuseCallbackにしとかないと
memoが効かなくなるよ、ということ。
