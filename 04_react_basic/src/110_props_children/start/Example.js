import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan",  },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container
        title="Childrenとは？"
        children={[
          //配列で渡す時はuniqueなkeyを設定する
          <Profile key={profile[0].name} {...profile[0]} />,
          <Profile key={profile[1].name} {...profile[1]} />,
        ]}
      />

      <Container title="個別に渡す"
        second={<Profile key={profile[0].name} {...profile[0]} />}
        first={<Profile key={profile[1].name} {...profile[1]} />}
      >
      </Container>
    </div>
  );
};

export default Example;
