/*

群友投稿 易学家园

实物或者虚拟卡


export soy_ddbl_data="token" 

抓包域名 api.dandan818.com

请求头上的uid&access_token值

多账号用 换行 或 @ 或 #分割

一天一次
cron:0 6-23 * * *

*/

const $ = new Env("蛋蛋部落")
const author = '作者TG_ID:@ls_soy';
const notify = require("./sendNotify");
// 通知控制,1发送, 0不发送
const get_msg = 0
// 是否并发, true是,false否
const Concurrency = true



const variable = "soy_ddbl_data"
let app_v = '1.0'

try {
	Crypto_js = require('crypto-js');
} catch (err) {
	throw new Error("\n找不到依赖 crypto-js ,请自行安装\n");
}
try {
	CryptoJs = $.isNode() ? require('crypto-js') : '';
} catch (err) {
	throw new Error("\n找不到依赖 crypto-js ,请自行安装\n");
}
try {
	fs = $.isNode() ? require('fs') : '';
} catch (err) {
	throw new Error("\n找不到依赖 fs ,请自行安装\n");
}
try {
	os = $.isNode() ? require('os') : '';
} catch (err) {
	throw new Error("\n找不到依赖 OS ,请自行安装\n");
}
try {
	axios = $.isNode() ? require('axios') : '';
} catch (err) {
	throw new Error("\n找不到依赖 axios ,请自行安装\n");
}

let yyz_vip = false,  yyz_fen = ''
let subTitle = '', user_num = 0, execAcList = [], user_data = '', app_sj = false
let ql_version = '', TG_id = '', ql_path = __dirname, qlxt = '', yyz_token = '', up_token = '', variable_style = ''
//===========================================================================


async function main(userInfo) {
    await userInfo.tribe_info()//部落信息
    await userInfo.main_task()//主线任务
    await userInfo.line_reward()//在线元宝
    await userInfo.off_line()//挂机时长
    await userInfo.skill()//技能列表
    await userInfo.maps_info()//探索状态
    await userInfo.pool_list()//召唤状态
    await userInfo.arrior()//英雄列表
   
    
    
}


class UserInfo {
    constructor(index, str) {
        try {
            this.num = index + 1
            this.uid = str.split('&')[0]
            this.token = str.split('&')[1]
        } catch (error) {
            console.log(error)
            
        }
    }
    
