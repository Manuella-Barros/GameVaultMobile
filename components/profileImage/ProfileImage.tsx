import React from 'react';
import {Image} from "native-base";
import {ImageSourcePropType} from "react-native";

interface IUserProfileImageProps {
    userProfileImage: ImageSourcePropType
}

function ProfileImage({userProfileImage}: IUserProfileImageProps) {
    return (
        <Image source={userProfileImage} width={16} height={16} borderRadius={50} alt={"Profile Image"}/>
    );
}

export default ProfileImage;