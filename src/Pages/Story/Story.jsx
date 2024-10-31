import React, { useEffect } from 'react';
import StoryViewer from '../../Component/StoryComponents/StoryViewer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findStoryByUserId } from '../../Redux/Story/Action';

const Story = () => {
    const { userId } = useParams();
    const jwt = localStorage.getItem("token");
    const dispatch = useDispatch();
    const { story } = useSelector(store => store);


    useEffect(() => {
        const data = {
            jwt, userId
        };
        dispatch(findStoryByUserId(data));
    }, [userId, dispatch]);

    return (
        <div>
            {story.stories?.length > 0 ? (
                <StoryViewer stories={story.stories} />
            ) : (
                <p>No stories available</p> // Hiển thị thông báo nếu không có story
            )}
        </div>
    );
};

export default Story;
