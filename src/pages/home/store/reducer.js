
import * as actionTypes from "./actionTypes";
import ActionButton from "antd/lib/modal/ActionButton";

const defaultState = {
    loginData: [],
    inputData: [],
    isAuthority: false,
    firstData:[],
    secondData:[],
    thirdData:[],
    forthData:[],
    fifthData:[],
    firstKey:[],
    secondKey:[],
    thirdKey:[],
    forthKey:[],
    fifthKey:[],
    subData:{data:'',key:''},
    teamData:'',
    ProgrammeDataFirst:[],
    subject:'',subject1:'',subject2:'',subject3:'',subject4:'',
    projectname1:'',projectname2:'',projectname3:'',projectname4:'',projectname5:'',projectname6:'',
    testiem1:'', testiem2:'',testiem3:'',testiem4:'',testiem5:'',testiem6:'',
    testdes1:'',testdes2:'',testdes3:'',
    standardscore1:'',standardscore2:'',standardscore3:'',

    // 
    ProgrammeDataSecond:[],
    testdes4:'',testdes5:'',testdes6:'',
    standardscore4:'',standardscore5:'',standardscore6:'',
    // 
    ProgrammeDataThird:[],
    testdes7:'',testdes8:'',testdes9:'',
    standardscore7:'',standardscore8:'',standardscore9:'',
    // 
    ProgrammeDataForth:[],
    testdes10:'',testdes11:'',testdes12:'',testdes13:'',
    standardscore10:'',standardscore11:'',standardscore12:'',standardscore13:'',
    // 
    ProgrammeDataFifth:[],
    testdes14:'',testdes15:'',testdes16:'',
    standardscore14:'',standardscore15:'',standardscore16:'',

    ProgrammeDataScore:[],
    PageDataTablest:[],
    testFirstData:[],
    testSecondData:[],
    testThirdData:[],
    testForthData:[],
    testFifthData:[],

    testFirstDataSource:'',
    testSecondDataSource:'',
    testThirdDataSource:'',
    testForthDataSource:'',
    testFifthDataSource1:'',
    testFifthDataSource2:'',
    testFifthDataSource3:'',
    testFifthDataSource:'',

    lengthData:'',
    Programme1Data:[],
    Programme2Data:[],
    Programme3Data:[],
    Programme4Data:[],
    Programme5Data:[],



    // 
    seatData: [],
    pageData: [],
    showBtn: false,
    loadFile: [],
    saveUpLoadFile: [],
    pictureData:[],
    scrollData: [],
    index: 0,
    size: 10,
    showPro:false,




}


const isAuthority = (newState, action) => {
    // console.log(action.data)
    newState.isAuthority = action.bool;
    return newState;
}

const showPro =(newState,action)=>{
    // console.log(action.data);
    newState.showPro =action.bool;
    return newState;
}

const onInput = (newState, action) => {
    // console.log(action.data)
    newState.inputData = action.data;
    return newState;
};

const loginTD = (newState, action) => {
    // console.log(action.data);
    newState.loginData = action.data;
    return newState;
}

// 

const SeatformData = (newState,action) =>{
    // console.log(action.data)
    newState.firstData= action.data[0].teamid;
    newState.firstKey= action.data[0].testno;
    newState.secondData= action.data[1].teamid;
    newState.secondKey= action.data[1].testno;
    newState.thirdData= action.data[2].teamid;
    newState.thirdKey= action.data[2].testno;
    newState.forthData= action.data[3].teamid;
    newState.forthKey= action.data[3].testno;
    newState.fifthData= action.data[4].teamid;
    newState.fifthKey= action.data[4].testno;
    return newState;
}

// 
const submitButton =(newState,action)=>{
    // console.log(action.data)
    // console.log(action.data.firstData)
    newState.subData.data = action.data.firstData;
    newState.subData.key=action.data.firstKey;
    newState.teamData=action.data.firstData;

    return newState;
}
// submitSecond    submitThird submitForth submitFifth

const submitSecond  =(newState,action)=>{
    // console.log(action.data.secondData)
    newState.subData.data = action.data.secondData;
    newState.subData.key=action.data.secondKey;
    newState.teamData=action.data.secondData;
    return newState;
}

const submitThird  =(newState,action)=>{
    // console.log(action.data.thirdData)
    newState.subData.data = action.data.thirdData;
    newState.subData.key=action.data.thirdKey;
    newState.teamData=action.data.thirdData;
    return newState;
}

