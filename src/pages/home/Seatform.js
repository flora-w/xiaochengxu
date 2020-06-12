import React, { Component, Fragment } from 'react'
// import { CssGlobal } from './GlobalStyled'
import '../../../node_modules/antd/dist/antd.css'
// import { Button } from 'antd'
import { BrowserRouter as Router, Route,Link,  Redirect, withRouter } from 'react-router-dom';
import { actionCreators } from "./store";
import { connect } from 'react-redux';
// import logo from './../../public/assets/sys_imgs/home1.png';
import horn from './../../public/assets/sys_imgs/horn.png';
import top from './../../public/assets/sys_imgs/top.jpg';

class SeatForm extends Component {
    componentDidMount() {
        this.props.getPageData();
    }
    render() {
        const { seatData ,firstData,secondData,thirdData,
            forthData,fifthData,firstKey,secondKey,thirdKey,
            forthKey,fifthKey,
            submitButton,submitSecond, submitThird, submitForth, submitFifth
        } = this.props;
        // const seatData = localStorage.setItem(data)
        return (
            <Fragment>
                <div
                    className='seatForm'
                    style={{
                        backgroundColor:"#ffffff",
                    }}
                >
                        <img src={top} 
                            style={{ 
                                width: '20vw',
                                paddingTop: '2vw',
                                paddingLeft: '2vw'
                            }}
                            />
                    <h1  
                    style={{textAlign:'center',color:'black',marginTop:'4vw',fontSize:'7vw',
                    backgroundColor:'#1890ff',width:'88%',margin:'10px auto',
                    color:'#ffffff'
                    }}>
                    第二屆數位運營管理競賽
                     </h1>

                     {/* 隊伍題目 */}
                     <div  
                       style={{
                        textAlign:'center',
                        color:'black',
                        margin:'0 auto',
                        width:'60%',
                        fontSize:'4vw',
                    }}
                     >
                     {/* <Link to='/menu'>  */}
                         <div style={{marginBottom:'5vw',border:'1px solid '}}
                         onClick={()=>submitButton({firstData,firstKey})}
                         >
                         第一隊：<br/>
                         <Link to='/programme1'   > 
                          {/* WKS_P5 */}
                          {firstData}&nbsp;
                           </Link>第一套 
                          </div>
                          <div style={{marginBottom:'5vw',border:'1px solid '}}
                           onClick={()=>submitSecond({secondData,secondKey})}
                          >第二隊：<br/>
                          <Link to='/programme1' > 
                           {/* WKS_P3  */}
                           {secondData}&nbsp;
                             </Link>第二套
                          </div>
                          <div style={{marginBottom:'5vw',border:'1px solid '}}
                          onClick={()=>submitThird({thirdData,thirdKey})}
                          >第三隊：<br/>
                          <Link to='/programme1' > 
                          {thirdData}&nbsp;
                           {/* WKS_P1  */}
                              </Link>第三套
                          </div>
                          <div style={{marginBottom:'5vw',border:'1px solid '}}
                          onClick={()=>submitForth({forthData,forthKey})}
                          >第四隊：<br/>
                         <Link to='/programme1' >  
                         {/* WKS_P8   */}
                         { forthData}&nbsp;
                          </Link>第四套 
                          </div>
                          <div style={{border:'1px solid '}}
                          onClick={()=>submitFifth({fifthData,fifthKey})}
                          >第五隊：<br/>
                         <Link to='/programme1' > 
                           {/* WOK     */}
                           {fifthData}&nbsp;
                            </Link>第五套 
                          </div>
                    </div>           
                     {/* ----------------- */}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { seatData ,firstData,firstKey,secondData,secondKey,thirdData,thirdKey,
        forthKey,fifthKey,
        forthData,fifthData} = state.homeReducer;
    // console.log(state.homeReducer);
    return {
        seatData,
        firstData,firstKey,
        secondData,secondKey,
        thirdData,thirdKey,
        forthData,forthKey,
        fifthData,fifthKey
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        getPageData() {
            // console.log(111)
            dispatch(actionCreators.getPageDataSeatForm())
        },
        // ------------
        submitButton(data){
            // console.log(data)
            dispatch(actionCreators.submitButton(data))
        },
        // submitSecond    submitThird submitForth submitFifth
        submitSecond(data){
            // console.log(data)
            dispatch(actionCreators.submitSecond(data))
        },
        submitThird(data){
            // console.log(data)
            dispatch(actionCreators.submitThird(data))
        },
        submitForth(data){
            // console.log(data)
            dispatch(actionCreators.submitForth(data))
        },
        submitFifth(data){
            // console.log(data)
            dispatch(actionCreators.submitFifth(data))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)((withRouter)(SeatForm))