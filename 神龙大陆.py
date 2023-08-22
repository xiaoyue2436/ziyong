import requests
from bs4 import BeautifulSoup
import re
import os
# 项目链接http://sl.94996.com/public/reg?from=rnSn2oV6cqyypXSpr3yKZYGFzHU
# 抓登录的包 链接里带login的，这个包里的ck（例如：user_session=8s93xxx）和csrf（应该在请求提里面），你的账号#密码#csrf#ck
#环境变量LHDLCK 值为ck 多账号版，或账号@隔开
#一天一次
#cron:13 13 * * * * * *
#const $ = new Env("神龙大陆");
CKS = os.getenv("LHDLCK")

def DL():
    data_dl = {
        "phone": ph,
        "password": pw,
        "vcode": "5628",
        "csrf": CSRF
    }
    response = requests.post("http://sl.94996.com/public/login", headers=headers,data=data_dl).json()
    print(response['msg'])



def main():
    res = requests.get("http://sl.94996.com/", headers=headers)
    #print(res.text)
    htm = res.text
    soup = BeautifulSoup(htm, 'html.parser')
    name = soup.find('li', class_='username').string
    level = soup.find('li', class_='level').string
    print(f'【昵称】：{name} 【长虫等级】：{level}')
    print(soup.select_one('.info li:nth-child(1) span').text)
    print(soup.select_one('.info li:nth-child(2) span').text)
    a = soup.select_one('.info li:nth-child(1) i').text
    global GB
    GB = a
    #print(GB)

def CS():
    #res = requests.get('http://sl.94996.com/market',headers=headers)
    #htm = res.text
    #soup = BeautifulSoup(htm, 'html.parser')
    #token = re.compile(r'<meta name="csrf" content="(\w+)" />') 
    #match = token.search(htm)
    #csrf_token = match.group(1)
    #print(csrf_token)
    res1 = requests.get('http://sl.94996.com/market/apply', headers=headers)
    htm1 = res1.text
    soup1 = BeautifulSoup(htm1, 'html.parser')
    lists = soup1.find_all('input')
    DJ = lists[0]['value']   #币单价
    token = lists[3]['value']  #市场页面的token
    print(f'【币价】：{DJ}')
    data = {
            'amount': GB,
            'csrf': token,
        }
    res2 = requests.post('http://sl.94996.com/market/apply',headers=headers, data=data).json()
    print(res2)

def collect():
    res = requests.get("http://sl.94996.com/", headers=headers)
    htm = res.text
    soup = BeautifulSoup(htm, 'html.parser')
    lists = soup.find_all('div', class_='collect')
    #print(lists)
    if lists:
        for cl in lists:
            ID = cl['data-id']
            data = {
                "id": ID
            }
            res4 = requests.post("http://sl.94996.com/user/collect", headers=headers,data=data).json()
            msg = res4['msg']
            total = res4['total']
            print(f'[ID]:{ID}  [状态]：{msg}  [总额]:{total}')
    else:
        print('无悬浮球可收集')




if __name__ == "__main__":
    CKL = CKS.split("@")
    print(f"【鼠鼠大陆】共检测到{len(CKL)}个账号")
    print(f"==========================================")
    print(f"===============鼠鼠自用版🥱===============")
    i = 1
    for CK in CKL:
        print(f"========【账号{i}】开始运行脚本========")
        ph = CK.split('#')[0]
        pw = CK.split('#')[1]
        CSRF = CK.split('#')[2]
        ck = CK.split('#')[3]
        headers = {
            "cookie": ck,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43"
        }

        DL()
        main()
        collect()
        CS()
        print(f"====【账号{i}】已完成，打搅去喽🥵====")
        i += 1
        if i > len(CKL):
            break
        else:
            print("延迟一小会,准备跑下一个账号🥳")