const submitForth  =(newState,action)=>{
    // console.log(action.data.forthData)
    newState.subData.data = action.data.forthData;
    newState.subData.key=action.data.forthKey;
    newState.teamData=action.data.forthData;
    return newState;
}
const submitFifth  =(newState,action)=>{
    // console.log(action.data)
    newState.subData.data = action.data.fifthData;
    newState.subData.key=action.data.fifthKey;
    newState.teamData=action.data.fifthData;
    return newState;
}
// --------------
// 對應 所有題目


  

const Programme1Data = (newState,action)=>{
    // console.log(action.data)
    let newArr=action.data.map(({testdes, standardscore,testid})=>{
        let id = testid.toString();
        return {testdes, standardscore,testid:id}
        })
    // console.log(newArr)
    newState.ProgrammeDataFirst= newArr;



    newState.subject= action.data[0].subject;
    newState.projectname1= action.data[0].projectname;   
    newState.testiem1 = action.data[0].testitem;

    return newState;
}
// all題目
 const testAllData=(newState,action)=>{
    //  console.log(action.data)
     newState.lengthData= action.data.length;
     const projectnames = []
     const newArr1 = action.data.reduce((prev, current) => {
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
    //  console.log(newArr1)
    //  console.log(projectnames)

     newState.Programme1Data=action.data[0];
    //  newState.Programme2Data=action.data[1];

    //  let newArr2=action.data.map(({testdes, standardscore,testId})=>{
    //     let id = testId.toString();
    //     return {testdes, standardscore,testId:id}
    //     })
    // console.log()
    // newState.ProgrammeDataSecond= newArr2;
    // newState.subject1= action.data[0].subject;
    // newState.projectname3= action.data[0].projectname;   
    // newState.testiem3 = action.data[0].testitem;    


     newState.Programme3Data=action.data[2];
     newState.Programme4Data=action.data[3];
     newState.Programme5Data=action.data[4];

     return newState;
 }



const Programme2Data = (newState,action)=>{
    // console.log(action.data)
    // newState.ProgrammeData = action.data[0];
    let newArr=action.data.map(({testdes, standardscore,testid})=>{
        let id = testid.toString();
        return {testdes, standardscore,testid:id}
        })
    // console.log(newArr)
    newState.ProgrammeDataSecond= newArr;

    // let newArr2 =action.data.map(obj=>{
    //     return obj.standardscore
    //     })
    // console.log(newArr2)
    // newState.ProgrammeDataScore= newArr2;

    newState.subject1= action.data[0].subject;
    newState.projectname3= action.data[0].projectname;   
    newState.testiem3 = action.data[0].testitem;
    return newState;
    }


const Programme3Data = (newState,action)=>{
    // console.log(action.data)
    // newState.ProgrammeData = action.data[0];
    let newArr=action.data.map(({testdes, standardscore,testid})=>{
        let id = testid.toString();
        return {testdes, standardscore,testid:id}
        })
    // console.log(newArr)
    newState.ProgrammeDataThird= newArr;

    // let newArr2 =action.data.map(obj=>{
    //     return obj.standardscore
    //     })
    // console.log(newArr2)
    // newState.ProgrammeDataScore= newArr2;
    newState.subject2= action.data[0].subject;
    newState.projectname4= action.data[0].projectname;   
    newState.testiem4 = action.data[0].testitem;
    return newState;
    }


const Programme4Data = (newState,action)=>{
    // console.log(action.data)
    // newState.ProgrammeData = action.data[0];
    let newArr=action.data.map(({testdes, standardscore,testid})=>{
        let id = testid.toString();
        return {testdes, standardscore,testid:id}
        })
    // console.log(newArr)
    newState.ProgrammeDataForth= newArr;

    // let newArr2 =action.data.map(obj=>{
    //     return obj.standardscore
    //     })
    // console.log(newArr2)
    // newState.ProgrammeDataScore= newArr2;
    newState.subject3= action.data[0].subject;
    newState.projectname5= action.data[0].projectname;   
    newState.testiem5 = action.data[0].testitem;
    return newState;
    }

// --------------
const Programme5Data = (newState,action)=>{
    // console.log(action.data)
    newState.ProgrammeData = action.data[0];
    let newArr=action.data.map(({testdes, standardscore,testid,testitem})=>{
        let id = testid.toString();
        return {testdes, standardscore,testid:id,testitem}
        })
    // console.log(newArr)
    newState.ProgrammeDataFifth= newArr;
    
    // const Programme5Data = (newState,Action)=>{
    //     console.log(action.data)
    //     newState.ProgrammeDataFifth=action.data;
    //     return newState
    // }


    let newArr2 =action.data.map(obj=>{
        return obj.standardscore
        })
    // console.log(newArr2)
    newState.ProgrammeDataScore= newArr2 ;
    newState.subject4= action.data[0].subject ;
    newState.projectname6= action.data[0].projectname ;   
    // newState.testiem6 = action.data[0].testitem;
    return newState;
    }
    // ----------------
    // const Programme5Data = (newState,Action)=>{
    //     console.log(action.data)
    //     newState.ProgrammeDataFifth=action.data;
    //     return newState
    // }

    // -------------

    const PageDataTables =(newState,action)=>{
        // console.log(action)
        newState.PageDataTablest =action.data;
        return newState;
    }
// 
const submitOne =(newState,action)=>{
    // newState.sessionStorage= action.data;
    // --------======
    localStorage.setItem('selectItems',action.data);
//    console.log(localStorage);
// ----=============
    // console.log(sessionStorage);
    // console.log(action.data);
    newState.testFirstData= action.data;
    let newArr=action.data.map(obj=>{
        return obj.ACTUALSCORE
        })
    // console.log(newArr)
    var sum = 0;
    for (var i = 0, len = newArr.length; i < len; i++) {
        sum += newArr[i]
    }
    // console.log('for',sum)
    newState.testFirstDataSource= sum;
    // console.log(sum);
    return newState;
}   


const submitTwo =(newState,action)=>{
    // console.log(action.data)
    newState.testSecondData= action.data;
    let newArr=action.data.map(obj=>{
        return obj.ACTUALSCORE
        })
    // console.log(newArr);
    var sum = 0;
    for (var i = 0, len = newArr.length; i < len; i++) {
        sum += newArr[i]
    }
    // console.log('for',sum)
    newState.testSecondDataSource = sum;
    // console.log(sum)

    return newState;
}  

const submitThree =(newState,action)=>{
    // console.log(action.data)
    newState.testThirdData= action.data;
    let newArr=action.data.map(obj=>{
        return obj.ACTUALSCORE
        })
    // console.log(newArr);
    var sum = 0;
    for (var i = 0, len = newArr.length; i < len; i++) {
        sum += newArr[i]
    }
    // console.log('for',sum)
    newState.testThirdDataSource= sum;
    // console.log(sum)
    return newState;
}
// submitFour
const submitFour =(newState,action)=>{
    // console.log(action.data)
    newState.testForthData= action.data;
    // testForthDataSource
    let newArr=action.data.map(obj=>{
        return obj.ACTUALSCORE
        })
    // console.log(newArr)
    var sum = 0;
    for (var i = 0, len = newArr.length; i < len; i++) {
        sum += newArr[i]
    }
    // console.log('for',sum)
    newState.testForthDataSource= sum;
    // console.log(sum)


    return newState;
}
// submitFive
const submitFive =(newState,action)=>{
    // console.log(action.data)
    newState.testFifthData= action.data;
    let newArr=action.data.map(obj=>{
        return obj.ACTUALSCORE
        })
    // console.log(newArr)
      newState.testFifthDataSource1=newArr[0];
      newState.testFifthDataSource2=newArr[1];  
      newState.testFifthDataSource3=newArr[2];
      var sum = 0;
      for (var i = 0, len = newArr.length; i < len; i++) {
          sum += newArr[i]
      }
    //   console.log('for',sum)
      newState.testFifthDataSource= sum;

    return newState;
}
//  



//------------------------ 
const getPageData = (newState, action) => {
    // console.log(action.data);
    newState.seatData = action.data;
    return newState;
}
// -----------
const getPageDataTd = (newState, action) => {
    // console.log("getPageDataTd", action.data)
    newState.pageData = action.data;
    newState.scrollData = action.data.splice(0, newState.size);
    return newState;
}

const saveUpLoadFile = (newState, action) => {
    // console.log(action.data);
    newState.loadFile = action.data;
    newState.showBtn = true;
    return newState;
}

const handleUpData = (newState, action) => {
    // console.log(action.data)
    // 還放在pageData，覆蓋原圖片
    // newState.showBtn= true;
    newState.pageData = action.data;
    newState.scrollData = action.data.splice(0, newState.size);
    return newState;
}

const showBtn = (newState, action) => {
    // console.log(action.bool)
    newState.showBtn = action.bool;
    // newState.showBtn= false;
    return newState;
}

const picData = (newState, action) => {
    newState.pictureData = action.data;
    return newState;
}

const getMore = (newState, action) => {
    newState.scrollData.push(...newState.pageData.splice(0, newState.size));
    return newState
}


// ---------------
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionTypes.IS_AUTH:
            return isAuthority(newState, action);
        case actionTypes.ONINPUT:
            return onInput(newState, action);
        case actionTypes.LOGIN_TD:
            return loginTD(newState, action)
// --------   
       case  actionTypes.SEATFORM_DATA:
             return SeatformData(newState,action)

       case actionTypes.SUBMIT_BUTTON:
            return submitButton(newState,action)
       case actionTypes.SUBMIT_SECOND:
            return submitSecond(newState,action)     
       case actionTypes.SUBMIT_THIRD:
            return submitThird(newState,action)    
       case actionTypes.SUBMIT_FORTH:
            return submitForth(newState,action)    
       case actionTypes.SUBMIT_FIFTH:
            return submitFifth(newState,action)    
// ---------
       case actionTypes.PROGRAMME_DATA:
            return Programme1Data(newState,action)
        case actionTypes.PROGRAMMESECOND_DATA:
            return Programme2Data(newState,action)
        case actionTypes.PROGRAMMETHIRD_DATA:
            return Programme3Data(newState,action)
        case actionTypes.PROGRAMMEFORTH_DATA:
            return Programme4Data(newState,action)
        case actionTypes.PROGRAMMEFIFTH_DATA:
            return Programme5Data(newState,action)

        case actionTypes.PAGEDATA_TABLEDS:
            return PageDataTables(newState,action)

        case actionTypes.SUBMIT_ONE:
            return submitOne(newState,action)
        case actionTypes.SUBMIT_TWO:
            return submitTwo(newState,action)
        case actionTypes.SUBMIT_THREE:
            return submitThree(newState,action)
        case actionTypes.SUBMIT_FOUR:
            return submitFour(newState,action)
        case actionTypes.SUBMIT_FIVE:
            return submitFive(newState,action)
            // 
        case actionTypes.TESTALL_DATA:
            return testAllData(newState,action)





        case actionTypes.PAGEDATA:
            return getPageData(newState, action)

        // 

        case actionTypes.GETPAGEDATA_TD:
            return getPageDataTd(newState, action);

        case actionTypes.HANDLEUPDATA:
            return handleUpData(newState, action);

        case actionTypes.SAVEUPLOAD_FILE:
            return saveUpLoadFile(newState, action)
        // 上傳確定button
        case actionTypes.SHOW_BTN:
            return showBtn(newState, action);
        case actionTypes.PICDATA:
            return picData(newState, action)
        case actionTypes.LOADMORE:
            return getMore(newState, action);
        case actionTypes.SHOW_PRO:
            return showPro(newState,action);

        // case actionTypes.CLICKHIDE:
        //     return clickHide(newState,action);

        default:
            return newState;
    }
}




