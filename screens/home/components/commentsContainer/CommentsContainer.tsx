import React from 'react';
import { VStack} from "native-base";
import Comment from "../comment/Comment";

function CommentsContainer() {
    return (
        <VStack py={3} space={4}>
            <Comment/>
            <Comment/>
        </VStack>
    );
}

export default CommentsContainer;