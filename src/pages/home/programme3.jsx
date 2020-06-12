import React, { Component, Fragment } from 'react'
import { Button,  Input } from 'antd'
import top from './../../public/assets/sys_imgs/top.jpg';
// import { isAbsolute } from 'path';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { actionCreators } from "./store";
import { connect } from 'react-redux';
import Radios from './radios'



const { TextArea } = Input;
class ProgrammeThird extends Component {

    componentDidMount() {
        this.props.getPageData();

    }

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
        const { teamData, subject2, testdes7, testdes8,
            testdes9, projectname4, testiem4, ProgrammeDataThird, isAuthority, submitThree
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
                        <Link to='/programme4'
                            onClick={() => submitThree(this.state.selectItems)}

                        > 下 一頁    </Link>
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
                        <Link to='/programme2'>  上一頁    </Link>
                    </Button>
                </header>
                <div style={{ marginLeft: '5vw' }}>
                    得分要點：<br />
                    系統操作熟練度;&nbsp;&nbsp;&nbsp;步驟講解正確性;<br />
                    找到主要問題點;&nbsp;&nbsp;&nbsp;找到對應負責團隊;<br />
                    提供有效解決方案
               </div>
                <div style={{ marginLeft: '6vw', marginTop: '1vw' }}>
                    <div  >{subject2}： </div>
                    <div style={{ marginLeft: '6vw', marginTop: '1vw' }}> 第三題：{projectname4} </div>
                    <div style={{ marginLeft: '6vw', marginTop: '1vw' }}>{testiem4}  </div>

                    <ul>
                        {
                            ProgrammeDataThird.map((v, k) => (
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

        teamData, subject2, testdes7, testdes8,
        testdes9, projectname4, testiem4, ProgrammeDataThird, isAuthority, submitThree
    } = state.homeReducer;
    // console.log(state.homeReducer);
    return {
        teamData, subject2, testdes7, testdes8,
        testdes9, projectname4, testiem4, ProgrammeDataThird, isAuthority, submitThree
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPageData() {
            dispatch(actionCreators.getPageDataProgramme3())
        },
        submitThree(data) {
            // console.log(data)
            dispatch(actionCreators.submitThree(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((withRouter)(ProgrammeThird))

//const n =100;
// const renderRadios =Array.from({length:n},()=><Radio/>)


