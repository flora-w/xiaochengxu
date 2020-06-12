import React, { Fragment, Component } from 'react';
import { Table } from 'antd'
import top from './../../public/assets/sys_imgs/top.jpg';
import { withRouter } from 'react-router-dom';
import { actionCreators } from "./store";
import { connect } from 'react-redux';

class Tables extends Component {
    componentDidMount() {
        this.props.getPageData();
    }
    render() {
        const columns = [{
            title: '排名',
            dataIndex: '1',
            align: "center",
        }, {
            title: '參賽隊伍',
            dataIndex: '2',
            align: "center",
        }, {
            title: '總分',
            dataIndex: '3',
            align: "center",
        }, {
            title: '線上考核',
            dataIndex: '4',
            align: "center",
        }, {
            title: '操作題得分',
            dataIndex: '5',
            align: "center",
        }, {
            title: '理論知識',
            dataIndex: '6',
            align: "center",
        }, {
            title: 'DPM',
            dataIndex: '7',
            align: "center",
        }, {
            title: 'OPM',
            dataIndex: '8',
            align: "center",
        }, {
            title: '異常事件管理中心',
            dataIndex: '9',
            align: "center",
        }, {
            title: '設備聯網',
            dataIndex: '10',
            align: "center",
        }, {
            title: '能源系統',
            dataIndex: '11',
            align: "center",
        },

        ]
        // 

        const { PageDataTablest } = this.props;
        // console.log(PageDataTablest )
        // 
        return (
            <Fragment>
                <img src={top}
                    style={{
                        width: '100px',
                        paddingTop: '10px',
                        paddingLeft: '10px'
                    }}
                />
                <h1 style={{ textAlign: 'center' }}>第二屆數位運營管理競賽得分榜 </h1>
                <Table
                    columns={columns}
                    bordered={true}
                    size="middle"
                    // dataSource={PageDataTablest}
                    style={{ width: '80%', margin: 'auto' }}
                />
                <footer style={{ marginLeft: '10%', fontSize: '16px' }}><b>Mark:總分計算邏輯:1~6項總分*80%+線上考核*20%</b> </footer>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const {
        PageDataTablest
        //   teamData,
        //   subject4,testdes14,
        //   testdes15,testdes16,projectname6,testiem6, 
    } = state.homeReducer;
    // console.log(state.homeReducer);
    return {
        PageDataTablest
        // teamData,
        //     subject4,testdes14,
        //   testdes15,testdes16,projectname6,testiem6, 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPageData() {
            dispatch(actionCreators.getPageDataTables())
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)((withRouter)(Tables))








//const n =100;
// const renderRadios =Array.from({length:n},()=><Radio/>)








