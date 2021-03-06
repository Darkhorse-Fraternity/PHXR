/* @flow */
'use strict'

import { methodType, cacheType } from './'



/*
 *   4.1 注册
 *
 */
export function phxr_register(userName,phoneNo,verificationCode,pwd,registType,hasAdvisersCode,advisersCode,province,city) {
    return {
        host:'103.236.253.138:9090',
        path:'/phxrProject/app/phxr/ucenter/register',
        method:methodType.post,
        params:{
            userName,
            phoneNo,
            pwd,
            registType,
            hasAdvisersCode,
            advisersCode,
            province,
            city,
            verificationCode
        },
    }
}



/*
 *   4.2 登录
 *
 */
export function phxr_login(phoneNo,pwd,userType) {
    const  r = /^\+?[1-9][0-9]*$/;
    const param = r.test(phoneNo)?{phoneNo}:{userName:phoneNo}
    return {
        host:'103.236.253.138:9090',
        path:'/phxrProject/app/phxr/ucenter/vipLogin',
        method:methodType.post,
        params:{
            pwd,
            userType,
            ...param,
        },
    }
}

/*
 *   4.3 忘记密码
 *
 */
export function phxr_forget_pwd(phoneNo,idCardNo,verificationCode) {
    return {
        host:'103.236.253.138:9090',
        path:'/phxrProject/app/phxr/ucenter/vipForgetPwd',
        method:methodType.post,
        params:{
            phoneNo,
            idCardNo,
            verificationCode
        },
    }
}

/*
 *   4.4 获取验证码
 *
 */
export function phxr_verification_code(phoneNo,codeType) {
    const  r = /^\+?[1-9][0-9]*$/;
    const param = r.test(phoneNo)?{phoneNo}:{userName:phoneNo,}
    return {
        host:'103.236.253.138:9090',
        path:'/phxrProject/app/phxr/ucenter/sendSmsCode',
        method:methodType.post,
        params:{
            ...param,
            codeType
        },
    }
}

/*
 *   4.5 账号信息
 *
 */
export function phxr_act_account(userId) {
    return {
        path:'/phxr_act_account',
        method:methodType.post,
        params:{
            userId,
        },
    }
}

/*
 *   4.6 修改密码
 *
 */
export function phxr_modify_pwd(userName,oldPwd,newPwd) {
    return {
        path:'/phxr_modify_pwd',
        method:methodType.post,
        params:{
            userName,
            oldPwd,
            newPwd
        },
    }
}

/*
 *   4.7 查询会员信息
 *
 */
export function phxr_query_person_info(userId) {
    return {
        path:'/phxr_query_person_info',
        method:methodType.post,
        params:{
            userId
        },
    }
}

/*
 *   4.8 提交会员信息
 *
 */
export function phxr_submit_person_info(params) {
    return {
        path:'/phxr_submit_person_info',
        method:methodType.post,
        params:params
    }
}

/*
 *   4.9 查询会员信用
 *
 */
export function phxr_query_person_credit(userId) {
    return {
        path:'/phxr_query_person_credit',
        method:methodType.post,
        params:{
            userId
        },
    }
}

/*
 *   4.10 提交会员信用
 *
 */
export function phxr_submit_person_credit(params) {
    return {
        path:'/phxr_submit_person_credit',
        method:methodType.post,
        params:params
    }
}

/*
 *   4.11 查询会员资产列表
 *
 */
export function phxr_query_person_assets_list(userId) {
    return {
        path:'/phxr_query_person_assets_list',
        method:methodType.post,
        params:{
            userId
        },
    }
}

/*
 *   4.12 查询房产详情
 *
 */
export function phxr_query_person_house(userId,houseId) {
    return {
        path:'/phxr_query_person_house',
        method:methodType.post,
        params:{
            userId,
            houseId
        },
    }
}

/*
 *   4.13 提交房产详情
 *
 */
export function phxr_submit_person_house(params) {
    return {
        path:'/phxr_submit_person_house',
        method:methodType.post,
        params:params
    }
}

/*
 *   4.14 删除房产详情
 *
 */
export function phxr_del_person_house(userId,houseId) {
    return {
        path:'//phxr_del_person_house',
        method:methodType.post,
        params:{
            userId,
            houseId
        },
    }
}

/*
 *   4.15 提交汽车详情
 *
 */
export function phxr_submit_person_car(params) {
    return {
        path:'/phxr_submit_person_car',
        method:methodType.post,
        params:params
    }
}

/*
 *   4.16 查询汽车详情
 *
 */
export function phxr_query_person_car(userId,carId) {
    return {
        path:'/phxr_query_person_car',
        method:methodType.post,
        params:{
            userId,
            carId
        },
    }
}

