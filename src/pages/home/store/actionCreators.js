import axios from "../../../axios";
import * as actionTypes from './actionTypes';
import { message } from "antd";
// import { Route,Link} from 'react-router-dom';
import {LOGIN_LOGIN,ADMINMULTI_UPLOAD,SEARCHTOTAL, SEARCH_SEARCHONE,ADMIN_MULTIUPLOAD  } from '../../../config/api'
import {baseURL} from '../../../axios/baseURL'
import newaxios from 'axios'
import Seatform from "../Seatform";

// * 封裝請求
//  */
const ajax = (url, method, data) => {
    return new Promise((resolve, reject) => {
        axios[method]({ url, data, })
            .then((res, dispatch) => {
                if (res.code === 1) {
                    resolve(res.data);
                } else {
                    reject(res.message)
                    if (res.message === '您沒有權限查看!');
                }
            })
            .catch(err => {
                reject('出現錯誤');
            })
    })
}
// 錯誤類型   
const errorMessage = (err) => {
    if (err.message) {
        // message.error(err.message);
        console.log(err)
    } else {
        message.error(err);
    }
}

// --------登錄頁面--------------
//   獲取input數據
export const onInput =(data)=>{
    // console.log(data)
    return {
      type:actionTypes.ONINPUT,
      data
    }
  }


export const login=(data)=>{
    return (dispatch,getState)=>{
        // console.log(getState());
        const EXAMINERID = getState().homeReducer.inputData;
        // console.log(EXAMINERID);
         const URL = 'http://wksworkshop.wistron.com/Samplingservice.ashx'
         const STEP ='LOADEXAMINERINFO'
         axios.post({url:URL,data:{method:'ProcessRequest',EXAMINERID:EXAMINERID,STEP:STEP}})
         .then(data=>{
            //  console.log(data[0].GRADE)
             const code = data[0].GRADE;
            if(code===1){
                //可評分      
                window.location.replace('#/Seatform');
                // console.log(data);
                dispatch(isAuthority(false));
                // console.log(loginTD(data.data[0].Value));
                sessionStorage.setItem('isAuthority', false);
                sessionStorage.setItem('EXAMINERID', EXAMINERID);  
                sessionStorage.setItem('seatData', data.data[0].Value);     
                // console.log(sessionStorage)
                // localStorage.setItem(User_ID,data.data[0].Value)
                // console.log(localStorage.setItem(User_ID,data.data[0].Value))
                window.location.replace('#/Seatform');
            }else  if(code===0){
                // 僅供view
                dispatch(isAuthority(true))
                sessionStorage.setItem('isAuthority', true);  
                window.location.replace('#/Seatform');
            } else{
                // window.location.replace('#/Seatform');
                message.warning('您沒有權限');
            }
        })
        .catch(err=>{
            // message.info('請求數據時錯誤123')
          })
    }
}

export const loginTD = (data) =>{
    // console.log(data)
    return {
        type:actionTypes.LOGIN_TD,
        data
    }
}
export const isAuthority = (bool) => {
    // console.log(bool);
    return {
      type: actionTypes.IS_AUTH,
      bool
    }
  }

// getPageDataSeatForm ---------
// 獲取相應的隊伍以及題目

export const SeatformData = (data) =>{
    // console.log(data)
    return {
        type:actionTypes.SEATFORM_DATA,
        data
    }
}
export const getPageDataSeatForm =()=>{
    // console.log(123)
    return dispatch =>{
        axios.post({url:'http://wksworkshop.wistron.com/Samplingservice.ashx',data:{method:'ProcessRequest',STEP: 'LOADBASE'},})
        .then(data=>{
            // console.log(data)
            // console.log(data[0].teamid)
            dispatch(SeatformData(data))
        })
        .catch(err=>{
            message.info('頁面請求數據出錯')
        })
    }
}

