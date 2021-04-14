import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './../redux/cake/CakeAction';
import { buyIceCream } from './../redux/iceCream/IceCreamAcion';

function ItemContainer(props) {
    return (
        <div>
            <div>item-{props.item}</div>
            <button onClick={props.buyItem}>Click Me</button>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>{
    const itemState = ownProps.cake ?
     state.cake.numOfCakes : state.iceCream.numOfIceCream
     return {
         item:itemState
     }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    const dispatchFunction = ownProps.cake 
    ?()=>dispatch(buyCake())
    :()=>dispatch(buyIceCream())
    return {
        buyItem:dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
