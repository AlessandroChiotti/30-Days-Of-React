import { userCardStyle } from "../../styles/user-card";

const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} style={userCardStyle} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

export default UserCard;
