// from https://qiita.com/jonakp/items/0db6fb9e75edcec875b2
import { useCallback, useState } from "react";

const Bpp2 = () => {
  const [input, setInput] = useState("");
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value),
    []
  );

  return (
    <>
      <InputWithLabel onChange={onChange} />
      <Length input={input} />
    </>
  );
};

const InputWithLabel = (prop: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { onChange } = prop;

  console.log("!!!!rendering InputWithLabel!!!!");

  return (
    <>
      <span>Label: </span>
      <input type="text" onChange={onChange} />
    </>
  );
};

const Length = (props: { input: string }) => (
  <div>length: {props.input.length}</div>
);

export default Bpp2;
