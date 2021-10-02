import React from "react";
import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo: "https://cl.ly/55da82beb939/download/avatar-default.jpg",
  };
  componentDidMount() {
    const imageUrl =
      "https://pbs.twimg.com/profile_images/1273709517574979585/Ik-TJtNx_400x400.jpg";
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((imageBlob) => {
        // Then create a local URL for that image and print it
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log(imageObjectURL);
        this.setState({ photo: imageObjectURL });
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;
