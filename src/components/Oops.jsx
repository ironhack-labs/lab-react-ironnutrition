import imageOps from "../assets/OpsImage.png"

function Oops() {
  return (
    <>
        <h1 style={{color:'black'}}>Oops! There is no more content to show.</h1>
        <img style={{transform: 'rotate(45deg'}}
            src= {imageOps}
            alt="Oops"
        />
        
    </>
  )
}

export default Oops