//  submitSecond    submitThird submitForth submitFifth
export const submitButton=(data)=>{
    // console.log(data)
    return {
        type:actionTypes.SUBMIT_BUTTON,
        data
    }
}
// SUBMIT_SECOND  SUBMIT_THIRD SUBMIT_FORTH SUBMIT_FIFTH
export const submitSecond=(data)=>{
    // console.log(data)
    return {
        type:actionTypes.SUBMIT_SECOND,
        data
    }
}
export const submitThird=(data)=>{
    // console.log(data)
    return {
        type:actionTypes.SUBMIT_THIRD,
        data
    }
}
export const submitForth=(data)=>{
    // console.log(data)
    return {
        type:actionTypes.SUBMIT_FORTH,
        data
    }
}
export const submitFifth=(data)=>{
    // console.log(data)
    return {
        type:actionTypes.SUBMIT_FIFTH,
        data
    }
}
// ---------------



// getPageDataProgramme1
    export const Programme1Data =(data)=>{
        // console.log(data)
        return {
            type:actionTypes.PROGRAMME_DATA,
            data
        }
    }
    // all題目
    export const testAllData=(data)=>{
        // console.log(data)
        return {
            type:actionTypes.TESTALL_DATA,
            data
        }
    }


export const getPageDataProgramme1 =()=>{
    return (dispatch,getState) =>{
        // console.log(getState())
        const X = getState().homeReducer.subData.key;
        // console.log(X)
        axios.post({url:'http://wksworkshop.wistron.com/Samplingservice.ashx',
            data:{method:'ProcessRequest', TESTNO:X,STEP: 'LOADTESTINFOBYTESTNO'} })
            .then(res=>{
                // console.log(res)
                dispatch(testAllData(res))
// 
const projectnames = []
const newArr = res.reduce((prev, current) => {
    // debugger
    const cprojectname = current.projectname
    if (!projectnames.length) {
        prev[0] = [current]
        projectnames.push(cprojectname)
    }else{
        const index = projectnames.indexOf(cprojectname)
        if (index !== -1) {
            prev[index].push(current)
        }else{
            prev = [...prev, [current]]
            projectnames.push(cprojectname)
        }
    }
    return prev
}, [[]])
// console.log(newArr)
// console.log(projectnames)
                dispatch( Programme1Data(newArr[0]))
            })
            .catch(err=>{
                message.info('頁面獲取數據出錯')
            })
    }
}

// ---------
// getPageDataProgramme2
export const Programme2Data =(data)=>{
    // console.log(data)
    return {
        type:actionTypes.PROGRAMMESECOND_DATA,
        data
    }
}
export const getPageDataProgramme2 =()=>{
return (dispatch,getState) =>{
    // console.log(getState())
    const X = getState().homeReducer.subData.key;
    // console.log(X)
    axios.post({url:'http://wksworkshop.wistron.com/Samplingservice.ashx',
        data:{method:'ProcessRequest', TESTNO:X,STEP: 'LOADTESTINFOBYTESTNO'} })
        .then(res=>{
            // console.log(res)
            const projectnames = []
const newArr = res.reduce((prev, current) => {
    // debugger
    const cprojectname = current.projectname
    if (!projectnames.length) {
        prev[0] = [current]
        projectnames.push(cprojectname)
    }else{
        const index = projectnames.indexOf(cprojectname)
        if (index !== -1) {
            prev[index].push(current)
        }else{
            prev = [...prev, [current]]
            projectnames.push(cprojectname)
        }
    }
            return prev
        }, [[]])
        // console.log(newArr)
        // console.log(newArr[1])
        // console.log(projectnames)
                dispatch(Programme2Data(newArr[1]))
                
        })
        .catch(err=>{
            message.info('頁面獲取數據出錯')
        })
}
}



