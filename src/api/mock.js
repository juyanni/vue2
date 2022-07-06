import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import permissionApi from './mockServeData/permission'
Mock.mock('/home/getData',homeApi.getStatistcalData)
Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)