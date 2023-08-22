
#项目连接：http://www.wabeiapp.cn/h5/reg.html?invite_code=HZH55Z
#一个长期项目，每月提一次，每次0.1%*养老金
#变量 YLCauth ，抓包软件里面的Authorization，无需root
#cron:2 12 * * *
#const $ = new Env("元老城-鼠鼠版");
#鼠鼠菜逼，只写了自动“工作”，月初提现（第103行为天数默认设置为1），凑合玩
#今天更新了客户端，但旧版客户端可以正常运行，所以接口应该没换
import requests
import random
import time
import os
from datetime import date
from datetime import datetime
token = os.getenv('YLCauth')


def daliy():
        url_list = ['http://www.wabeiapp.cn/api/v2/salary/property','http://www.wabeiapp.cn/api/v2/salary/bouns','http://www.wabeiapp.cn/api/v2/mining/start']
        for url in url_list:
                str_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
                headers = {
                        "os": "android",
                        "Version-Code": "5",
                        "Client-Version": "1.0.4",
                        "datetime": str_time,
                        "Accept": "application/json",
                        "Authorization":token,
                        "Content-Length": "0",
                        "Host": "www.wabeiapp.cn",
                        "Connection": "Keep-Alive",
                        "Accept-Encoding": "gzip",
                        "User-Agent": "okhttp/3.12.13",
                }
                i = url_list.index(url)
                if i == 0:
                        res = requests.get(url=url, headers=headers).json()
                        #print(res)
                        YLJ = res['ylb_money']
                        remain_days = res['remain_days']
                        amount = res['amount']
                        print(f'【养老金总额】：{YLJ}元\n【今日可领养老金数额】：{amount}\n【退休天数】：{remain_days}天')
                        time.sleep(random.randint(2, 5))
                elif i == 1:
                        res = requests.post(url=url, headers=headers).json()
                        msg = res['message']
                        print(f'{msg} ,这个接口只要发包就返回这个，不过应该是领取过了哈😅')
                        time.sleep(random.randint(2, 5))
                else:
                        requests.post(url=url, headers=headers).json()
                        time.sleep(random.randint(2, 5))
                        res1 = requests.post(url=url, headers=headers).json()
                        time.sleep(random.randint(2, 5))
                        res = requests.post(url=url, headers=headers).json()
                        print(res)
                        msg = res['message']
                        time.sleep(random.randint(2, 5))
                        if msg == '正在收益中':
                               print(f'【当前状态】:{msg}')
                               print('跑完脚本，开始打搅😋🥵') 
                        else:
                                res = requests.post(url=url, headers=headers).json()
                                msg = res['message']
                                print(f'【当前状态】:{msg}')
                                print('跑完脚本，开始打搅😋🥵') 
def withdraw():
      now = datetime.now()
      day_of_week = now.strftime("%a")   
      day = now.strftime("%d")
      month = now.strftime("%b")  
      year = now.strftime("%Y")
      time_str = now.strftime("%S:%M:%H")
      time_str += " GMT" 
      date_string = "{}, {} {} {} {}".format(day_of_week, day, month, year, time_str)
      time_tuple = now.timetuple()
      str_time = time.strftime('%Y-%m-%d %H:%M:%S', time_tuple)  
      headers = {
         "os": "android",
         "Version-Code": "5",
         "Client-Version": "1.0.4",
         "datetime": str_time,
          "Accept": "application/json",
          "Authorization":token,
          "Content-Length": "0",
          "Host": "www.wabeiapp.cn",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13",
          "If-Modified-Since": date_string
        }
      res = requests.get("http://www.wabeiapp.cn/api/v2/wallet/withCheck", headers=headers).json()
      if 'code' in res and code == 423:
          msg = res['message']
          print(f'【提现状态】：{msg}')
      else:
          name = res['name']
          withdraw = res['withdraw']
          print(f'【提现状态】：{name}\n【提现额】:{withdraw}')
if __name__ == "__main__":
    daliy()
    date_obj = date.today()
    day = date_obj.day
    if day == 1:
        withdraw()
    else:
        print('【提现状态】：还没到提现日期，提现日期为月首日')


    