// ---------------------------=========================
// getPageDataProgramme3
export const Programme3Data =(data)=>{
    // console.log(data)
    return {
        type:actionTypes.PROGRAMMETHIRD_DATA,
        data
    }
}
export const getPageDataProgramme3 =()=>{
return (dispatch,getState) =>{
    // console.log(getState())
    const X = getState().homeReducer.subData.key;
    // console.log(X)
    axios.post({url:'http://wksworkshop.wistron.com/Samplingservice.ashx',
        data:{method:'ProcessRequest', TESTNO:X,STEP: 'LOADTESTINFOBYTESTNO'} })
        .then(res=>{
            // console.log(res)
            const projectnames = []
            const newArr = res.reduce((prev, current) => {
                // debugger
                const cprojectname = current.projectname
                if (!projectnames.length) {
                    prev[0] = [current]
                    projectnames.push(cprojectname)
                }else{
                    const index = projectnames.indexOf(cprojectname)
                    if (index !== -1) {
                        prev[index].push(current)
                    }else{
                        prev = [...prev, [current]]
                        projectnames.push(cprojectname)
                    }
                }
                return prev
            }, [[]])
            // console.log(newArr)
            // console.log(projectnames)
                            dispatch( Programme3Data(newArr[2]))
        })
        .catch(err=>{
            message.info('頁面獲取數據出錯')
        })
}
}
// ---------
// getPageDataProgramme4
export const Programme4Data =(data)=>{
    // console.log(data)
    return {
        type:actionTypes.PROGRAMMEFORTH_DATA,
        data
    }
}
export const getPageDataProgramme4 =()=>{
return (dispatch,getState) =>{
    // console.log(getState())
    const X = getState().homeReducer.subData.key;
    // console.log(X)
    axios.post({url:'http://wksworkshop.wistron.com/Samplingservice.ashx',
        data:{method:'ProcessRequest', TESTNO:X,STEP: 'LOADTESTINFOBYTESTNO'} })
        .then(res=>{
            // console.log(res)
            const projectnames = []
            const newArr = res.reduce((prev, current) => {
                // debugger
                const cprojectname = current.projectname
                if (!projectnames.length) {
                    prev[0] = [current]
                    projectnames.push(cprojectname)
                }else{
                    const index = projectnames.indexOf(cprojectname)
                    if (index !== -1) {
                        prev[index].push(current)
                    }else{
                        prev = [...prev, [current]]
                        projectnames.push(cprojectname)
                    }
                }
                return prev
            }, [[]])
            // console.log(newArr)
            // console.log(projectnames)
                            dispatch( Programme4Data(newArr[3]))

        })
        .catch(err=>{
            message.info('頁面獲取數據出錯')
        })
}
}
// getPageDataProgramme5
export const Programme5Data =(data)=>{
    // console.log(data)
    return {
        type:actionTypes.PROGRAMMEFIFTH_DATA,
        data
    }
}
export const getPageDataProgramme5 =()=>{
return (dispatch,getState) =>{
    // console.log(getState())
    const X = getState().homeReducer.subData.key;
    // console.log(X)
    axios.post({url:'http://wksworkshop.wistron.com/Samplingservice.ashx',
        data:{method:'ProcessRequest', TESTNO:X,STEP: 'LOADTESTINFOBYTESTNO'} })
        .then(res=>{
            // console.log(res)
            const projectnames = []
            const newArr = res.reduce((prev, current) => {
                // debugger
                const cprojectname = current.projectname
                if (!projectnames.length) {
                    prev[0] = [current]
                    projectnames.push(cprojectname)
                }else{
                    const index = projectnames.indexOf(cprojectname)
                    if (index !== -1) {
                        prev[index].push(current)
                    }else{
                        prev = [...prev, [current]]
                        projectnames.push(cprojectname)
                    }
                }
                return prev
            }, [[]])
            // console.log(newArr)
            // console.log(projectnames)
                            dispatch( Programme5Data(newArr[4]))
        })
        .catch(err=>{
            message.info('頁面獲取數據出錯')
        })
}
}

// table
// data:{method:'ProcessRequest',STEP:LOADTESTRESULT}
export const PageDataTables=(data) =>{
//    console.log(data)
    return {
        type:actionTypes.PAGEDATA_TABLEDS,
        data
    }
}

    export const getPageDataTables =() =>{
        return (dispatch) =>{
    axios.get({url:'http://wksworkshop.wistron.com/Samplingservice.ashx',data:{method:'ProcessRequest',STEP:'LOADTESTRESULT'},})
    .then(data=>{
        // console.log(data)
        dispatch(PageDataTables(data))
    })
    // .catch(err=>{
    //     message.info('頁面請求數據出錯')
    // })
}
}

//
export const submitOne =(data)=>{
    // console.log(data);
    return{
        type:actionTypes.SUBMIT_ONE,
        data
    }
}

