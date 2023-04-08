import empty from "../Empty_set_symbol.svg.png"

function noContent() {
    return (
        <>
            <h2>Oops! There is no more content to show.</h2>

            <img src={empty} alt="" width={200}/>
        </>
    )
}

export default noContent;