"""
有柿自用版
by 偷CK的六舅哥
无限刷金币
搜索 done_whole_scene_task 抓该接口的url(...done_whole_scene_task?后的url)、cookie 、argus、ladon
cookies格式 jrttck = "url#cookie#argus#ladon"
8.3 今日头条刷视频，新增部分任务，不黑一天4块左右
bug提交 https://t.me/jiangyutck
const $ = new Env('有柿');
cron:15 4,8,12,16,18,20,22 * * *
"""
import re
import requests,secrets,time,hashlib,string,random,json,os,sys
import datetime
from lib2to3.pygram import python_grammar_no_print_and_exec_statement
import os
import time
import random
import base64
import requests
import hashlib
import uuid
import json

now = str(round(time.time()*1000))
kami=""
cookies="https://api5-normal-lf.toutiaoapi.com/luckycat/news/v1/activity/done_whole_scene_task?luckydog_base=EtaIuyXXuXsbZT_yjeWSsLYzrY3vi3pnhQM6Jc1aYiT4jlc6jF--a5gybVdz-sslTiABJFFO2BIXIHEJn641FGaNcSJlip-3C8hX-qBp8IS8HdfSEistM6r4X5OpYN1lVmd-ZBVHiunX2LpBuTEuqDHh5YMRY_fMFNb8E0htvAlI3VECpqCb_Lps26fDpdi6&luckydog_data=XQjqCc6-zgmWw3cwllrDmemJoxORrPOwcBIoSxB2ZQ5b4q9PuixtB4BzSb3zMust_UamfMWyzKBzS_Jzat2Khnaz1NAsRYGJRwwpfdONll0&luckydog_token=HSICEoJY0y5EIPKqb6stPmv7OSXCnhR7N5brcdeIzVhyMKRR27tVlwn9moari9LE&luckydog_sdk_version&luckydog_api_version=8.6.0-rc.4-howy&static_settings_version=51&dynamic_settings_version=0&polling_settings_version=0&device_platform=android&os=harmony&sub_os_api=5&ssmix=a&_rticket=1691110767135&cdid=2e8fd443-8210-45af-be0e-6b7379892547&channel=huawei_315828_64&aid=315828&app_name=howy&version_code=1103&version_name=11.0.3&manifest_version_code=11030&update_version_code=110303&ab_version=4982237%2C6684248%2C6735564%2C6752618%2C6752652&ab_group=94565%2C102751&ab_feature=94563%2C102749&resolution=1080*1920&dpi=480&device_type=STF-AL10&device_brand=HONOR&language=zh&os_api=28&os_version=9&ac=wifi&dq_param=0&plugin=0&openlive_plugin_status=0&client_vid=3194524%2C3383553%2C2827921%2C6785399&pass_through=default&isTTWebView=0&session_id=00e9388a-7c3c-41ce-8ec9-e64089c10be1&common_hashtags=default&host_abi=arm64-v8a&rom_version=emotionui_9.1.0_stf-al10+9.1.0.225%28c00e125r1p9%29&immerse_pool_type=-2&iid=2887784692724435&device_id=3760802303847099&luckycat_version_name=8.6.0-rc.4-howy&luckycat_version_code=860004&lucky_is_32=0&lucky_device_score=6.9087&lucky_device_type=STF-AL10&status_bar_height=24#excgd=20230804;passport_csrf_token=973169dcfccd77b880d5c312c929adea;passport_csrf_token_default=973169dcfccd77b880d5c312c929adea;store-region=cn-sd;install_id=2887784692724435;ttreq=1$1cf10184a58c28c97f4b6c33655ef85e8f19b8d2;d_ticket=e4a58a0c95dac396fb29cb7dcb96e59dea381;n_mh=1P3jxQKF5XYbpcvPmlg0og_LlvwAsTNdYJ81j6pIDnM;sid_guard=1285ff849e884bfe2c4428b6c1589f20%7C1691110490%7C5184000%7CTue%2C+03-Oct-2023+00%3A54%3A50+GMT;uid_tt=97e4b608e7c7ca9fc99ad2310043950d;uid_tt_ss=97e4b608e7c7ca9fc99ad2310043950d;sid_tt=1285ff849e884bfe2c4428b6c1589f20;sessionid=1285ff849e884bfe2c4428b6c1589f20;sessionid_ss=1285ff849e884bfe2c4428b6c1589f20;store-region-src=uid;odin_tt=14c3e1339eb8516e3044c12e4fe88a6cf6e2aee8325b040970118707844d0d438f79f5684f0e2ced01ed2f526f79874420640075606a2e116412d675a00c0d4c#rb2FL1kun2wSqvTHWy2Mc8uv1Rkx/CrY7J2CWR0GUo/zJlwVZZpjWQMmqUk9eTBxPxevwtWbldoalEfn5/MiwqqZx2+r+bHOhqqY4YUW9GsBA/eVUFyNe75jCbTpF9Sv9yxRp+9lpunh5yfX27aSbNQ3JKFaJy6Vsrqtp89iX9RHvvdCejGXqO3Pl61vqqgJWgCzVCguYRWW5kl2ZZFtXk1OXiGathR6esxOO98kVocvJXETsFhiE2P9XsqK6dHVvdETnGG2ZRVrqAMjDycfeX6L#ZdiMd/0U9gD6X4QO0OJTjeZdWG8oN5K5FdmCuvPHxE0euPQT"
num = 10


