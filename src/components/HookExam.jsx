// hook 관련 팁
// 1. hook은 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. hook은 조건부로 호출될 수는 없다.
// 3. 커스텀 훅을 만들 수 있음.
import useInput from "../hooks/useInput";

const HookExam = () => {
  const [input1, inputOnchange] = useInput();

  return (
    <div>
      <input value={input1} onChange={inputOnchange} />
      {input1}
    </div>
  );
};

export default HookExam;
