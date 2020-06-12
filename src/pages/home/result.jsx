import React, { Component, Fragment } from 'react'
import { Button,  Input } from 'antd'
import top from './../../public/assets/sys_imgs/top.jpg';
// import { isAbsolute } from 'path';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { actionCreators } from "./store";
import { connect } from 'react-redux';
const { TextArea } = Input;



class ProgrammeResult extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         itemStyle: { textAlign: 'left', marginLeft: '19vw' }
    //     }
    // }



    render() {
        const { teamData,
            // subject4,testdes14,
            // testdes15,testdes16,projectname6,testiem6, 
        } = this.props;
        return (
            <Fragment>
                <header
                // style={{
                //     backgroundRepeat: 'no-Repeat',
                //     backgroundSize: " 100% 100%",
                //     position: 'absolute',
                //     left: '0',
                //     right: '0',
                //     top: '0',
                //     bottom: '0',
                // }}
                >
                    <img src={top}
                        style={{
                            width: '20vw',
                            paddingTop: '2vw',
                            paddingLeft: '2vw'
                        }}
                    />
                    <div
                        style={{
                            textAlign: 'center',
                            fontSize: '5vw',
                            border: '1px solid',
                            width: '30vw',
                            marginLeft: '31%',
                        }}
                    >
                        {teamData}
                        {/* WKS_P5 */}
                    </div>
                </header>

                <div style=
                    {{ textAlign: 'center', marginTop: '20vw' }}>
                    {/* {data} */}
                    恭喜您提交成功
                    </div>
                <Button style={{
                    backgroundColor: '#1890ff', color:'white',
                    marginTop: '5vw', marginLeft: '60%'
                }}
                >
                    <Link to='/Seatform'>
                        返回主菜單
                </Link>
                </Button>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const {
        teamData,
        //   subject4,testdes14,
        //   testdes15,testdes16,projectname6,testiem6, 
    } = state.homeReducer;
    // console.log(state.homeReducer);
    return {
        teamData,
        //     subject4,testdes14,
        //   testdes15,testdes16,projectname6,testiem6, 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPageData() {
            dispatch(actionCreators.getPageDataProgrammeResult())
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)((withRouter)(ProgrammeResult))
// export default ProgrammeResult


//const n =100;
// const renderRadios =Array.from({length:n},()=><Radio/>)








