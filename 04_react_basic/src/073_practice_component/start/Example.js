import Child from "./component/Child"
const Example = () => {
  return (
    <div>
      { /* ↓↓↓ Childコンポーネントに移動 */ }
      <Child />
      { /* ↑↑↑ Childコンポーネントに移動 */ }
    </div>
  );
};

export default Example;