    //主线任务状态
    async main_task() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/main_task?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 主线状态:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            if(result.data.parameter>=result.data.target){
                                this.task_id = result.data.id
                                await this.main_reward()
                            }
                            
                        }else {
                            console.log(`账号 ${this.num} 主线状态:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //领取主线任务状态
    async main_reward() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/receive_main_task_reward?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=Q_V1_P14,Q_V1_P14&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&task_id=${this.task_id}&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 主线奖励:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            console.log(`账号 ${this.num} 主线奖励:领取成功`)
                            
                        }else {
                            console.log(`账号 ${this.num} 主线奖励:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //领取金币
    async line_reward() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/receive_tribe_off_line_reward?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=Q_V1_P14,Q_V1_P14&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 在线元宝:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            console.log(`账号 ${this.num} 在线元宝:领取成功`)
                            
                        }else {
                            console.log(`账号 ${this.num} 在线元宝:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //挂机时长
    async off_line() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/maps_off_line?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 挂机时长:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            if(result.data['off_time']>=60){
                                this.off_time = result.data['off_time']
                                await this.line_receive()
                            }
                            
                        }else {
                            console.log(`账号 ${this.num} 挂机时长:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //挂机奖励
    async line_receive() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/maps_receive_off_line?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&off_time=${this.off_time}&os=android&screen_height=2208&screen_width=1080&sm_device_id=&source=游戏&system_version=10&typ=1&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 挂机奖励:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            console.log(`账号 ${this.num} 挂机奖励:领取成功`)
                            
                        }else {
                            console.log(`账号 ${this.num} 挂机奖励:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //技能列表
    async skill() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v3/user/skill?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=4&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&tuid=${this.uid}&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 技能列表:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data.substring(1))
                        //console.log(JSON.stringify(result))
                        if(result.errno == 0){
                            //console.log('技能')
                            for(let a in result.data){
                                if(result.data[a].status!=0){
                                    //console.log('开通技能')
                                    this.skill_id = result.data[a].id
                                    await this.open_skill()
                                    
                                }else{
                                    this.skill_id = result.data[a].id
                                    this.up_level = parseInt(result.data[a].level) + 1
                                    //console.log(this.skill_id,this.up_level)
                                    this.up_name = esult.data[a].name
                                    await this.upgrade_skill()
                                }
                                
                                
                                
                            }
                            
                            
                            
                        }else {
                            console.log(`账号 ${this.num} 技能列表:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //开通技能
    async open_skill() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v3/user/skill/open?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=4&os=android&screen_height=2208&screen_width=1080&skill_id=${this.skill_id}&sm_device_id=&system_version=10&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    
                    if(err){
                        console.log(`账号 ${this.num} 开通技能:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data.substring(1))
                        //var result = JSON.parse(data)
                        //console.log(result)
                        if(result.errno == 0){
                            console.log(`账号 ${this.num} 开通技能:成功`)
                            //await this.maps_info()
                        }else {
                            console.log(`账号 ${this.num} 开通技能:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //升级技能
    async upgrade_skill() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v3/user/skill/upgrade?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&is_proof=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&scenario=游戏&screen_height=2208&screen_width=1080&skill_id=${this.up_level}&sm_device_id=&system_version=10&tools_id=${this.skill_id}&trade_type=gamegold&uid=${this.uid}&umeng_token=`
        //console.log(this.body)
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 升级技能${this.up_name}:返回 ${err}`)
                    }else{
                        //var result = JSON.parse(data)
                        var result = JSON.parse(data.substring(1))
                        if(result.errno == 0){
                            console.log(`账号 ${this.num} 升级技能${this.up_name}:成功`)
                            //await this.maps_info()
                        }else {
                            console.log(`账号 ${this.num} 升级技能${this.up_name}:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //探索状态
    async maps_info() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/maps_info?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=Q_V1_P14,Q_V1_P14&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=4&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 探索状态:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            if(result.data.condition[0].status==0){
                                console.log(`账号 ${this.num} 探索状态:未满足条件`)
                                //console.log(result.data.condition[0].desc)
                                /*if(result.data.condition[0].desc=='开通所有技能'){
                                   this.skill_type = 'all'
                                }else if(result.data.condition[0].desc.indexOf('开通')>=0){
                                    //console.log('开通')
                                    this.desc = result.data.condition[0].desc
                                    this.skill_type = 'open'
                                }else if(result.data.condition[0].desc.indexOf('达到')>=0){
                                    //console.log('升级')
                                    this.desc = result.data.condition[0].desc
                                    this.skill_type = 'up'
                                }
                                await this.skill()*/
                            }else{
                                this.level = result.data.level
                                await this.maps_fight()
                            }
                            
                        }else {
                            console.log(`账号 ${this.num} 探索状态:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //探索
    async maps_fight() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/maps_fight?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&level=${this.level}&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 探索:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            if(result.data.status==0){
                                console.log(`账号 ${this.num} 探索:第${result.data.level}关探索失败`)
                            }else{
                                console.log(`账号 ${this.num} 探索:获得${result.data.reward[0].item_num}月光石`)
                                await this.maps_info()
                            }
                            
                        }else {
                            console.log(`账号 ${this.num} 探索:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //用户状态
    async tribe_info() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/tribe_info?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 部落状态:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            console.log(`账号 ${this.num} 部落状态:\n---等级:${result.data.level}||月光石:${result.data['material_num']}||升级需要:${result.data.upgrade}`)
                            await this.property()
                            if(result.data['material_num']>=result.data.upgrade){
                                this.server_id = parseInt(result.data.level) + 1
                                await this.upgrade()
                            }
                        }else {
                            console.log(`账号 ${this.num} 部落状态:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //升级
    async upgrade() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/tribe_upgrade?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=${this.server_id}&network_carrier=&network_type=1&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 升级:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            console.log(`账号 ${this.num} 升级:获得${result.data['upgrade_reward']['item_num']}元`)
                            
                        }else {
                            console.log(`账号 ${this.num} 升级:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //余额
    async property() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/property?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 余额:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            console.log(`---余额:${result.data.money}||元宝:${result.data.gamegold}||金币:${result.data.gold}`)
                            
                            if(result.data.money>0.3){
                                this.money = result.data.money
                                await this.cashOut()
                            }
                        }else {
                            console.log(`账号 ${this.num} 余额:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //提现
    async cashOut() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v5/newuser/cashOut?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 提现:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            console.log(`账号 ${this.num} 提现:成功提现${this.money}元`)
                        }else {
                            console.log(`账号 ${this.num} 提现:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //召唤状态
    async pool_list() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/pool_list?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&uid=${this.uid}&umeng_token=`
        
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 召唤状态:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            if(result.data['call_card_pool'][0]['next_free_time']==0){
                                this.summon_num = 1
                                await this.summon()
                            }else if(result.data['user_summon_stone']>=10){
                                this.summon_num = 10
                                await this.summon()
                            }
                        }else {
                            console.log(`账号 ${this.num} 召唤状态:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //免费召唤
    async summon() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/summon?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&cost_type=2&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&pool_id=1&screen_height=2208&screen_width=1080&sm_device_id=&summon_num=${this.summon_num}&system_version=10&uid=${this.uid}&umeng_token=`
        //console.log(this.body)
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 召唤:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            console.log(`账号 ${this.num} 召唤:${this.summon_num}次成功`)
                        }else {
                            console.log(`账号 ${this.num} 召唤:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //英雄列表
    async arrior() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/list?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&cost_type=2&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&pool_id=1&screen_height=2208&screen_width=1080&sm_device_id=&summon_num=${this.summon_num}&system_version=10&uid=${this.uid}&umeng_token=`
        //console.log(this.body)
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 英雄列表:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            for(let a in result.data.list){
                                if(result.data.list[a]['advance_grade']==-1){
                                    this.warrior_id = result.data.list[a].id
                                    await this.grade_up()
                                }
                            }
                        }else {
                            console.log(`账号 ${this.num} 英雄列表:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    //合成英雄
    async grade_up() {
        await Sleep_time(1,2)
        this.time = new Date().getTime()//new Date().getTime()//Math.round(new Date().getTime()
        this.g_url = 'v4/warrior/advance_grade_up?os=android'
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&cost_type=2&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&pool_id=1&screen_height=2208&screen_width=1080&sm_device_id=&summon_num=${this.summon_num}&system_version=10&uid=${this.uid}&umeng_token=`
        this.body = `access_token=${this.token}&app_name=dandanbuluo&app_oaid=&app_version=5.6.2&base_band_version=&channel=tencent&device_name=&device_token=&device_vendor=&did=&distinct_id=${this.uid}&event_time=${this.time}&is_beta=N&latitude=0.0&location=火星&longitude=0.0&my_server_id=2&network_carrier=&network_type=1&os=android&screen_height=2208&screen_width=1080&sm_device_id=&system_version=10&uid=${this.uid}&umeng_token=&warrior_id=${this.warrior_id}`
        //console.log(this.body)
        let req = this.req_data(1)
        //console.log(req)
        return new Promise((resolve) => {
            $.post(req, async (err, resp, data) => {
                try {
                    //console.log(data)
                    if(err){
                        console.log(`账号 ${this.num} 合成英雄:返回 ${err}`)
                    }else{
                        var result = JSON.parse(data)
                        if(result.errno == 0){
                            console.log(`账号 ${this.num} 合成英雄:${result.errmsg}`)
                        }else {
                            console.log(`账号 ${this.num} 合成英雄:${result.errmsg}`)
                            
                        }
                        
                    }
                    
                } catch (e) {} finally {
                    resolve();
                };
            });
        });
    };
    
    
    
    
    
    
    
    
    req_data(mode) {
        //let time = Math.round(new Date().getTime() / 1000).toString()
        let time = new Date().getTime()
        if(mode==0){
            return {
                url: `https://api.miaopin.mobi`,
                headers: {"Host":" api.dandan818.com","x-dandan-nonce":" 58902cd3712c4d679c18fc3d3163e03c","x-dandan-timestamp":" 1687951586155","x-dandan-signature":" 1c4877d2229145558ed224ac6944b275","content-type":" application/x-www-form-urlencoded;charset=UTF-8","content-length":" 750","accept-encoding":" gzip","user-agent":" okhttp/4.9.3"},
            }
        }else if(mode==1){
            let nonce = CryptoJs.MD5(this.time).toString()
            let sign = CryptoJs.MD5((`POST\nVoiceOfDD\nX-Dandan-Nonce:${nonce}\nX-Dandan-Timestamp:${this.time}\n${this.body}`)).toString()
            return {
                url: `https://api.dandan818.com/api/${this.g_url}`,
                headers: {"Host":"api.dandan818.com","x-dandan-nonce":nonce,"x-dandan-timestamp":this.time,"x-dandan-signature":sign,"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8","Content-Length":this.body.length,"accept-encoding":"gzip","user-agent":"okhttp/4.9.3"},
                body:this.body
            }
        }
        
    }

}




//===========================================================================
// 入口
!(async () => {
    console.log(`\n【soy脚本文件免责声明】：\nTG频道:https://t.me/LjkwwdZZRPs5OWU1\nTG机器人:https://t.me/soyyun_bot\n【此脚本文件仅用于测试和学习，使用测试脚本行为均有封号风险。不能保证其合法性、准确性、完整性和有效性，作者本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。】\n【本脚本文件，只有在作者TG频道、TG群以及仓库分享，从未在其他地方分享，包括但不限于任何公众号、论坛、群体以及任何形式的转载、发布，任何人请勿将脚本文件用于包括但不限于商业、非法目的甚至解密等行为，否则后果自负】`);
    
    let users = await getUsers(variable, async (index, element) => {
        let userInfo = new UserInfo(index, element);
        return userInfo;
    });
    
    //console.log(users)
    if(Concurrency){
        list = [];
        users.forEach(async element => {
            //console.log(users)
            list.push(main(element));
        });
        await Promise.all(list);
    }else{
        for(let a in users){
            await main(users[a])
        }
    }

})().catch((e) => console.log(e)).finally(() => $.done());



// ==============================================================================
async function getUsers(ckName, fnUserInfo) {
    let userList = [];
    let userCookie = process.env[ckName];
    let envSplicer = ["@", "\n", "#"];
    
    if (userCookie) {
        let e = envSplicer[0];
        for (let o of envSplicer)
            if (userCookie.indexOf(o) > -1) {
                e = o;
                break;
            }
        let arr = userCookie.split(e);
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            element && userList.push(await fnUserInfo(index, element));
        }
        user_num = userList.length;
    } else {
        console.log("未找到CK");
    }
    console.log(`\n=== 脚本执行 - 北京时间：${new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString()} ===`);
    
    console.log(`\n===【共 ${user_num} 个账号】===`), !0;
    
    return userList;
}

function encrypt(msg) {
    /*console.log(msg)
    let cipher = Crypto_js.AES.encrypt(Crypto_js.enc.Utf8.parse(msg), Crypto_js.enc.Utf8.parse('6Gt5J8nY'), { iv: Crypto_js.enc.Utf8.parse('12345678'), mode: Crypto_js.mode.CBC, padding: Crypto_js.pad.Pkcs7 });
    let cip = Crypto_js.enc.Base64.stringify(cipher.ciphertext);
    return cip;*/
    var n = Crypto_js.enc.Utf8.parse(msg),
    r = Crypto_js.enc.Utf8.parse("6Gt5J8nY"),
    i = Crypto_js.enc.Utf8.parse(12345678);
    return Crypto_js.DES.encrypt(n, r, {
        iv: i,
        mode: Crypto_js.mode.CBC,
        padding: Crypto_js.pad.Pkcs7
    }).ciphertext.toString(Crypto_js.enc.Base64)
};

function getstr(n) {
    let chars = '1234567890qwertyuiopasdfghjklzxcvb';
    let iv = "";
    for(let R = 0; R < n ; R ++) {
        let R_id = Math.ceil(Math.random()*chars.length-1);
        iv += chars[R_id];
    }
    return iv;
}
    
//================================================================

async function Sleep_time(min, max) {
  //return Math.floor(Math.random() * (max - min + 1)) + min;
  await wait(Math.floor(Math.random() * (max * 1000 - min * 1000 + 1)) + min * 1000)
  
}
async function wait(t) {
    return new Promise(e => setTimeout(e, t))
}
//时间戳转时间
function Format_time(){
    //num:0 YYYY-MM-DD  num:1  YYYY-MM-DD hh:mm:ss // timestamp:时间戳
    //将时间戳转换成正常时间格式
    //var date = new Date(timestamp*1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var date = new Date(new Date().getTime())
    var Y = date.getFullYear() + "-";
    var M =(date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
    var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
    var h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" ;
    var m = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
    var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
    //console.log(Y + M + D + h + m + s)
    let t_time = Y + M + D + h + m + s;
    return t_time //Y + M + D + h + m + s;
}






// ================================================================================

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
