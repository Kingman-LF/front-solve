// 绘制胶囊柱状图
export function getBarJiaoNang(charts, leftData, rightData, colorlist, data) {
    charts.clear()
    let dataV = data ? data : [99, 1]
    let clist = colorlist ? colorlist : ['#43FF55', '#FF4657']
    let ldata = leftData ? leftData : ['已办结', '办理中']
    let rdata = rightData ? rightData : [
        JSON.stringify({
            state: 0,
            num: 186,
            lv: '99%'
        }),
        JSON.stringify({
            state: 1,
            num: 5,
            lv: '2%'
        }),
    ]
    // 指定图表的配置项和数据
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: '{b}:{c}%'
        },
        xAxis: {
            type: 'value',
            show: false,
        },
        grid: {
            top: '3%',
            left: '3%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: [
            {
                type: 'category',
                scale: true,
                axisLine: {       // 坐标轴 轴线
                    show: false,  // 是否显示
                },
                data: ldata,
                axisLabel: {
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold",
                },
                axisTick: {
                    show: false
                },
            },
            {
                type: 'category',
                scale: true,
                axisLine: {       // 坐标轴 轴线
                    show: false,  // 是否显示
                },
                axisLabel: {
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold",
                    formatter: function (data) {
                        let obj = JSON.parse(data)
                        let str = obj.state === 0 ? `({b|${obj.lv}})` : `({a|${obj.lv}})`
                        return obj.num + str
                    },
                    rich: {
                        a: {
                            color: '#FF4657',
                            fontSize: 14,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#43FF55',
                            fontSize: 14,
                            fontWeight: "bold"
                        }
                    }
                },
                axisTick: {
                    show: false
                },
                data: rdata,
            }
        ],
        series: [{
            data: dataV,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                borderWidth: 1,
                color: 'rgba(255, 255, 255, 0.2)',
                borderRadius: 9
            },
            itemStyle: {    // 图形的形状
                normal: {
                    barBorderRadius: 9,
                    color: function (params) {
                        return clist[params.dataIndex];
                    }
                }
            },
            barCategoryGap: 46,
            barWidth: 18
        }]
    };
    option && charts.setOption(option)
    window.addEventListener('resize', function () {
        charts.resize()
    })
}
// 折线图
export function getZhexian(charts) {
    charts.clear()
    let option = {
        title: {
            show: false
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            icon: 'rect',
            itemWidth: 13,
            itemHeight: 13,
            itemGap: 25,
            left: '3%',
            textStyle: {
                fontSize: 14,
                fontFamily: 'PingFang',
                fontWeight: 'bold',
                color: '#FFFFFF',
            },
            data: ['吴兴区', '南浔区', '南太湖新区', '安吉县', '长兴县']
        },
        grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            width: '90%',
            height: '75%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                color: "#fff"
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)'
                }
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六']
        },
        yAxis: {
            type: 'value',
            splitLine: {
                type: 'dashed',
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff"
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)'
                }
            },
        },
        series: [
            {
                name: '吴兴区',
                type: 'line',
                stack: '总量',
                smooth: true,
                color: '#00F0FF',
                data: [120, 132, 101, 134, 90, 230]
            },
            {
                name: '南浔区',
                type: 'line',
                stack: '总量',
                smooth: true,
                color: '#2FA768',
                data: [220, 182, 191, 234, 290, 330]
            },
            {
                name: '南太湖新区',
                type: 'line',
                stack: '总量',
                smooth: true,
                color: '#F74849',
                data: [150, 232, 201, 154, 190, 330]
            },
            {
                name: '安吉县',
                type: 'line',
                stack: '总量',
                smooth: true,
                color: '#EC6941',
                data: [320, 332, 301, 334, 390, 330]
            },
            {
                name: '长兴县',
                type: 'line',
                stack: '总量',
                smooth: true,
                color: '#FFF45C',
                data: [820, 932, 901, 934, 1290, 1330]
            },
            {
                name: '德清县',
                type: 'line',
                stack: '总量',
                smooth: true,
                color: '#0078FF',
                data: [811, 900, 916, 400, 1100, 1330]
            }
        ]
    }
    option && charts.setOption(option)
    window.addEventListener('resize', function () {
        charts.resize()
    })
}
// 绘制柱状图
export function zhuzhuangtu(charts, color, xdata, ydata, rotate) {
    let xData = xdata ? xdata : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    let yData = ydata ? ydata : [120, 220, 150, 80, 70, 110, 130]
    let colors = color ? color : '#00F0FF'
    charts.clear()
    let option = {
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                rotate: rotate ? rotate : 0,
                color: "#fff",
                fontfamily: 'PingFang',
                fontweight: 'bold'
            },
            data: xData
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff",
                fontfamily: 'PingFang',
                fontweight: 'bold'
            },
            type: 'value'
        },
        grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            width: '90%',
            height: '75%',
            containLabel: true
        },
        series: [{
            data: yData,
            type: 'bar',
            barWidth: 20,
            color: colors,
            label: {
                show: true,
                position: 'top',
                color: '#fff'
            }
        }]
    }
    option && charts.setOption(option)
    window.addEventListener('resize', function () {
        charts.resize()
    })

}
// 环状图
export function huanzhuang(charts, showLable, mygraphic) {
    charts.clear()
    let gailanTotal = 25656
    let option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            show: false
        },
        graphic: mygraphic ? [{
            type: 'text',
            left: '40%',
            top: '45%',
            z: 10,
            style: {
                fill: '#fff',
                text: gailanTotal,
                textAlign: 'center',
                text: [
                    `{name|总记}`,
                    '{value|' + gailanTotal + '}',

                ].join('\n'),
                rich: {
                    value: {
                        color: '#303133',
                        fontSize: 14,
                        lineHeight: 20,
                        fontWeight: 'bold',
                        fontFamily: 'PingFang'
                    },
                    name: {
                        color: '#909399',
                        lineHeight: 20,
                        fontSize: 14,
                    },
                },
                font: '16px PingFang'
            }
        }] : [],
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '75%'],
                center: ['46%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: showLable ? showLable : false,
                    color: "#fff",
                    fontWeight: 'bold',
                    fontFamily: 'PingFang ',
                    fontSize: 12,
                },
                itemStyle: {
                    color: function (params) {
                        var colorlist = ['#fc8452', '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272'];
                        return colorlist[params.dataIndex];
                    },
                },
                labelLine: {
                    show: true,
                    length: 5,
                    length2: 5,
                },
                data: [
                    { value: 1048, name: '搜索引擎' },
                    { value: 735, name: '直接访问' },
                    { value: 580, name: '邮件营销' },
                    { value: 484, name: '联盟广告' },
                    { value: 300, name: '视频广告' }
                ]
            }, {

            }
        ]
    }
    option && charts.setOption(option)
    window.addEventListener('resize', function () {
        charts.resize()
    })
}
// 绘制桑葚图
export function sangshen(charts, echarts) {
    charts.clear()
    let city = {
        '市本级': {color:'#86ffff',depth:0},
        '吴兴区': {color:'#cd5c5c',depth: 0},
        '长兴县': {color:'#ff7644',depth: 0},
        '安吉县': {color:'#ffa500',depth: 0},
        '德清县': {color:'#32cd32',depth: 0},
        '南浔区': {color:'#4a91e2',depth: 0},
        '南太湖新区': {color:'#ff76ff',depth: 0},

        '特种设备投诉举报': {color:'#eb6877',depth: 1},
        '公司注销': {color:'#8957a1',depth: 1},
        '公司登记': {color:'#87cefa',depth: 1},
        '食品投诉举报': {color:'#448aca',depth: 1},
        '行政处罚': {color:'#ea68a2',depth: 1},

        '一审未审结': {color:'#86ffff',depth: 2},
        '二审，驳回起诉': {color:'#f8b551',depth: 2},
        '撤诉': {color:'#13b5af',depth: 2},
        '一审驳回，二审中': {color:'#556fb5',depth: 2},

        '领导出庭': {color:'#4a91e2',depth: 3},
        '非领导出庭': {color:'#ffa500',depth: 3},


    }
    let population = [
        { source: "市本级", target: "特种设备投诉举报", value: 1 },
        { source: "市本级", target: "公司注销", value: 1 },

        { source: "吴兴区", target: "公司登记", value: 1 },

        { source: "长兴县", target: "公司登记", value: 4 },

        { source: "德清县", target: "公司登记", value: 1 },
        { source: "德清县", target: "行政处罚", value: 2 },

        { source: "南浔区", target: "公司注销", value: 1 },

        { source: "南太湖新区", target: "食品投诉举报", value: 1 },

        { source: "特种设备投诉举报", target: "二审，驳回起诉", value: 1 },

        { source: "公司注销", target: "一审未审结", value: 2 },

        { source: "公司登记", target: "一审未审结", value: 1 },
        { source: "公司登记", target: "撤诉", value: 1 },
        { source: "公司登记", target: "一审驳回，二审中", value: 4 },

        { source: "食品投诉举报", target: "一审未审结", value: 1 },

        { source: "行政处罚", target: "撤诉", value: 2 },

        { source: "一审未审结", target: "领导出庭", value: 4 },
        { source: "二审，驳回起诉", target: "领导出庭", value: 1 },
        { source: "撤诉", target: "领导出庭", value: 3 },
        { source: "一审驳回，二审中", target: "领导出庭", value: 4 },
    ];
    //定义一个数组
    let citylist = [];
    //遍历city
    for (let key in city) {
        citylist.push(
            { name: key, itemStyle: { color: city[key].color },depth: city[key].depth }   //构造节点对象，包括name和itemStyle
        )
    }
    //定义一个数组
    let data = [];
    for (let i = 0; i < population.length; i++) {
        let color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
                // color: city[population[i].source].color  //获取起始节点的颜色属性
                color: "#146cff"  //获取起始节点的颜色属性
        }, {
            offset: 1,
            // color: city[population[i].target].color  //获取结尾节点的颜色属性
                color: "#85fdd7"  //获取起始节点的颜色属性
        }]
        )
        data.push({
            source: population[i].source,
            target: population[i].target,
            value: population[i].value,
            lineStyle: {   //添加样式配置
                color: color
            }
        }
        )
    }
    console.log(citylist)
    let option = {
        series: [
            {
                type: 'sankey',
                data: citylist,
                links: data,
                focusNodeAdjacency: 'allEdges',    //鼠标悬停到节点或边上，相邻接的节点和边高亮显示
                label: {
                    color: "#fff",
                    fontSize: 14
                },
                // itemStyle: {
                //     borderWidth: 1,
                //     borderColor: '#fff'
                // },
                lineStyle: {
                    curveness: 0.5,
                    opacity: 0.5
                }
            }
        ]
    }
    option && charts.setOption(option)
    window.addEventListener('resize', function () {
        charts.resize()
    })
}
// 绘制南丁格尔玫瑰图
export function meigui(charts) {
    charts.clear()
    let option = {
        legend: {
            show: false
        },
        toolbox: {
            show: false,
        },
        series: [
            {
                name: '面积模式',
                type: 'pie',
                radius: [10, 100],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    normal: {
                        borderRadius: 8,
                        label: {
                            textStyle: {  //数值样式
                                color: 'white',
                                fontSize: 14
                            }
                        }
                    }
                },
                data: [
                    { value: 40, name: 'rose 1' },
                    { value: 38, name: 'rose 2' },
                    { value: 32, name: 'rose 3' },
                    { value: 30, name: 'rose 4' },
                    { value: 28, name: 'rose 5' },
                    { value: 26, name: 'rose 6' },
                    { value: 22, name: 'rose 7' },
                    { value: 18, name: 'rose 8' }
                ],

            }
        ]
    };
    option && charts.setOption(option)
    window.addEventListener('resize', function () {
        charts.resize()
    })
}
// 折现-堆叠面积图
export function duidieArea(charts, echarts) {
    charts.clear()
    let option = {
        color: ['#80FFA5', '#00DDFF'],
        title: {
            text: '渐变堆叠面积图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Line 1', 'Line 2']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            width:'90%',
            top: '15%',
            left: '1%',
            right: '-1%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Line 1',
                type: 'line',
                stack: '总量',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(128, 255, 165)'
                    }, {
                        offset: 1,
                        color: 'rgba(1, 191, 236)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [140, 232, 101, 264, 90, 340, 250]
            },
            {
                name: 'Line 2',
                type: 'line',
                stack: '总量',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 221, 255)'
                    }, {
                        offset: 1,
                        color: 'rgba(77, 119, 255)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 282, 111, 234, 220, 340, 310]
            }
        ]
    };
    option && charts.setOption(option)
    window.addEventListener('resize', function () {
        charts.resize()
    })
}
// 仪表盘
export function yibiaoppan(charts, color) {
    charts.clear()
    let option = {
        series: [{
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            radius: '115%',
            center: ['50%', '75%'],
            min: 0,
            max: 100,
            splitNumber: 4,
            itemStyle: {
                color: color,
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            progress: {
                show: true,
                roundCap: true,
                width: 8
            },
            pointer: {
                show: false,
            },
            axisLine: {
                roundCap: true,
                lineStyle: {
                    width: 8
                }
            },
            axisTick: {
                splitNumber: 2,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            splitLine: {
                length: 8,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            axisLabel: {
                distance: 10,
                color: '#999',
                fontSize: 8
            },
            title: {
                offsetCenter: [0, '5%'],
                fontSize: 15,
                fontFamily: 'PingFang Bold',
                color: '#fff',
                fontStyle: 'oblique',
            },
            detail: {
                fontSize: 30,
                fontFamily: 'digifaw',
                offsetCenter: [0, '-20%'],
                valueAnimation: true,
                formatter: function (value) {
                    return Math.round(value) + '%';
                },
                color: '#fff'
            },
            data: [{
                value: 70,
                name: '重复投诉率',
            }]
        }]
    };
    option && charts.setOption(option)
    window.addEventListener('resize', function () {
        charts.resize()
    })
}
// 柱状-堆叠
export function zhuzhuangDuidie(charts, rotate) {
    charts.clear()
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // Use axis to trigger tooltip
                type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: "#fff",
                fontfamily: 'PingFang',
                fontweight: 'bold'
            },
            data: ['Direct', 'Mail Ad', 'Affiliate Ad']
        },
        grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            width: '90%',
            height: '75%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                interval: 0,
                rotate: rotate ? rotate : 0,
                color: "#fff",
                fontfamily: 'PingFang',
                fontweight: 'bold'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)'
                }
            },
            data: ['Mon', 'Tue', 'Wed']
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff"
            },
        },
        series: [
            {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                barWidth: 30,
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: 'Mail Ad',
                type: 'bar',
                stack: 'total',
                barWidth: 30,
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                barWidth: 30,
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            }
        ]
    };
    option && charts.setOption(option)
    window.addEventListener('resize', function () {
        charts.resize()
    })
}
// 极坐标热力图
export function jizuobiao(charts) {
    charts.clear()
    function renderItem(params, api) {
        var values = [api.value(0), api.value(1)];
        var coord = api.coord(values);
        var size = api.size([1, 1], values);
        return {
            type: 'sector',
            shape: {
                cx: params.coordSys.cx,
                cy: params.coordSys.cy,
                r0: coord[2] - size[0] / 2,
                r: coord[2] + size[0] / 2,
                startAngle: -(coord[3] + size[1] / 2),
                endAngle: -(coord[3] - size[1] / 2)
            },
            style: api.style({
                fill: api.visual('color')
            })
        };
    }
    let hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'];
    let days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

    let data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];
    let maxValue = data.reduce(function (max, item) {
        return Math.max(max, item[2]);
    }, -Infinity);
    let option = {
        legend: {
            show: false
        },
        polar: {},
        tooltip: {
        },
        // visualMap: {
        //     type: 'continuous',
        //     min: 0,
        //     max: maxValue,
        //     top: 'middle',
        //     dimension: 2,
        //     calculable: true
        // },
        angleAxis: {
            type: 'category',
            data: hours,
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                    type: 'dashed'
                }
            },
            axisLine: {
                show: false
            }
        },
        radiusAxis: {
            type: 'category',
            data: days,
            z: 100
        },
        series: [{
            name: 'Punch Card',
            type: 'custom',
            coordinateSystem: 'polar',
            itemStyle: {
                color: '#ffff'
            },
            renderItem: renderItem,
            data: data
        }]
    };
    option && charts.setOption(option)
    window.addEventListener('resize', function () {
        charts.resize()
    })
}
// 人口密度分布地图
export function miduFenbu(charts, echarts) {
    charts.clear()
    charts.showLoading();
    var option;
    $.get('https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/geo/HK.json', function (geoJson) {
        charts.hideLoading();
        echarts.registerMap('HK', geoJson);
        charts.setOption(option = {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (p / km2)'
            },
            series: [
                {
                    name: '香港18区人口密度',
                    type: 'map',
                    mapType: 'HK', // 自定义扩展图表类型
                    label: {
                        show: false
                    },
                    data: [
                        { name: '中西区', value: 20057.34 },
                        { name: '湾仔', value: 15477.48 },
                        { name: '东区', value: 31686.1 },
                        { name: '南区', value: 6992.6 },
                        { name: '油尖旺', value: 44045.49 },
                        { name: '深水埗', value: 40689.64 },
                        { name: '九龙城', value: 37659.78 },
                        { name: '黄大仙', value: 45180.97 },
                        { name: '观塘', value: 55204.26 },
                        { name: '葵青', value: 21900.9 },
                        { name: '荃湾', value: 4918.26 },
                        { name: '屯门', value: 5881.84 },
                        { name: '元朗', value: 4178.01 },
                        { name: '北区', value: 2227.92 },
                        { name: '大埔', value: 2180.98 },
                        { name: '沙田', value: 9172.94 },
                        { name: '西贡', value: 3368 },
                        { name: '离岛', value: 806.98 }
                    ],
                    // 自定义名称映射
                    nameMap: {
                        'Central and Western': '中西区',
                        'Eastern': '东区',
                        'Islands': '离岛',
                        'Kowloon City': '九龙城',
                        'Kwai Tsing': '葵青',
                        'Kwun Tong': '观塘',
                        'North': '北区',
                        'Sai Kung': '西贡',
                        'Sha Tin': '沙田',
                        'Sham Shui Po': '深水埗',
                        'Southern': '南区',
                        'Tai Po': '大埔',
                        'Tsuen Wan': '荃湾',
                        'Tuen Mun': '屯门',
                        'Wan Chai': '湾仔',
                        'Wong Tai Sin': '黄大仙',
                        'Yau Tsim Mong': '油尖旺',
                        'Yuen Long': '元朗'
                    },
                    itemStyle: {
                        areaColor: "rgba(0, 0, 0, 0.37)"
                    },
                }
            ]
        });
    });
    option && myChart.setOption(option);
    window.addEventListener('resize', function () {
        charts.resize()
    })
}
// 旭日图
export function xuritu(charts) {
    charts.clear()
    let colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
    let itemStyle = {
        star5: {
            color: colors[0]
        },
        star4: {
            color: colors[1]
        },
        star3: {
            color: colors[2]
        },
        star2: {
            color: colors[3]
        }
    };
    let data = [{
        name: '1-1',
        children: [{
            name: '1-1-1',
            value: 15,
            children: [{
                name: '1-1-1-1',
                value: 2
            }, {
                name: '1-1-1-2',
                value: 5,
                children: [{
                    name: '1-1-1-3',
                    value: 2
                }]
            }, {
                name: '1-1-2-1',
                value: 4
            }]
        }, {
            name: '1-1-3-1',
            value: 10,
            children: [{
                name: '1-1-4-1',
                value: 5
            }, {
                name: '1-1-5-1',
                value: 1
            }]
        }]
    }, {
        name: '1-2',
        children: [{
            name: '1-2-1',
            children: [{
                name: '1-2-2',
                value: 1
            }, {
                name: '1-2-2',
                value: 2
            }]
        }]
    }];
    let option = {
        series: {
            type: 'sunburst',
            data: data,
            radius: [0, '90%'],
            label: {
                rotate: 'radial',
                color: "#fff"
            }
        }
    };
    option && charts.setOption(option);
    window.addEventListener('resize', function () {
        charts.resize()
    })

}
// 横向柱状折叠图
export function hxzzhedie(charts) {
    charts.clear()
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // Use axis to trigger tooltip
                type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {
            bottom: '10%',
            data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
        },
        grid: {
            width:'90%',
            top: '10%',
            left: '3%',
            right: '4%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff",
                fontfamily: 'PingFang',
                fontweight: 'bold'
            },
        },
        yAxis: {
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff",
                fontfamily: 'PingFang',
                fontweight: 'bold'
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
            {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: 'Mail Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: 'Search Engine',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    option && charts.setOption(option);
    window.addEventListener('resize', function () {
        charts.resize()
    })
}

