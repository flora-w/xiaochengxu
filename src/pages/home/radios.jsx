import React from 'react'
import { Radio } from 'antd'


const Radios = (props) => {
    const renderRadios = (n) => {
        return isNaN(n) ? null : Array.from({ length: n }, (_, ind) => <Radio
            key= {ind + 1}
            value= {ind + 1}
            disabled={props.disabled}
            // defaultValue='1'
        >{ind + 1}分</Radio>)
    }

    // const ppst=[3,5,5]

    
    return (
        <Radio.Group
            onChange={props.onChange}
            name={props.name}
        //  value={props.Value}
        // defaultValue={ppst.map}
        // defaultValue={[3,5,5].map()}
        // defaultValue={localStorage.map() }
        defaultValue={1}
        >
            {renderRadios(props.n)}
        </Radio.Group>
    )

}


export default Radios




















