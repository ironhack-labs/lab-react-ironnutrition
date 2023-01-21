import { useState } from "react";

function NoContent(props) {

    // const [content, setShowContent] = useState(true)

    // function handleContent() {

    // }

    const noContentSection = (
        <>
            <div>
                <p><b>Opps! There is no more content to Show!</b></p>
                <img src="https://cdn-icons-png.flaticon.com/512/5058/5058385.png" alt="EndContent"/>
            </div>
        </>

    )

    return (
        <div>
            {props.food.length > 0 ? props.children : noContentSection}
        </div>
    )
}


export default NoContent;