import React, { Component, Fragment } from 'react'
import { Button,Input,Radio  } from 'antd'
import top from './../../public/assets/sys_imgs/top.jpg';
// import { isAbsolute } from 'path';
import { Link,  withRouter } from 'react-router-dom';
import { actionCreators } from "./store";
import { connect } from 'react-redux';
// import RadioGroup from 'antd/lib/radio';
import Radios from './radios'


const { TextArea } = Input;
class Programme extends Component {
    componentDidMount() {
        this.props.getPageData();
  }
  state = {
    value: "",
    selectItems: []
}
onChange = (e) => {
    console.log(e.target.name)
    console.log('radiChecked', e.target.value,e.target.name);
    this.setState({
        value: e.target.value,
    });
    console.log(e.target.value)
    const { selectItems } = this.state;
    const id = Number(e.target.name);
    const obj = {ACTUALSCORE : e.target.value, TESTID :id}
    const index = selectItems.findIndex(obj => obj.TESTID === id)
    console.log("index:"+index)
    if (index >= 0 ) {
        selectItems[index] = obj
    }else{
        selectItems.push(obj)
    }
    // console.log(selectItems)//  checked的選中的  


    // ----------

    // if(selectItems.length>0){
    //     selectItems.map(v,k)=>(
    //     )
    // }
    // const result = selectItems.filter(raidosChecked);
    // TESTID 篩選
    // selectItems.map(v,k)=>(
        // if(v.TESTID==TESTID){
        // ACTUALSCORE=thid.props.radiosChecked? ACTUALSCORE=v.ACTUALSCORE;
        // 
        //
        // }
    // )
    //  if(selectItems.lenrth<=0){ACTUALSCORE}
    // -------------
    // selectItems.fliter(selectItems.)
  };

    render() {
            const  { teamData,subject,projectname1,testiem1,
                     ProgrammeDataFirst,isAuthority,
                     submitOne,
                //    onRadios
            } = this.props;
        return (
            <Fragment>
                <header>
                 <img src={top} 
                            style={{ 
                                width:'20vw',
                                paddingTop:'2vw',
                                paddingLeft:'2vw'
                            }}
                            />  
                <div 
                style={{
                    textAlign:'center',
                    fontSize:'5vw',
                    border:'1px solid', 
                    width:'30vw',
                    marginLeft:'31%',
                }}
                >
                {teamData}
                {/* WKS_P5 */}
                </div>         
                <Button 
                style={{
                    backgroundColor:'#1890ff',
                    color:'white',
                    type:"primary",
                    position:'absolute',
                    top:'5vw',
                    right:'3vw',
                }}
                ><Link to='/programme2' 
                onClick={()=>submitOne(this.state.selectItems)}
                > 
                    下一頁  </Link>
                </Button>
                </header>
               <div style={{marginLeft:'6vw',marginTop:'5vw'}}>
                得分要點：<br/>
                &nbsp;&nbsp;&nbsp;系統操作熟練度;&nbsp;&nbsp;&nbsp;步驟講解正確性;<br/>
                &nbsp;&nbsp;&nbsp;找到主要問題點;&nbsp;&nbsp;&nbsp;找到對應負責團隊;<br/>
                提供有效解決方案
               </div>  
                <div style={{marginLeft:'6vw',marginTop:'1vw',marginRight:'2vw'}}>
                <div  >{subject}： </div>
                <div  style={{marginLeft:'6vw',marginTop:'1vw'}}> 第一題：{projectname1} </div>
                <div  style={{marginLeft:'6vw',marginTop:'1vw'}}>{testiem1}  </div> 
                     <ul>
                       {
                            ProgrammeDataFirst.map((v,k) => (
                                <li  id={v.testid} key={k+1} 
                                style={{marginLeft:'3vw', marginTop:'1vw'}}>
                                {v.testdes}<br/>
                                <Radios 
                                 name={v.testid}
                                 key={k}
                                 onChange={this.onChange}
                                 Value={this.state.value}
                                 defaultValue={this.state.value}
                                 n={v.standardscore}
                                 disabled={isAuthority}
                                 
                                 
                                 ></Radios>
                                </li>
                            ))
                        }
                    </ul>
                <TextArea rows={3} 
                placeholder="備註"
                style={{width:'90%',margin:'5vw'
                }}/>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    const {teamData ,subject,projectname1,testiem1,
        ProgrammeDataFirst,isAuthority,selectItems
        // onRadios
    } = state.homeReducer;
    // console.log(state.homeReducer);
    return {
        teamData,
        subject,
        projectname1,
        testiem1,
        ProgrammeDataFirst,isAuthority,selectItems
        // onRadios
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPageData() {
            dispatch(actionCreators.getPageDataProgramme1())
        },
        submitOne(selectItems){
            //   console.log(selectItems) 
              
            // ---
            // console.log(selectItems);
            // localStorage.setItem('selectItems',selectItems);
            // // localStorage.setItem('selectItems',JSON.stringify(selectItems));
            // console.log(localStorage);
            // // const selectItems = JSON.parse(localStorage.getItem('selectItems'));
            // console.log( selectItems);

            dispatch(actionCreators.submitOne(selectItems)); 
        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)((withRouter)(Programme))