class DY:
    def __init__(self, cookie):
        self.url = cookie.split("#")[0]
        self.cookie = cookie.split("#")[1]
        self.argus = cookie.split("#")[2]
        self.ladon = cookie.split("#")[3]
        

    def run(self):
            
                 jbsl = self.user()
                 jb1 = jbsl
                 print(f"========开始进行今日签到========")
                 point_ss , point_s = self.sign()
                 print(f"✅签到奖励金币--{point_s}")
                 print(f"✅签到奖励金币--{point_ss}")
                 tt = random.randint(10,25)
                 print(f"⚠️休息{tt}秒防止黑号~")
                 time.sleep(tt)
                 print(f"========开始进行吃饭赚钱========")
                 self.eat_coin()
                 tt = random.randint(10,25)
                 print(f"⚠️休息{tt}秒防止黑号~")
                 time.sleep(tt)
                 print(f"========开始进行奖励翻倍========")
                 self.readDouble()
                 tt = random.randint(10,25)
                 print(f"⚠️休息{tt}秒防止黑号~")
                 time.sleep(tt)
                 print(f"========开始进行阅读有奖========")
                 print(f"✅检测到配置，开始阅读{num}次")
                 for im in range(num):
                  tt = random.randint(30,40)
                  print(f"⚠️等待{tt}秒开始阅读~")
                  time.sleep(tt)
                  im = im + 1
                  self.readJB(im)
                 tt = random.randint(10,25)
                 print(f"⚠️休息{tt}秒防止黑号~")
                 time.sleep(tt)
                 print(f"========开始账号查资产========")
                 jbsl = self.user()
                 jb2 = jbsl
                 jbzg = jb2 - jb1
                 print(f"========开始计算总收益========")
                 print(f"本次运行脚本共获得金币--{jbzg}")
                 
            
   
           
             
    
    def kami(self):
        url = f"https://api2.2cccc.cc/apiv3/card_login&card={kami}&software=jrttkmo&center_id=17898"
        response = requests.request("GET", url=url)
        kamican = response.json().get('code')
        if kamican == "1":
               kamicans = response.json().get('data').get('less_time')
        else:
            kamicans = response.json().get('msg')
        return kamicans , kamican
    
    def kamidu(self,):
        url = f"https://api2.2cccc.cc/apiv3/config&client_type=card&client_content={kami}&type=read&center_id=17898" 
        response = requests.request("GET", url=url)
        if response.json().get('code') == "1":
               if response.json().get('data').get('config')  == "":
                   kamijqm = "检测到你是头次使用本脚本，即将获取机器码上传登记"
                   kamijqmyz = "检测到你是头次使用本脚本，即将获取机器码上传登记"
               else:
                   kamijqm = "机器码获取成功！"
                   kamijqmyz = response.json().get('data').get('config')
               return kamijqm , kamijqmyz
        else:
            kamijqm = "获取失败！"
            kamijqmyz = "获取失败！"
        return kamijqm , kamijqmyz
    
    def kamiwrite(self,md55):
        url = f"https://api2.2cccc.cc/apiv3/config&client_type=card&client_content={kami}&type=write&value={md55}&center_id=17898" 
        response = requests.request("GET", url=url)
        if response.json().get('code') == "1":
            kamijqmm = "登记成功！"
            return kamijqmm
        else:
            kamijqmm = "未知错误！"
            return kamijqmm

    def get_mac_address(self):
      mac=uuid.UUID(int = uuid.getnode()).hex[-12:]
      print("获取机器码成功！")
      return ":".join([mac[e:e+2] for e in range(0,11,2)])


    def user(self):
        url = f"https://api5-normal-lf.toutiaoapi.com/luckycat/gip/v1/page/profit?offset=0&share_page=profits_detail_page&income_type=2&num=300&key=score&{self.url}"
        headers = {
        'Host': 'api5-normal-lq.toutiaoapi.com',
        'x-ss-req-ticket': now,
        'x-vc-bdturing-sdk-version': '3.5.0.cn',
        'sdk-version': '2',
        'passport-sdk-version': '40452',
        'x-tt-request-tag': 'n=0;s=-1;p=0',
        'x-tt-store-region': 'cn-hn',
        'x-tt-store-region-src': 'uid',
        'x-ss-dp': '13',
        'x-argus': self.argus,
        'x-ladon': self.ladon,
        'Cookie': self.cookie,
        'content-type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
        response = requests.request("GET", url=url, headers=headers)
        
        if response.status_code == 200:
         if response.json().get("err_no") == 0:
            jbjj = response.json().get('data').get('score_balance') / 33000
            jbj = round(jbjj, 2)
            print(f"当前金币：{response.json().get('data').get('score_balance')}金币(约为 {jbj} 元) 现金：{response.json().get('data').get('cash_balance')*0.01}")
            jbsl = response.json().get('data').get('score_balance')
         else:
            print(f"获取用户信息出错{response.json()}")
            jbsl = 0
        else:
         print("用户数据过期或者错误")
         jbsl = 0
        return jbsl
    
    def sign(self):
        url = f"https://api5-normal-lf.toutiaoapi.com/luckycat/gip/v1/daily/consume_sign_in/action?{self.url}"
        payload = '{}'
        headers = {
        'Host': 'api5-normal-lq.toutiaoapi.com',
        'x-ss-req-ticket': now,
        'x-vc-bdturing-sdk-version': '3.5.0.cn',
        'sdk-version': '2',
        'passport-sdk-version': '40452',
        'x-tt-request-tag': 'n=0;s=-1;p=0',
        'x-tt-store-region': 'cn-hn',
        'x-tt-store-region-src': 'uid',
        'x-ss-dp': '13',
        'user-agent': 'com.ss.android.article.news/9360 (Linux; U; Android 13; zh_CN; V2055A; Build/TP1A.220624.014; Cronet/TTNetVersion:85102f3e 2023-06-05 QuicVersion:4ad3af5d 2023-05-09)',
        'x-argus': self.argus,
        'x-ladon': self.ladon,
        'Cookie': self.cookie,
        'content-type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
        response = requests.request("POST", url=url, headers=headers, data=payload)
        point_s = response.json().get('err_tips')
        if response.status_code == 200:
            if response.json().get("err_tips") == "成功":
                point_ss = response.json().get('data').get('toast')
                return point_s , point_ss
            else:
                point_ss = "已经上限了"
                return point_s  , point_ss
            
    def eat_coin(self):
        current_hour = time.localtime().tm_hour
        if (5 <= current_hour <= 9) or (11 <= current_hour <= 14) or (17 <= current_hour <= 20) or (21 <= current_hour <= 24):
            url = f"https://api5-normal-lf.toutiaoapi.com/luckycat/news/v1/eat/done_eat?_request_from=web&{self.url}"
            body = "{}"
            headers = {
                'x-argus': self.argus,
                'x-ladon': self.ladon,
                'Cookie': self.cookie,
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Connection': 'keep-alive'
            }
            response = requests.post(url, headers=headers, data=body)
            if response.status_code == 200:
                response_json = response.json()
                if response_json.get("err_no") == 0:
                    score_amount2 = response_json.get('err_tips')
                    score_amount = response_json.get('data').get('score_amount')
                    print(f"✅吃饭赚钱金币--{score_amount2}")
                    print(f"✅吃饭赚钱金币--{score_amount}")  
                    return True
                else:
                    print(f"⚠️吃饭赚钱金币--该时间段已领取")
                    return True
            else:
                print(f"⚠️吃饭赚钱金币--请求失败")
            return False
        else:
            print(f"⚠️吃饭赚钱金币--不在时间段内")
        return False            

            
        
            
    def readDouble(self):
        url = f"https://api5-normal-lf.toutiaoapi.com/luckycat/news/v1/activity/done_whole_scene_task?{self.url}"
        payload = {}
        payload = json.dumps(payload)
        headers = {
        'Host': 'api5-normal-lq.toutiaoapi.com',
        'x-argus': self.argus,
        'x-ladon': self.ladon,
        'Cookie': self.cookie,
        'content-type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
        
        response = requests.request("POST", url=url, headers=headers)
        point_ssp = response.json().get('err_tips')
        if response.status_code == 200:
            if response.json().get("err_tips") == "成功":
                point_sp1 = response.json().get('data').get('score_amount_origin')
                point_sp2 = response.json().get('data').get('score_amount_now')
                print(f"✅阅读奖励奖励翻倍--{point_ssp}")
                print(f"✅阅读奖励奖励翻倍--{point_sp1} >=== {point_sp2}")
                
            else:
                point_sp = "已经上限了"  
                print(f"⚠️阅读奖励奖励翻倍--{point_ssp}") 

    def readJB(self,im):
        url = f"https://api5-normal-lf.toutiaoapi.com/luckycat/news/v1/activity/done_whole_scene_task?{self.url}"
        payload = '{"group_id": "", "scene_key": "UgcInnerFeed","is_golden_egg": false}'
        headers = {
        'Host': 'api5-normal-lq.toutiaoapi.com',
        'x-ss-req-ticket': now,
        'x-vc-bdturing-sdk-version': '3.5.0.cn',
        'sdk-version': '2',
        'passport-sdk-version': '40452',
        'x-tt-request-tag': 'n=0;s=-1;p=0',
        'x-tt-store-region': 'cn-hn',
        'x-tt-store-region-src': 'uid',
        'x-ss-dp': '13',
        'x-argus': self.argus,
        'x-ladon': self.ladon,
        'Cookie': self.cookie,
        'content-type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
        
        response = requests.request("POST", url=url, headers=headers, data=payload)
        point_ssp = response.json().get('err_tips')
        if response.status_code == 200:
            if response.json().get("err_tips") == "成功":
                point_sp1 = response.json().get('data').get('score_amount')
                point_sp2 = response.json().get('data').get('total_score_amount')
                time = response.json().get('data').get('total_time') / 60
                if response.json().get('data').get('toast') == None:
                    print(f"✅第{im}次阅读奖励金币--{point_ssp}")
                    print(f"✅第{im}次阅读奖励金币--{point_sp1}，今日阅读金币：{point_sp2}，当前阅读时间:{time}分钟")
                else:
                    gg = response.json().get('data').get('toast').get('title')
                    gg2 = response.json().get('data').get('toast').get('title_desc')
                    it = re.finditer(r"已(.*?)币", gg)
                    for match in it:
                            print(f"✅阅读奖励金币--{match.group()},{gg2}")
                    print(f"✅第{im}次阅读奖励金币--{point_ssp}")
                    print(f"✅第{im}次阅读奖励金币--{point_sp1}，今日阅读金币：{point_sp2}，当前阅读时间:{time}分钟")
            else:
                point_sp = "已经上限了"  
                print(f"⚠️第{im}次阅读奖励金币--{point_ssp}") 

    def treasure_box(self):
        url = f"https://api5-normal-lf.toutiaoapi.com/luckycat/gip/v1/daily/treasure_box/detail?{self.url}"
        headers = {
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'Cookie': self.cookie,
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Connection': 'keep-alive'
        }
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            response_json = response.json()
            if response_json.get("err_no") == 0 and response_json.get('data').get('left_seconds') != 0:
                print(f"[开启宝箱]失败：还差{response_json.get('data').get('left_seconds')}秒")
                return True
            else:
                url = f"https://api5-normal-lf.toutiaoapi.com/luckycat/gip/v1/daily/treasure_box/done?{self.url}"
                body = "{\"auto_open\":false}"
                headers = {
                    'x-argus': self.argus,
                    'x-ladon': self.ladon,
                    'Cookie': self.cookie,
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                    'Connection': 'keep-alive'
                }
                response = requests.post(url, headers=headers, data=body)
                if response.status_code == 200:
                    response_json = response.json()
                    print(f"[开启宝箱]获得金币: {response_json.get('data').get('reward_amount')}")
                    return True
                else:
                    print(f"请求失败")
                    return False
        else:
            print(f"请求失败")
        return False


    def xs_sign(self):
        url = f"https://api5-normal-hl.toutiaoapi.com/luckycat/novel_sdk/v1/task/done/sign_in?{self.url}"
        payload = '{}'
        headers = {
        'Host': 'api5-normal-lq.toutiaoapi.com',
        'x-ss-req-ticket': now,
        'x-vc-bdturing-sdk-version': '3.5.0.cn',
        'sdk-version': '2',
        'passport-sdk-version': '40452',
        'x-tt-request-tag': 'n=0;s=-1;p=0',
        'x-tt-store-region': 'cn-hn',
        'x-tt-store-region-src': 'uid',
        'x-ss-dp': '13',
        'x-argus': self.argus,
        'x-ladon': self.ladon,
        'Cookie': self.cookie,
        'content-type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
        response = requests.request("POST", url=url, headers=headers, data=payload)
        pointxss = response.json().get('err_tips')
        if response.status_code == 200:
            if response.json().get("err_tips") == "成功":
                pointxxss = response.json().get('data').get('amount')
                return pointxss , pointxxss
            else:
                pointxxss = "已经上限了"
                return pointxss , pointxxss  

    def eat(self):
        url = f"https://api5-normal-hl.toutiaoapi.com/luckycat/news/v1/eat/done_eat?_request_from=web&{self.url}"
        payload = '{}'
        headers = {
        'Host': 'api5-normal-lq.toutiaoapi.com',
        'x-ss-req-ticket': now,
        'x-vc-bdturing-sdk-version': '3.5.0.cn',
        'sdk-version': '2',
        'passport-sdk-version': '40452',
        'x-tt-request-tag': 'n=0;s=-1;p=0',
        'x-tt-store-region': 'cn-hn',
        'x-tt-store-region-src': 'uid',
        'x-ss-dp': '13',
        'x-argus': self.argus,
        'x-ladon': self.ladon,
        'Cookie': self.cookie,
        'content-type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
        response = requests.request("POST", url=url, headers=headers, data=payload)
        point_cf = response.json().get('err_tips')
        if response.status_code == 200:
            if response.json().get("err_tips") == "成功":
                point_cff = response.json().get('data').get('score_amount')
                return point_cf , point_cff
            else:
                point_cff = "已经上限了"
                return point_cf  , point_cff  
            

            
    def get_step(self):
        url = f"https://api5-normal-lq.toutiaoapi.com/luckycat/news/v1/task/done/excitation_ad/?{self.url}"
        payload = '{"amount":691,"weight":0,"task_id":190,"is_post_login":false,"ad_from":"task","score_source":0,"content":"","ad_id":2,"ad_rit":"2","score_amount":691,"task_key":"excitation_ad\/","extra":{"task_name":"","track_id":"","stage_score_amount":[],"task_id":""},"image_url_light":"","image_url_button":"","ad_alias_position":"task","fixed":false,"image_url_coin":"","coin_count":691,"params_for_special":"luckydog_sdk","static_settings_version":50,"dynamic_settings_version":50,"poll_settings_version":0}'
        headers = {
        'Host': 'api5-normal-lq.toutiaoapi.com',
        'x-ss-req-ticket': now,
        'x-vc-bdturing-sdk-version': '3.5.0.cn',
        'sdk-version': '2',
        'passport-sdk-version': '40452',
        'x-tt-request-tag': 'n=0;s=-1;p=0',
        'x-tt-store-region': 'cn-hn',
        'x-tt-store-region-src': 'uid',
        'x-ss-dp': '13',
        'x-argus': self.argus,
        'x-ladon': self.ladon,
        'Cookie': self.cookie,
        'content-type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
        response = requests.request("POST", url=url, headers=headers, data=payload)
        pointstep = response.json().get('err_tips')
        if response.status_code == 200:
            if response.json().get("err_tips") == "成功":
                pointstepp = response.json().get('data').get('reward_amount')
                return pointstep , pointstepp
            else:
                pointstepp = "已经上限了"
                return pointstep , pointstepp




    def eat_sp(self):
        url = f"https://api5-normal-lq.toutiaoapi.com/luckycat/news/v1/task/done/excitation_ad/?{self.url}"
        payload = '{"amount":691,"weight":0,"task_id":181,"is_post_login":false,"ad_from":"task","score_source":0,"content":"","ad_id":2,"ad_rit":"2","score_amount":691,"task_key":"excitation_ad\/","extra":{"task_name":"","track_id":"","stage_score_amount":[],"task_id":""},"image_url_light":"","image_url_button":"","ad_alias_position":"task","fixed":false,"image_url_coin":"","coin_count":691,"params_for_special":"luckydog_sdk","static_settings_version":50,"dynamic_settings_version":50,"poll_settings_version":0}'
        headers = {
        'Host': 'api5-normal-lq.toutiaoapi.com',
        'x-ss-req-ticket': now,
        'x-vc-bdturing-sdk-version': '3.5.0.cn',
        'sdk-version': '2',
        'passport-sdk-version': '40452',
        'x-tt-request-tag': 'n=0;s=-1;p=0',
        'x-tt-store-region': 'cn-hn',
        'x-tt-store-region-src': 'uid',
        'x-ss-dp': '13',
        'x-argus': self.argus,
        'x-ladon': self.ladon,
        'Cookie': self.cookie,
        'content-type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
        response = requests.request("POST", url=url, headers=headers, data=payload)
        point_cfs = response.json().get('err_tips')
        if response.status_code == 200:
            if response.json().get("err_tips") == "成功":
                point_cffs = response.json().get('data').get('reward_amount')
                return point_cfs , point_cffs
            else:
                point_cffs = "已经上限了"
                return point_cfs  , point_cffs  
            
    def read(self):
        url = f"https://api5-normal-hl.toutiaoapi.com/luckycat/news/v1/activity/done_whole_scene_task?{self.url}"
        payload = '{"group_id": "","scene_key": "IndexTabFeed","is_golden_egg": false}'
        headers = {
        'Host': 'api5-normal-lq.toutiaoapi.com',
        'x-ss-req-ticket': now,
        'x-vc-bdturing-sdk-version': '3.5.0.cn',
        'sdk-version': '2',
        'passport-sdk-version': '40452',
        'x-tt-request-tag': 'n=0;s=-1;p=0',
        'x-tt-store-region': 'cn-hn',
        'x-tt-store-region-src': 'uid',
        'x-ss-dp': '13',
        'x-argus': self.argus,
        'x-ladon': self.ladon,
        'Cookie': self.cookie,
        'content-type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
        response = requests.request("POST", url=url, headers=headers, data=payload)
        point_read = response.json().get('err_tips')
        if response.status_code == 200:
            if response.json().get("err_tips") == "成功":
                point_readd = response.json().get('data').get('score_amount')
                return point_readd , point_read
            else:
                point_readd = "已经上限了"
                return point_readd , point_read
            
    def kgg(self):
        url = f"https://api5-normal-lq.toutiaoapi.com/luckycat/news/v1/task/done/excitation_ad/?{self.url}"
        payload = '{"amount":691,"weight":0,"task_id":210,"is_post_login":false,"ad_from":"task","score_source":0,"content":"","ad_id":2,"ad_rit":"2","score_amount":691,"task_key":"excitation_ad\/","extra":{"task_name":"","track_id":"","stage_score_amount":[],"task_id":""},"image_url_light":"","image_url_button":"","ad_alias_position":"task","fixed":false,"image_url_coin":"","coin_count":691,"params_for_special":"luckydog_sdk","static_settings_version":50,"dynamic_settings_version":50,"poll_settings_version":0}'
        headers = {
        'Host': 'api5-normal-lq.toutiaoapi.com',
        'x-ss-req-ticket': now,
        'x-vc-bdturing-sdk-version': '3.5.0.cn',
        'sdk-version': '2',
        'passport-sdk-version': '40452',
        'x-tt-request-tag': 'n=0;s=-1;p=0',
        'x-tt-store-region': 'cn-hn',
        'x-tt-store-region-src': 'uid',
        'x-ss-dp': '13',
        'x-argus': self.argus,
        'x-ladon': self.ladon,
        'Cookie': self.cookie,
        'content-type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
        response = requests.request("POST", url=url, headers=headers, data=payload)
        pointgg = response.json().get('err_tips')
        if response.status_code == 200:
            if response.json().get("err_tips") == "成功":
                pointggg = response.json().get('data').get('reward_amount')
                return pointgg , pointggg
            else:
                pointggg = "已经上限了"
                return pointgg , pointggg 
             
    def open_box(self):
        url = f"https://api5-normal-lq.toutiaoapi.com/luckycat/news/v1/task/done/excitation_ad/?{self.url}"
        payload = '{"amount":691,"weight":0,"task_id":188,"is_post_login":false,"ad_from":"task","score_source":0,"content":"","ad_id":2,"ad_rit":"2","score_amount":691,"task_key":"excitation_ad\/","extra":{"task_name":"","track_id":"","stage_score_amount":[],"task_id":""},"image_url_light":"","image_url_button":"","ad_alias_position":"task","fixed":false,"image_url_coin":"","coin_count":691,"params_for_special":"luckydog_sdk","static_settings_version":50,"dynamic_settings_version":50,"poll_settings_version":0}'
        headers = {
        'Host': 'api5-normal-lq.toutiaoapi.com',
        'x-ss-req-ticket': now,
        'x-vc-bdturing-sdk-version': '3.5.0.cn',
        'sdk-version': '2',
        'passport-sdk-version': '40452',
        'x-tt-request-tag': 'n=0;s=-1;p=0',
        'x-tt-store-region': 'cn-hn',
        'x-tt-store-region-src': 'uid',
        'x-ss-dp': '13',
        'x-argus': self.argus,
        'x-ladon': self.ladon,
        'Cookie': self.cookie,
        'content-type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
        response = requests.request("POST", url=url, headers=headers, data=payload)
        point2 = response.json().get('err_tips')
        if response.status_code == 200:
            if response.json().get("err_tips") == "成功":
                point = response.json().get('data').get('reward_amount')
                return point2 , point
            else:
                point = "已经上限了"
                return point2 , point
        
    def open_boxlx(self):
        url = f"https://api5-normal-lq.toutiaoapi.com/luckycat/news/v1/task/done/excitation_ad/?{self.url}"
        payload = "{\"task_id\":225,\"exci_extra\":{\"cid\":1770200687669342,\"req_id\":\"20230701160644C93FF92F37A3A1714A5C\",\"rit\":80047},\"extra\":{\"stage_score_amount\":[],\"track_id\":\"\",\"draw_score_amount\":null,\"draw_track_id\":null,\"task_id\":\"\",\"task_name\":\"\",\"enable_fuzzy_amount\":false,\"custom_id\":null}}"
        headers = {
        'Host': 'api5-normal-lq.toutiaoapi.com',
        'x-ss-req-ticket': now,
        'x-vc-bdturing-sdk-version': '3.5.0.cn',
        'sdk-version': '2',
        'passport-sdk-version': '40452',
        'x-tt-request-tag': 'n=0;s=-1;p=0',
        'x-tt-store-region': 'cn-hn',
        'x-tt-store-region-src': 'uid',
        'x-ss-dp': '13',
        'x-argus': self.argus,
        'x-ladon': self.ladon,
        'Cookie': self.cookie,
        'content-type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive'
    }
        response = requests.request("POST", url=url, headers=headers, data=payload)
        point4 = response.json().get('err_tips')
        if response.status_code == 200:
            if response.json().get("err_no") == 0:
                point3 = response.json().get('data').get('reward_amount')
                return point4,point3
            else:
                point3 = "已经上限了"
                return point4,point3

    

if __name__ == "__main__":
    cookies = cookies.split("@")
    print(f"【有柿视频】共检测到{len(cookies)}个账号")
    print(f"==========================================")
    print(f"有柿视频（小毛） by:偷CK的六舅哥\n7.23 有柿视频刷视频，新增部分任务，不黑一天1-2块左右\nbug提交 https://t.me/jiangyutck")
    i = 1
    for cookie in cookies:
        print(f"========【账号{i}】开始运行脚本========")
        i += 1
        DY(cookie).run()
        
        time.sleep(random.randint(5, 10))
        if i > len(cookies):
            break
        else:
            print("延迟一小会,准备跑下一个账号")
