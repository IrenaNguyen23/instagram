import React from 'react'
import StoryViewer from '../../Component/StoryComponents/StoryViewer'

const Story = () => {
    const story =
        [
            {
                image: "https://cdn.pixabay.com/photo/2024/07/13/07/40/cars-8891625_640.jpg"
            },
            {
                image: "https://cdn.pixabay.com/photo/2024/07/12/08/05/venice-8889871_640.jpg"
            },
            {
                image: "https://cdn.pixabay.com/photo/2017/07/31/17/12/water-2559064_640.jpg"
            },
            {
                image: "https://cdn.pixabay.com/photo/2024/06/15/09/04/door-8831267_640.jpg"
            }
        ]
    return (
        <div>
            <StoryViewer stories={story} />
        </div>
    )
}

export default Story
