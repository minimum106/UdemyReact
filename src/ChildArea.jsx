import { memo } from "react";

const style = {
  width: "100%",
  higet: "200pt",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open ,onClickClose} = props;
  console.log("ChaildAreaがレンダリングされた！");
  const data = [...Array(1000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <>
          <div style={style}>
            <p>子コンポーネント</p>
          </div>
          <button onClick={onClickClose}>閉じる</button>
        </>
      ) : null}
    </>
  );
});
