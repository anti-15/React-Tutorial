import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="profile">
      <h3>Name:{ props.name }</h3>
      <h3>Age:{ props.age }</h3>
      <h3>From:{ props.country }</h3>
    </div>
  );
};


export default Profile;
