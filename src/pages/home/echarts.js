import React,{Component} from 'react';
import echarts from 'echarts';
// import ReactEcharts from "echarts-for-react";
import top from './../../public/assets/sys_imgs/top.jpg';


class EchartRight extends Component{
    componentDidMount(){
    // 初始化
    var myChart = echarts.init(document.getElementById('main'));
    // 繪製圖表
    myChart.setOption({
        title :{
            text:'第二屆數位運營管理競賽得分看板',
            left: 'center',
            textStyle:{color:'#ffffff',
            fontSize:'18',
        }
    },
    legend:{
        data:['DPM','OPM','異常事件管理中心','設備聯網','能源系統','理論知識','線上考核'],
        bottom:'3px',
        textStyle:{
            color:'#ffffff'
        }
    },
        tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '6%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine:{ lineStyle:{color:'#ffffff'  }   },
        data: ['WKS_P1', 'WKS_P3', 'WKS_P5', 'WZS_P8', 'WOK', ],
        axisLabel:{
            color:'#ffffff'
        },
        axisTick:{
            show:false
        }
    },
    yAxis: {
        type: 'value',
        axisLabel:{
            color:'#ffffff'
        },
        splitLine:{
            show:false
        },
        axisLine:{
            show:false,

        },
    },
    series: [
        {
            name:'線上考核',
            type:'bar',
            stack:'WKS',
            label: {
                show: true,
            },
            itemStyle:{
                normal:{color:'#255e91'}
            },
            data:['18.4','18.6','18.6','18','18.2']//--------------
        },
        {
            name:'理論知識',
            type:'bar',
            stack:'WKS',
            label: {
                show: true,
            },
            itemStyle:{
                normal:{color:'#70ad47'}
            },
            data:['13.6','14.4','15.2','13.6','14.4']//----------
        },
        {
            name:'能源系統',
            type:'bar',
            stack:'WKS',
            label: {
                show: true,
            },
            itemStyle:{
                normal:{color:'#4472c4'}
            },
            data:['12.8','0','13.6','12.8','13.6']//-----------
        },
        {
            name:'設備聯網',
            type:'bar',
            stack:'WKS',
            label: {
                show: true,
            },
            itemStyle:{
                normal:{color:'#ffc000'}
            },
            data:['13.6','12.8','15.2','0','14.4']//--------------
        },
        {
            name:'異常事件管理中心',
            type:'bar',
            stack:'WKS',
            label: {
                show: true,
            },
            itemStyle:{
                normal:{color:'#a5a5a5'}
            },
            data:['14.4','13.6','12.8','13.6','0']//-----------
        },
        {
            name:'OPM',
            type:'bar',
            stack:'WKS',
            label: {
                show: true,
            },
            itemStyle:{
                normal:{color:'#ed7d31'}
            },
            data:['13.6','14.4','0','18','13.6']//-----------------
        },
        {
            name:'DPM',
            type:'bar',
            stack:'WKS',
            label: {
                show: true,
            },
            itemStyle:{
                normal:{color:'#5b9bd5'}
            },
            data:[ '0','13.6','14.4','13.6','14.4']//------------------
        },
    ]
    })
}
    render(){
        return (
            <div 
             style={{backgroundColor:'#091e2f',width:'100%',height:'100%'  }}> 
            <img src={top} 
                            style={{ 
                                width: '100px',
                                paddingTop: '10px',
                                paddingLeft: '10px'
                            }}
                            />
             <h1  style={{color:'#ffffff',textAlign:'center'}}> 第二屆數位運營管理競賽得分看板   </h1>
            <div id="main" 
            style={{ width: '1000px', height: '500px',
            border:'1px solid #ffffff',paddingTop:'60px',margin:'auto'
             }}>
            </div>
            </div>
        );
    }
}
export default EchartRight;


