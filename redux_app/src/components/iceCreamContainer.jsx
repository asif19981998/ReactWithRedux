import React from 'react'
import { connect } from 'react-redux';
import { buyIceCream } from './../redux/iceCream/IceCreamAcion';


function IceCreamContainer(props) {
    return (
        <div>
           <h1>Number of IceCream - {props.numOfIceCream}</h1>
           <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        numOfIceCream:state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyIceCream:()=>dispatch(buyIceCream())
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(IceCreamContainer);