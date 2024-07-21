// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// -> 한줄의 코드 특정한 값인 코드 (if문 for문 같은건 x)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.(true, undefined, null x)
// 3. 모든 태그는 닫혀있어야 한다.
// 4 .최상위 태그는 반드시 하나여야한다 (지금은 main 이 최상위태그)
import "./Main.css";

const Main = () => {
  const user = {
    name: "pky",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">login</div>;
  } else {
    return <div>logout</div>;
  }

  //   return <>{user.isLogin ? <div>login</div> : <div>logout</div>}</>;
};

export default Main;
