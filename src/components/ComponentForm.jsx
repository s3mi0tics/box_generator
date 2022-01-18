import React, {useState} from 'react'

const Form = (props) => {

    const [color, setColor] = useState("")
    const [size, setSize] = useState("100px")

    const submitHandler = (e) =>{
        e.preventDefault();
        props.createBoxList({"color": color, "size": size})
        setColor("")
        setSize("100px")

    }

    return (
        <div >
            <form className="d-flex justify-content-center align-items-center"
            onSubmit = {submitHandler}
            >
                <label htmlFor="color">Color</label>
                <input className="form-control m-3" type="text" name="color" id= "color" value ={color}
                onChange ={ (e) => setColor(e.target.value)}
                />
                <label htmlFor="size">Size</label>
                <input className="form-control m-3" type="text" name="size" id="size" value = {size} 
                onChange = {(e)=> setSize(e.target.value)}
                />
                <button className="btn btn-secondary form-control m-3">Add Box</button>
            </form>
            
        </div>
    )
}

export default Form