export const submitTwo =(data)=>{
    // console.log(data)
    return{
        type:actionTypes.SUBMIT_TWO,
        data
    }
}

export const submitThree =(data)=>{
    // console.log(data)
    return{
        type:actionTypes.SUBMIT_THREE,
        data
    }
}

export const submitFour =(data)=>{
    // console.log(data)
    return{
        type:actionTypes.SUBMIT_FOUR,
        data
    }
}
// submitFive
export const submitFive =(data)=>{
    // console.log(data)
    return{
        type:actionTypes.SUBMIT_FIVE,
        data
    }
}

// ---

export const submitSure=(data)=>{
    // console.log(data)
    return dispatch=>{
        axios.post({url:'http://wksworkshop.wistron.com/Samplingservice.ashx',data:[data]})
        .then(data=>{
            // console.log(data)
            // if(data.length==0){
            //     message.info('提交失敗')
            // }else if(data>0){
                message.info('提交成功')
            // }
        })
        // .catch(
        //     message.info('頁面獲取數據出錯')
        // )
    }
}
  

// --------------------



// export const getPageDataTd = (data) => {
//     return {
//         type: actionTypes.GETPAGEDATA_TD,
//         data
//     }
//     console.log(data)
// }
// 進度條顯示
// export const showPro =(bool)=>{
//     console.log(bool)//---------------
//     return {
//         type:actionTypes.SHOW_PRO,
//         bool
//     }
// }


// 上傳照片
// saveUpLoadFile
// export const upLoad = (file) => {
//     return (dispatch,getState) => {
//         console.log(getState());

//         console.log(file)
//         console.log(showPro())//-------------------------------
//         const param = new FormData();

//         param.append("file", file)
//         console.log(param)

//         console.log(baseURL+SEARCH_SEARCHONE)
//         const url = baseURL+SEARCH_SEARCHONE
//         axios.post({ url: SEARCH_SEARCHONE,data:param,
//             headers: { 'Content-Type': 'multipart/form-data' }} )
         
//             .then(data => {
//                 if (data.code === 1) {
//                     dispatch(showBtn(false))
//                     dispatch(handleUpData(data.data));
//                     console.log(handleUpData(data.data))
//                     dispatch(showPro(false))
//                     message.info('匹配到的照片如下')
//                 } else {
//                     message.info("未找到相關信息")
//                     dispatch(showPro(false))
//                 }
//             })
//             .catch(err => {
//                 message.warn('沒有匹配的照片')
//                 dispatch(showPro(false))
//             })
//     }
// }

// export const handleUpData = (data) => {
//     console.log(data)
//     return {
//         type: actionTypes.HANDLEUPDATA,
//         data
//     }
// }
// export const saveUpLoadFile=(data)=>{
//     console.log(data)
//     // const files = data;
//     // console.log(files)
//     // let file =fileType(data);
//     return{
//       type:actionTypes.SAVEUPLOAD_FILE,
//       data
//     }
// }
// 上傳確定按鈕
// export const showBtn =(bool)=>{
//     return{
//       type:actionTypes.SHOW_BTN,
//       bool
//     }
//   }

// 管理員批量上傳

// 
// export const pictureUpLoad =(files)=>{
//     return (dispatch,getState)=>{
//     // ADMIN_MULTIUPLOAD
//     const param = new FormData();
//     // param.append("name", "test");
//     param.append("files", files)
//     console.log(param)
//     axios.post({ url: ADMIN_MULTIUPLOAD,data:param,
//         headers: { 'Content-Type': 'multipart/form-data' }} )
//         .then(data=>{
//             if(data.data===1){
            
//                 message.info('上傳成功')
//                 dispatch(picData(data.data))
//                 // dispatch()
//             }else {
//                 message.warn('上傳失敗')
//             }
//         })
//         .catch(err=>{
//             message.warn('請重新上傳')
//         })
//     }
// }


// export const picData =(data) =>{
//     return{
//         type:actionTypes.PICDATA,
//         data
//     }
// }

export const loadMore = () => ({type: actionTypes.LOADMORE})

//

    

