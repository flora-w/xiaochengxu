import React, { Component, Fragment } from 'react'
import { Button,  Input } from 'antd'
import top from './../../public/assets/sys_imgs/top.jpg';
// import { isAbsolute } from 'path';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { actionCreators } from "./store";
import { connect } from 'react-redux';
const { TextArea } = Input;



class ProgrammeScore extends Component {
    //     componentDidMount() {
    //         this.props.getPageData();
    //   }

    // constructor() {
    //     super();
    //     this.state = {
    //         itemStyle: { textAlign: 'left', marginLeft: '19vw' }
    //     }
    // }


    render() {
        const { teamData, testFirstDataSource, testSecondDataSource, testThirdDataSource, testForthDataSource,
            testFifthDataSource2, testFifthDataSource3, testFifthDataSource1, testFifthDataSource,
            testFirstData, testSecondData, testThirdData, testForthData, testFifthData,lengthData,
            subData,submitSure
            // submitSure
        } = this.props;
            // --------
        const totalSource = [Number(testFirstDataSource) + Number(testSecondDataSource) + Number(testThirdDataSource) + Number(testForthDataSource) + Number(testFifthDataSource)]
        // console.log(totalSource)//

        const Array1= testFirstData.concat(testSecondData,testThirdData,testForthData,testFifthData);
        // console.log(Array1)
        const s = subData.key;
        // console.log(s)
        var arr = Array.from({length:lengthData}, (v,k) => k+1+s*1000);
        // console.log(arr)
        let newArr=arr.map((v)=>{
            let TESTID = v;
            return {TESTID:v}
            })
            // console.log(newArr)//根據題目數生成的數組
            // console.log(Array1)//題目分數數組
            // 
            // Array1合成後台需要的數組
            // -------
            let Array2= Array1.map((obj)=>{
                return [obj.ACTUALSCORE]
            })
                // console.log(Array2)
                
               Array2.map((v,k)=>{
                    v.push('JOSJOJOFSOIW')
                    return Array2
                })    
                // console.log(Array2)
                // const s = subData.key;
                // console.log(s)
                Array2.map((v,k)=>{
                v.unshift(k+1+s*1000)
                })
                // console.log(Array2)
                // 
                Array2.map((v,k)=>{
                    v.unshift(s)
                    })   
                    // console.log(Array2)   
                    Array2.map((v,k)=>{
                        v.unshift(teamData)
                        })     
                    // console.log(Array2)       
                    Array2.map((v,k)=>{
                        v.unshift( sessionStorage.EXAMINERID)
                        })     
                    // console.log(Array2)  /      
                    const sourceData=   Array2 ;




            // 
                // ----------

            // 比較不同，提醒是否有未評分的題目
            var result = [];
            for (var i = 0; i < newArr.length; i++) {
                var obj = newArr[i];
                var num = obj.TESTID;
                var flag = false;
                for (var j = 0; j < Array1.length; j++) {
                    var aj = Array1[j];
                    var n = aj.TESTID;
                    if (n == num) {
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    result.push(obj);
                }
            }
            // console.log(result);

            let newArr12=result.map(obj=>{
                return obj.TESTID
                })
                // console.log(newArr12)/
                if(result.length == 0 ){
                    alert('已全部評分，請確認')
                }else {
                    alert(newArr12.join(",")+'未評分');
                }
             
            // console.log(result.TESTID+'未評分')

            // ----------

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
                </header>
                <div style={{ marginLeft: '16vw', marginTop: '5vw', fortSize: '4vw' }}>
                    <b>系統操作題：<br /> </b>
                    <b> 第一題：得分：{testFirstDataSource}  <br /> </b>
                    <b>第二題：得分： {testSecondDataSource}   <br /> </b>
                    <b>第三題：得分： {testThirdDataSource}   <br /> </b>
                    <b>第四題：得分： {testForthDataSource}   <br /> </b>
                    <b>理論題：<br />   </b>
                    <b>  第一題：得分： {testFifthDataSource1}   <br /> </b>
                    <b> 第二題：得分： {testFifthDataSource2}   <br /> </b>
                    <b>第三題：得分： {testFifthDataSource3}   <br /> </b>
                    <b>  總分：{totalSource} </b>
                </div>
                <Button style={{
                    backgroundColor: '#1890ff',
                    color:'white',
                    marginLeft: '25vw', marginRight: '15vw',
                    marginTop: '5vw'
                }}
                >
                    <Link
                         onClick={()=>submitSure(sourceData)}
                        to='/result'>
                        確認
                </Link>

                </Button>
                <Button style={{
                    backgroundColor: '#1890ff',
                    color:'white',
                    marginTop: '5vw'
                }}
                >
                    <Link to='/programme5/1'>
                        返回
                </Link>
                </Button>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const {
        teamData, testFirstDataSource, testSecondDataSource,
        testThirdDataSource, testForthDataSource,
        testFifthDataSource2, testFifthDataSource3, testFifthDataSource1, testFifthDataSource,
        testFirstData, testSecondData, testThirdData, testForthData, testFifthData,lengthData,
        subData


    } = state.homeReducer;
    // console.log(state.homeReducer);
    return {
        teamData, testFirstDataSource, testSecondDataSource, testThirdDataSource, testForthDataSource,
        testFifthDataSource2, testFifthDataSource3, testFifthDataSource1, testFifthDataSource,
        testFirstData, testSecondData, testThirdData, testForthData, testFifthData,lengthData,
        subData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPageData() {
            dispatch(actionCreators.getPageDataProgrammeScore())
        },
        submitSure(sourceData){
            dispatch(actionCreators.submitSure(sourceData))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)((withRouter)(ProgrammeScore))
