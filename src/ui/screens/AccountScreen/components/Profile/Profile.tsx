import { UserEntity } from "../../../../../domain/entities";
import { Button } from "../../../../components";
import {
  StyledContainerButton,
  StyledContainerProfile,
  StyledImageProfile,
  StyledLabel,
  StyledValue,
} from "./Profile.styles";
// import profileImage from "../../../../assets/images/profileImage.jpeg"

interface ProfileProps {
  user: UserEntity;
  handleLogout: () => void;
}

export function Profile({ user, handleLogout }: ProfileProps) {
  return (
    <StyledContainerProfile>
      <StyledImageProfile
        source={require("../../../../assets/images/profileImage.jpeg")}
      />
      <StyledLabel>Name</StyledLabel>
      <StyledValue>{`${user.name} ${user.lastName}`}</StyledValue>

      <StyledLabel>Username</StyledLabel>
      <StyledValue>{user.name}</StyledValue>

      <StyledLabel>Email</StyledLabel>
      <StyledValue>{user.email}</StyledValue>

      <StyledLabel>Favoritos</StyledLabel>
      <StyledValue>Ninguno</StyledValue>

      <StyledContainerButton>
        <Button title="Logout" onPress={handleLogout} />
      </StyledContainerButton>
    </StyledContainerProfile>
  );
}
