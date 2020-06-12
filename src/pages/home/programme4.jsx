import React, { Component, Fragment } from 'react'
import { Button, Input } from 'antd'
import top from './../../public/assets/sys_imgs/top.jpg';
// import { isAbsolute } from 'path';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { actionCreators } from "./store";
import { connect } from 'react-redux';
import Radios from './radios'

const { TextArea } = Input;
class ProgrammeForth extends Component {
    componentDidMount() {
        this.props.getPageData();
    }
    // constructor() {
    //     super();
    //     this.state = {
    //         itemStyle: { textAlign: 'left', marginLeft: '19vw' }
    //     }
    // }

    state = {
        value: 1,
        selectItems: []
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
        const { teamData, subject3, testdes10, testdes11,
            testdes12, testdes13, projectname5, testiem5, ProgrammeDataForth, isAuthority, submitFour
        } = this.props;

        return (
            <Fragment>
                <header >
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
                    <Button
                        style={{
                            backgroundColor: '#1890ff',
                            color:'white',
                            position: 'absolute',
                            top: '3vw',
                            right: '3vw'
                        }}
                    >
                        <Link to='/programme5/1'
                            onClick={() => submitFour(this.state.selectItems)}
                        >下一頁    </Link>
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
                        <Link to='/programme3'> 上 一頁    </Link>
                    </Button>
                </header>
                <div style={{ marginLeft: '5vw' }}>
                    得分要點：<br />
                    系統操作熟練度;&nbsp;&nbsp;&nbsp;步驟講解正確性;<br />
                    找到主要問題點;&nbsp;&nbsp;&nbsp;找到對應負責團隊;<br />
                    提供有效解決方案
               </div>
                <div style={{ marginLeft: '6vw', marginTop: '1vw' }}>
                    <div  >{subject3}： </div>
                    <div style={{ marginLeft: '6vw', marginTop: '1vw' }}> 第三題：{projectname5} </div>
                    <div style={{ marginLeft: '6vw', marginTop: '1vw' }}>{testiem5}  </div>

                    <ul>
                        {
                            ProgrammeDataForth.map((v, k) => (
                                <li id={v.testid} key={k + 1} style={{ marginLeft: '3vw', marginTop: '1vw' }}>
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
                    <TextArea rows={3}
                        placeholder="備註"
                        style={{
                            width: '90%', margin: '5vw'
                        }} />
                </div>

            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    const {
        teamData, subject3, testdes10, testdes11,
        testdes12, testdes13, projectname5, testiem5,
        ProgrammeDataForth, isAuthority, submitFour
    } = state.homeReducer;
    // console.log(state.homeReducer);
    return {
        teamData, subject3, testdes10, testdes11,
        testdes12, testdes13, projectname5, testiem5, ProgrammeDataForth, isAuthority, submitFour
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPageData() {
            dispatch(actionCreators.getPageDataProgramme4())
        },
        submitFour(data) {
            // console.log(data)
            dispatch(actionCreators.submitFour(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)((withRouter)(ProgrammeForth))





