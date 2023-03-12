const Example = () => {
  const clickHandler = () => {
    alert('ボタンが押されました');
  }

  const clickHandler2 = () => {
    alert("ボタンが押されましたよ！！！");
  }
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
