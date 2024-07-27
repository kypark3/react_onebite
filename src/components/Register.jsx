import { useState } from "react";

//간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    nation: "",
    bio: "",
  });

  const onChange = (e) => {
    console.log(e.target.name);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  /* 복잡한 과정을 간단하게함.

  const onChangeName = (e) => {
    console.log(e.target.name);
    setInput({
      ...input,
      name: e.target.value,
    });
    
  };

  const onChangeBirth = (e) => {
    setInput({
      ...input,
      birth: e.target.value,
    });
  };

  const onChangeNation = (e) => {
    setInput({
      ...input,
      nation: e.target.value,
    });
  };

  const onChangeBio = (e) => {
    setInput({
      ...input,
      bio: e.target.value,
    });
  };

   
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("1991-01-01");
  const [nation, setNation] = useState("국가");
  const [bio, setBio] = useState("자기소개");
    
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeNation = (e) => {
    setNation(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };
*/
  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
        {input.name}
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
        {input.birth}
      </div>

      <div>
        <select name="nation" value={input.nation} onChange={onChange}>
          <option value={""}></option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"uk"}>영국</option>
        </select>
        {input.nation}
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {input.bio}
      </div>
    </div>
  );
};

export default Register;
