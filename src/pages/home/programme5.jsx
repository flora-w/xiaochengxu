import React, { Component, Fragment } from 'react'
import { Button,  } from 'antd'
import top from './../../public/assets/sys_imgs/top.jpg';
// import { isAbsolute } from 'path';
import {  Link,  withRouter } from 'react-router-dom';
import { actionCreators } from "./store";
import { connect } from 'react-redux';
import Radios from './radios'


class ProgrammeFifth extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        this.props.getPageData(id);
    }
    state = {
        value: 1,
        selectItems: [],
    }
    onChange = (e) => {
        // console.log(e.target.name)
        // console.log('radio checked', e.target.value, e.target.name);
        this.setState({
            value: e.target.value,
        });
        // console.log(e.target.value)
        const { selectItems } = this.state;
        const id = Number(e.target.name);
        const obj = { ACTUALSCORE: e.target.value, TESTID: id }
        const index = selectItems.findIndex(obj => obj.TESTID === id)
        // console.log("index:" + index)
        if (index >= 0) {
            selectItems[index] = obj
        } else {
            selectItems.push(obj)
        }
        // console.log(selectItems)
    };

    render() {
        const { teamData, subject4, 
           projectname6, testiem6, ProgrammeDataFifth, isAuthority, submitFive,
        //    Programme5Data
        } = this.props;
        // console.log(ProgrammeDataFifth )
        // console.log(Programme5Data )
        return (
            <Fragment>
                <header  >
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
                        {/* WKS_P5 */}
                        {teamData}
                    </div>
                    <Button
                        style={{
                            backgroundColor: '#1890ff',
                            color:'white',
                            position: 'absolute',
                            top: '3vw',
                            right: '3vw'
                        }}
                    >

                    {  this.props.isAuthority? 
                    <Link  to='/Seatform' >返回主菜单</Link>
                    
                       : <Link to='/score'
                            onClick={() => submitFive(this.state.selectItems)}
                        > 提交    </Link>

                    }
                    </Button>
                    <Button
                        style={{
                            backgroundColor: '#1890ff',
                            color:'white',
                            position: 'absolute',
                            top: '13vw',
                            right: '3vw'
                        }}
                    >
                        <Link to='/programme4'>  上一頁  </Link>
                    </Button>
                </header>
                <div style={{ marginLeft: '5vw' }}>
                    得分要點：<br />
                    系統操作熟練度;&nbsp;&nbsp;&nbsp;步驟講解正確性;<br />
                    找到主要問題點;&nbsp;&nbsp;&nbsp;找到對應負責團隊;<br />
                    提供有效解決方案
               </div>
                <div style={{ marginLeft: '6vw', marginTop: '1vw' }}>
                    <div  >{subject4}： </div>
                    <div style={{ marginLeft: '6vw', marginTop: '1vw' }}> 第三題：{projectname6} </div>
                    {/* <div style={{ marginLeft: '6vw', marginTop: '1vw' }}>{testiem6}  </div> */}

                    <ul>
                        {
                            ProgrammeDataFifth.map((v, k) => (
                                <li id={v.testid} key={k + 1} style={{ marginLeft: '3vw', marginTop: '1vw' }}>
                                    {v.testitem}<br/>
                                    {v.testdes}<br />
                                    <Radios
                                        name={v.testid}
                                        key={k}
                                        onChange={this.onChange}
                                        Value={this.state.value}
                                        n={v.standardscore}
                                        disabled={isAuthority}
                                    ></Radios>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    const {
        teamData, subject4, testdes14,
        testdes15, testdes16, projectname6, testiem6,
        ProgrammeDataFifth, isAuthority, submitFive,   
        //  Programme5DataProgramme5Data
    } = state.homeReducer;
    // console.log(state.homeReducer);
    return {
        teamData, subject4, testdes14,
        testdes15, testdes16, projectname6, testiem6, ProgrammeDataFifth, isAuthority,
        submitFive,  
        //   Programme5Data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPageData(id) {
            if(id>=1){
                dispatch(actionCreators.getPageDataProgramme5())
            }
            
        },
        submitFive(data) {
            // console.log(data)
            dispatch(actionCreators.submitFive(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)((withRouter)(ProgrammeFifth))