/*
 *   4.17 删除汽车详情
 *
 */
export function phxr_del_person_car(userId,carId) {
    return {
        path:'/phxr_del_person_car',
        method:methodType.post,
        params:{
            userId,
            carId
        },
    }
}

/*
 *   4.18 融资业务申请
 *
 */
export function phxr_financing_apply(personId) {
    return {
        path:'/phxr_financing_apply',
        method:methodType.post,
        params:{
            personId
        },
    }
}

/*
 *   4.19 查询融资业务列表
 *
 */
export function phxr_query_financing_list(queryType,personId,businessSate = "") {
    return {
        path:'/phxr_query_financing_list',
        method:methodType.post,
        params:{
            queryType,
            personId,
            businessSate
        },
    }
}

/*
 *   4.20 查询融资详情
 *
 */
export function phxr_query_financing_detail(businessId) {
    return {
        path:'/phxr_query_financing_detail',
        method:methodType.post,
        params:{
            businessId
        },
    }
}

/*
 *   4.21 查询融资报告
 *
 */
export function phxr_query_report(personId,ReportId) {
    return {
        path:'/phxr_query_report',
        method:methodType.post,
        params:{
            personId,
            ReportId
        },
    }
}

/*
 *   4.22 处理融资报告
 *
 */
export function phxr_deal_report(personId,ReportId,DealResult) {
    return {
        path:'/phxr_deal_report',
        method:methodType.post,
        params:{
            personId,
            ReportId,
            DealResult
        },
    }
}

/*
 *   4.23 查询咨询顾问信息
 *
 */
export function phxr_query_advisers_info(userId) {
    return {
        path:'/phxr_query_advisers_info',
        method:methodType.post,
        params:{
            userId
        },
    }
}

/*
 *   4.24 提交咨询顾问信息
 *
 */
export function phxr_submit_advisers_info(userId,params) {
    return {
        path:'/phxr_submit_advisers_info',
        method:methodType.post,
        params:{
            userId,
            ...params
        },
    }
}

/*
 *   4.25 查询资料文件列表
 *
 */
export function phxr_query_files_list(userId,fileClass,pageSize,currentPage) {
    return {
        path:'/phxr_query_files_list',
        method:methodType.post,
        params:{
            userId,
            fileClass,
            page:{
                pageSize:20,
                currentPage:1,
            }
        },
    }
}

/*
 *   4.26 处理资料文件
 *
 */
export function phxr_deal_files(userId,actFile,fileType,id,fileClass,fileName,filePath,operatorId) {
    return {
        path:'/phxr_deal_files',
        method:methodType.post,
        params:{
            userId,
            actFile,
            fileType,
            id,
            fileClass,
            fileName,
            filePath,
            operatorId
        },
    }
}

/*
 *   4.27 查询会员列表
 *
 */
export function phxr_query_person_list(userId,pageSize,currentPage) {
    return {
        path:'/phxr_query_person_list',
        method:methodType.post,
        params:{
            userId,
            page:{
                pageSize : 20,
                currentPage : 1
            }
        },
    }
}

/*
 *   4.28 查询需求信息
 *
 */
export function phxr_query_business_info(personId) {
    return {
        path:'/phxr_query_business_info',
        method:methodType.post,
        params:{
            personId
        },
    }
}

/*
 *   4.29 提交需求信息
 *
 */
export function phxr_submit_business_info(params) {
    return {
        path:'/phxr_submit_business_info',
        method:methodType.post,
        params:params,
    }
}
/*
 *   4.30 通用字典查询接口信息
 *
 */
export function phxr_query_config(dictId,dictNote,classId,classNote,subclass,subclassNote) {
    return {
        path:'/phxr_query_config',
        method:methodType.post,
        params:{
            dictId,
            dictNote,
            classId,
            classNote,
            subclass,
            subclassNote
        },
    }
}


/*
 *   4.33 首页接口
 *
 */
export function phxr_app_home(versionCode,platformType) {
    return {
        host:'103.236.253.138:9090',
        path:'/phxrProject/app/phxr/apphome/appList',
        method:methodType.post,
        params:{
            versionCode,
            platformType:platformType == 'ios'? "0" : "1",
            appType:0,
        },
    }
}

export function phxr_app_loginOut(phoneNo) {
    const  r = /^\+?[1-9][0-9]*$/;
    const param = r.test(phoneNo)?{phoneNo}:{userName:phoneNo,}
    return {
        host:'103.236.253.138:9090',
        path:'/phxrProject/app/phxr/ucenter/loginOut',
        method:methodType.post,
        params:{
            ...param,
            userType:0,
        },
    }
}

