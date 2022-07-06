//mock数据模拟
import Mock from 'mockjs'
// 图标数据
let List = []
export default {
    getStatistcalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    华为: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                videData: [
                    {
                        name: '小米',
                        value: 3999
                    },
                    {
                        name: 'vivo',
                        value: 2700
                    },
                    {
                        name: 'oppo',
                        value: 2590
                    },
                    {
                        name: '华为',
                        value: 2999
                    },
                    {
                        name: '三星',
                        value: 1490
                    },
                    {
                        name: '苹果',
                        value: 3450
                    }
                ],
                userData: [
                    {
                        data: '周一',
                        new: '5',
                        active: 200

                    },
                    {
                        data: '周二',
                        new: '10',
                        active: 500

                    },
                    {
                        data: '周三',
                        new: '25',
                        active: 200

                    },
                    {
                        data: '周四',
                        new: '60',
                        active: 800

                    },
                    {
                        data: '周五',
                        new: '75',
                        active: 200

                    },
                    {
                        data: '周六',
                        new: '68',
                        active: 200

                    },
                    {
                        data: '周日',
                        new: '20',
                        active: 200

                    }
                ],

                orderData:
                {
                    date: ['20220601', '20220602', '20220603', '20220604', '20220605', '20220606', '20220607'],
                    data: List
                },
                tableData: [
                    {
                        name: 'oppo',
                        tokdybuy: 500,
                        allbuy: 22000,
                        thismouthbuy: 3500
                    },
                    {
                        name: 'vivo',
                        tokdybuy: 300,
                        allbuy: 22000,
                        thismouthbuy: 1500
                    },
                    {
                        name: '苹果',
                        tokdybuy: 100,
                        allbuy: 52000,
                        thismouthbuy: 5000
                    },
                    {
                        name: '三星',
                        tokdybuy: 500,
                        allbuy: 22000,
                        thismouthbuy: 3500
                    },
                    {
                        name: '华为',
                        tokdybuy: 500,
                        allbuy: 22000,
                        thismouthbuy: 3500
                    },
                    {
                        name: '小米',
                        tokdybuy: 500,
                        allbuy: 22000,
                        thismouthbuy: 3500
                    },
                ]

            }
        }
    }
}