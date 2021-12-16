import styled from "styled-components";

type Props = {
  /**
   * An accessible title (`alt`) for an image.
   */
  name: string;

  /**
   * An image source (`src`).
   */
  picture: string;
};

/**
 * The outermost container for an avatar.
 */
const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

/**
 * An image target for an avatar.
 */
const AvatarImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
`;

/**
 *
 *
 * @param {Props} { name, picture }
 * @return {*}
 */
const Avatar = ({ name, picture }: Props) => {
  return (
    <AvatarContainer>
      <AvatarImage src={picture} alt={name} />
      {/* <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} /> */}
    </AvatarContainer>
  );
};

export default Avatar;
