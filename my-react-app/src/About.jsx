function aboutUs(){

    const btnClick = ()=> alert('Button was Clicked')
    const mouseOver = ()=> alert('Mouse over effected')
    return(
        <>
            <h1>About Us Page</h1>
            <button onClick={btnClick} className="btn btn-success">Clik me</button>
            {/* <p onMouseOver={mouseOver}>This is a MouseOver Paragraph</p> */}
        </>
    )
}

export default aboutUs
