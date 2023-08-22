import requests
import os 
#垃圾盘子，谁充钱，鼠鼠我笑他一整年，🤣👉🤡
#需要先注册http://slsjm5.guizoufengqun.com/#/pages/simple/reg?tjrcode=563020
#环境变量名SLSJCK  值为{mobile:你的账号,password:你的密码}  多账号@分开
#new Env("森林世界")
#cron:18 10,16 * * *
CKS = os.getenv('SLSJCK')
#登录&获取token
def LN():
    header = {
    'user-agent': 'Mozilla/5.0 (Linux; Android 12; JEF-AN00 Build/HUAWEIJEF-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.105 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/37.0)',
    'Content-Type': 'application/json',
    # 'Content-Length': '58',
    'Host': 'slsjapi.guizoufengqun.com',
    'Connection': 'Keep-Alive',
    # 'Accept-Encoding': 'gzip',
    }
    res = requests.post('http://slsjapi.guizoufengqun.com/api/MemUser/accountLogin', headers=header, data=data0).json()
    #print(res)
    msg = res['msg']
    token = res['data']['access_token']
    print(msg)
    global headers
    headers = {
    'Authorization': token,
    'user-agent': 'Mozilla/5.0 (Linux; Android 12; JEF-AN00 Build/HUAWEIJEF-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.105 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/37.0)',
    'Content-Type': 'application/json',
    # 'Content-Length': '13',
    'Host': 'slsjapi.guizoufengqun.com',
    'Connection': 'Keep-Alive',
    # 'Accept-Encoding': 'gzip',
    }
#做任务
def RW():
    lists = ['{VideoID:1}','{VideoID:2}','{VideoID:3}','{VideoID:4}','{VideoID:5}']
    for i in range(5):
        data = lists[i]
        response = requests.post('http://slsjapi.guizoufengqun.com/api/MemVideo/UpdateGgZt', headers=headers, data=data)
        print(response.text)
#领取奖励
def LQ():
    json_data = {}
    response = requests.post('http://slsjapi.guizoufengqun.com/api/MemVideo/LinQuSy', headers=headers, json=json_data)
    print(response.text)
#账户状态
def check():
    response = requests.get('http://slsjapi.guizoufengqun.com/api/MemVideo/GetVip', headers=headers).json()
    #print(response)
    name = response['data']['nickName']
    SY = response['data']["jifenGold"]
    yugu = response['data']['yugu']
    one = response['data']['one']
    two = response['data']['two']
    three = response['data']['three']
    four = response['data']['four']
    five = response['data']['five']
    print(f'【昵称】：{name} 【预估币数】：{yugu} 【现有币数】：{SY}\n【任务状态（0未完成，1完成）】：\n[任务1]：{one} [任务2]:{two} [任务3]:{three} [任务4] :{four} [任务5]:{five}')


if __name__ == "__main__":
    CKL = CKS.split("@")
    print(f"【鼠鼠世界】共检测到{len(CKL)}个账号")
    print(f"==========================================")
    print(f"===============鼠鼠自用版🥱===============")
    i = 1
    for CK in CKL:
        print(f"========【账号{i}】开始运行脚本========")
        data0 = f'{CK}'
        LN()
        RW()
        LQ()
        check()
        print(f"====【账号{i}】已完成，打搅去喽🥵====")
        i += 1
        if i > len(CKL):
            break
        else:
            print("延迟一小会,准备跑下一个账号🥳")
