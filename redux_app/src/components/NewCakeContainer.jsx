import React,{useState} from 'react'
import { connect } from 'react-redux';
import { buyCake } from '../redux/index';


function NewCakeContainer(props) {
    const [number, setnumber] = useState()
    return (
        <div>
           <h1>Number of Cake - {props.numOfCakes}</h1>
           <input type="number" onChange={e=>setnumber(e.target.value)}></input>
           <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake:(number)=>dispatch(buyCake(number))
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(NewCakeContainer);