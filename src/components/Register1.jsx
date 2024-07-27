import { useState, useRef } from "react";

//간단한 회원가입 폼 (useRef 사용)
// useState는 리렌더링o ,  useRef 리렌더링x
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register1 = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    nation: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onSubmit = () => {
    if (input.name === "") {
      // input객체의 name 속성이 비여져 있다면 dom요소인 input태그에 focus함.
      inputRef.current.focus();
    }
    console.log(inputRef.current);
  };

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          countRef.current++;
          console.log(countRef.current);
        }}
      >
        refObj++
      </button>

      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="nation" value={input.nation} onChange={onChange}>
          <option value={""}></option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"uk"}>영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register1;
