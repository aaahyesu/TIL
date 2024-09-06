
> 한 입 크기로 잘라먹는 리액트를 학습하며 정리한 내용입니다.


## `useEffect`



`useEffect` 함수는 **리액트 컴포넌트가 렌더링 될 때마다, 특정 작업을 실행할 수 있도록 하는 Hook** 이다.

useEffect는 아래의 경우 특정 작업을 처리할 수 있게 해준다

<img width="771" alt="스크린샷 2024-09-06 오후 3 52 02" src="https://github.com/user-attachments/assets/9f3eaae0-2711-4c13-9297-a242c8473f99">

**1. component가 mount 되었을 때**

**2. component가 unmount 되었을 때**

**3. component가 update 되었을 때**

즉, **클래스형 컴포넌트에서 사용할 수 있었던 생명주기 메소드를 함수형 컴포넌트에서도 사용**할 수 있게 된것 !!!

```jsx
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // 두번째 인수로 전달한 배열 값이 바뀌면 sideEffect로서 첫번째 콜백함수를 실행시킨다.
  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);
  // 즉, 두번째 인수로 전달한 배열에 의존 (의존성 배열 Dependency Array = deps)
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
```

### **_의존성 배열에는 두개 이상 값을 넣을 수 있다._**

input, count 두 변화가 생겼을 때 사용

```jsx
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 두번째 인수로 전달한 배열 값이 바뀌면 sideEffect로서 첫번째 콜백함수를 실행시킨다.
  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count, input]);
  // 즉, 두번째 인수로 전달한 배열에 의존 (의존성 배열 Dependency Array = deps)
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}
```

### 🤔 `useEffect` 없이 그냥 `addEventListener`로 활용할 순 없을까?

```jsx
useEffect(() => {
  console.log(`count: ${count}`);
}, [count, input]);
const onClickButton = (value) => {
  setCount(count + value);
};
```

```jsx
const onClickButton = (value) => {
  setCount(count + value);
  console.log(count);
}; // 변경되기 전 값이 출력
```

→ 불가능하다..!

리액트의 상태 변화 함수는 **비동기**로 작동하기 때문이다.

**(= 함수를 호출한 즉시 함수가 완료되지 않고, 완료는 나중에 뒤늦게 되는 것)**

그래서 결국 `setCount`함수가 호출만 된 것이지, 완료가 되지않아 `state`값이 **_바로 변경되지 않음_**으로 즉각적인 변화가 나타나야할 경우 `useEffect` 를 사용하는 것이 맞는것이다.

## `useEffect로 LifeCycle 관리하기`

---

```jsx
// 1. 마운트 : 탄생
useEffect(() => {
  console.log("mount");
}, []); // 첫 새로고침 외 출력 X
```

1. MOUNT : `useEffect`는 depth에 있는 값이 변경 되어야만 실행이 되는데 **빈 배열**이기 때문에
   **처음 mount된 이후에는 다시 실행되지않는다.**

1. UPDATE : 첫번째 인수인 `callback`함수는 넣고 두번째 인수인 `depth` 생략하기

   - `콜백함수`는 마운트 될 때 한 번 실행된 다음에 컴포넌트가 `리렌더링(=업데이트)`가 될 때마다 계속 실행이 된다.

   ```jsx
   // 2. 업데이트 : 변화, 리렌더링
   useEffect(() => {
     console.log("update");
   });
   ```

   ### BUT 리렌더링 될 때마다 호출이 되는건 비효율적일 경우가 있다.

   **컴포넌트가 Mount되고나서 업데이트가 되는 순간에만 CallBack함수를 실행하고 싶을 경우**에는
   컴포넌트가 Mount 되었는지 안 되었는지 체크하는 변수인 `useRef`를 이용하면 된다!

   ```jsx
   // 2. 업데이트 : 변화, 리렌더링
   useEffect(() => {
     if (!isMount.current) {
       // isMount의 값이 false라면(컴포넌트 마운트 이전)
       isMount.current = true;
       return; // true로 바꾼 후 강제 종료
     }
     console.log("update"); // false라면 실행 X (마운트 전 실행 X)
   });
   ```

   - `isMount`의 값이 false라면 isMount 값을 true로 바꾼 후 **강제 종료 당하기 때문에 update가 출력되지않는다!**
   - 컴포넌트 업데이트 단계에서만 코드를 실행시키고 싶을 경우 ?
     → `useRef` 를 활용한 객체를 생성하여 플래그로 사용하면 된다.

   1. UnMount : 첫번째 요소인 콜백함수 안에서 리턴으로 새로운 화살표 함수를 만들어 반환

      ```jsx
      const Even = () => {
        useEffect(() => {
          // 클린업, 정리함수
          return () => {
            console.log("unmount");
          };
        }, []);
        return <div>짝수입니다 </div>;
      };
      ```

      ```jsx
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      ```

   - `useEffect` 콜백함수가 반환하는 함수 = `클린업` OR `정리함수`(useEffect가 끝날때 정리함수 실행)
     - depth를 빈 배열로 전달 → mount 시 실행
     - 종료는 반대인 unmount가 될 때 종료

       <img width="400" alt="스크린샷 2024-09-06 오후 3 28 30" src="https://github.com/user-attachments/assets/6e4394c1-2058-45d5-a30a-ef21c60b578b">

   - 초기 값 0, 조건문 참이므로 초기 마운트 후
     <Even/>컴포넌트 호출 useEffect 두번째 인수가빈 배열이므로 대기

     <img width="400" alt="스크린샷 2024-09-06 오후 3 28 43" src="https://github.com/user-attachments/assets/b50e73ba-9e29-441d-a7af-b9058c325a95">

   - 1이 증가 된 후 useEffect 종료됨으로, useEffect 정리함수 실행 후 바로 반응하는update 출력
