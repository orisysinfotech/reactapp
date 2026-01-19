import './App.css'
function header(){
    const dynamicHead = "Page Head";
    const styleCss = {
        fontSize:18,
        color:'green',
    }
    return(
        <>
            <h1 className='heading'>Header {dynamicHead}</h1>
            <h2 style={styleCss}>Header {dynamicHead}</h2>
        </>
    )
}

export default header
