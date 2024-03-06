import React, {useEffect, useState} from 'react';
import { VStack} from "native-base";
import Comment from "../comment/Comment";
import {getGameComments, IGetGameCommentsReturn} from "../../../../api/GET/getGameComments";

interface ICommentsContainerProps {
    gameID: number
}

function CommentsContainer({gameID}: ICommentsContainerProps) {
    const [comments, setComments] = useState<IGetGameCommentsReturn[] | null>(null)

    useEffect(() => {
        getGameComments(gameID).then(res => setComments(res))
    }, [gameID]);

    return (
        <VStack py={3} space={4}>

            {
                comments && comments.map(comment => <Comment {...comment}/>)
            }
        </VStack>
    );
}

export default CommentsContainer;