// 
//  const getPageDataTd = (newState,action) =>{ 
//     console.log(action.data)
//      newState.pageData =action.data;
//      return newState;
//  }

//  const saveUpLoadFile=(newState,action)=>{
//      console.log(action.data);
//      newState.loadFile =action.data;
//      newState.showBtn= true;
//      return newState;
//  }

// const handleUpData =(newState,action)=>{
//  console.log(action.data)
//  // 還放在pageData，覆蓋原圖片
//  // newState.showBtn= true;
//  newState.pageData = action.data;
//  return newState;
// }    

// const showBtn=(newState,action)=>{
//  console.log(action.bool)
//  newState.showBtn=action.bool;
//  // newState.showBtn= false;
//  return newState;
// }

//  export default (state = defaultState, action) => {
//      const newState = JSON.parse(JSON.stringify(state));
//      switch (action.type) {
//          case actionTypes.GETPAGEDATA_TD:
//              return getPageDataTd(newState, action);

//          case actionTypes.HANDLEUPDATA:
//              return handleUpData(newState,action);

//              case actionTypes.SAVEUPLOAD_FILE:
//              return saveUpLoadFile(newState,action)
//              // 上傳確定button
//          case actionTypes.SHOW_BTN:
//          return showBtn(newState,action);   
//      default:
//      return newState;
// }
// }














