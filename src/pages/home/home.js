import React, { Fragment, Component } from 'react';
import { actionCreators } from "./store";
import { connect } from 'react-redux';
import { Button } from 'antd';
// import { logo } from '../../assets/sys_imgs/wistron-logo.jpg'
import logo from './../../public/assets/sys_imgs/home1.png';
import button from './../../public/assets/sys_imgs/button.png'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
// import { Search_top, Content_center } from './style';
import Upload from './../../common/upload/index'
import { link } from 'fs';
import "../home/style.less"

class Home extends Component {
    constructor() {
        super();
        this.state = {
            homeRef: ''
        }
    }
    // componentDidMount() {
    //     this.props.getPageData();   
    // }
    onChange = (value) => {
        // console.log(value)
    }
    onBlur = () => {
        // console.log('blur');
    }
    onFocus = () => {
        // console.log('focus');
    }
    handleChange = (value) => {
        // console.log(e.target.value);
        // console.log(value)
    }

    handleSth = () => {
        if (window.navigator.userAgent.toLowerCase().includes('iPhone')) {
            this.state.homeRef.scroll(0, 0);
        }
    }

    render() {
        const { onInput, login, isAuthority, pictureSearch, //
            pictureData, loginData } = this.props;
        return (
            <Fragment>
                <div
                    className='first'
                    style={{
                        backgroundImage: "url(" + require("../../public/assets/sys_imgs/123.png") + ") ",
                        backgroundRepeat: 'no-Repeat', 
                        backgroundSize:" 100%   ",
                        position:'absolute',
                        left:'0',
                        right:'0',
                        top:'0',
                        bottom:'0',
                    }}
                    ref={el => this.homeRef = el}
                >
                        <div style={{position:'absolute',top:'76%',left:'50%', transform: 'translate(-50%, -50%)'}}> 
                    <div className='name' style={{
                        //  textAlign: 'center', 
                         marginTop: '8vw',width:'65vw' }}>
                        <span className='fontS'
                            style={{ fontSize: '4vw', marginRight: '2vw' }}>
                               工號
                            </span>
                        <input
                            placeholder='請輸入工號'
                            style={{
                                textAlign : 'center',
                                // borderRadius: '2vw',
                                 width: '50vw',
                                // height: ' 10vw ',
                                border:'0',
                                borderBottom:'1px solid'
                            }}
                            id='one_input'
                            onChange={(e) => onInput(e.target.value)}
                            onBlur={this.handleSth.bind(this)}
                        />
                    </div>

                    <Button
                        style={{
                            type:"primary",
                            display: 'block',
                            margin: 'auto',
                            marginTop: '10vw',
                            // color: '#8c001d',
                            borderRadius: '5vw',
                             width: '35vw',
                            height: ' 10vw ',
                            fontSize:'4vw'
                        }}
                        // href='/'
                        id='btn_register'
                        className="button"
                        type="primary"
                        size="small"
                        onClick={() => login(this.handleSth)}
                    >  登 &ensp; 陸
                    </Button>
                    </div>
                </div>
            </Fragment>
        )
    }
    componentWillMount() {
        // this.props.changeAuth();
    }
}
const mapStateToProps = (state) => {
    const {
        isAuthority,
        onInput,
        // pictureSearch,
        loginData
    } = state.homeReducer;
    // console.log(state.homeReducer);
    return {
        isAuthority,
        onInput,
        // pictureSearch,
        loginData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // 三元運算符，將兩個頁面合為一個
        changeAuth() {
            dispatch(actionCreators.isAuthority(false))
        },
        // input
        onInput(value) {
            // console.log(value)
            dispatch(actionCreators.onInput(value))
        },
        // login button
        login(fn) {
            fn();
            dispatch(actionCreators.login())
        },
    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)((withRouter)(Home))






