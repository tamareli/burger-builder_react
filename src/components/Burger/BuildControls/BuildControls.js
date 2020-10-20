import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'


const buildControls = (props) => {

    const controls = [
        {label:'Salad', type:'salad'},
        {label:'Cheese', type:'cheese'},
        {label:'Meat', type:'meat'},
        {label:'Bacon', type:'bacon'}

    ];
    console.log(props.purchaseable);
    return (
        <div className = {classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            { controls.map( ctrl => 
                (
                <BuildControl
                 key={ctrl.label}
                 label={ctrl.label}
                 added={()=> props.addIngredient(ctrl.type) }
                 removed={()=> props.removeIngredient(ctrl.type)}
                 disable={props.disabled[ctrl.type]}
                 />))}
                 <button 
                 className={classes.OrderButton} 
                 disabled={!props.purchaseable}
                 onClick={props.ordered}
                 >ORDER NOW</button>
        </div>
    )
}
export default buildControls;