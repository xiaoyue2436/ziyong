"""
cron:  27 14,22 * * *
const $ = new Env("广汽丰田2")
"""
import json
import os
import random
import re
import time
import requests
import execjs
import base64
from Crypto.Cipher import PKCS1_v1_5 as Cipher_pkcs1_v1_5, AES
from Crypto.PublicKey import RSA
from Crypto.Util.Padding import pad

# 要安装 PyExecJS Crypto rsa bs4 pycryptodome 库
# https://app.nevapp.gtmc.com.cn/bff/vhc/vhcApp/vhcNet/miniModule?phone=xxxx 这个地址可以抓请求头里的refreshToken
# 在gqft_cookie2.txt里面添加refreshToken
# 有可能点赞跑不完，还有兑换功能，自己琢磨，只能跑一个号，你可以建立多个gqft.py  gqft_cookie2.txt来跑


# 兑换商品Id 和 积分
id = '1613107693092749313'
price = '399'

# 请求数据加密
publicKey = '''-----BEGIN RSA PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA49jxpFBAoEslNYrHb0wT8nCpGBn3hvjgToNkp7lFpsSeRS7WbHoFJEvmf1U83cHrbTzRFRowPft/FGBw6/6dZcmMjMgz1n0FWlqk0d7QjEDL+t9Dj9tH9e/qdGfJ3bzR0ZgpgQMpKpx5I5fcEgzMYnHWGLZBY+v+PlPTN/1mz0nnRtIIxb8YuZZFvadfGTC8jeD7tMERpd5zENml5cLbVujENsag9AIpvLdvR6fSewi3l9QmssWpty50UpcAWsvAs+ExRYyUe/s1lwfSdSciW6Lrj4sp4MMaWifdTQUbKKEeuRugEqJSDrxhxoybEbSbl2CYaTR8kifZ1n+lcAh6cQIDAQAB
-----END RSA PUBLIC KEY-----'''

privateKey = '''-----BEGIN RSA PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDj2PGkUECgSyU1isdvTBPycKkYGfeG+OBOg2SnuUWmxJ5FLtZsegUkS+Z/VTzdwettPNEVGjA9+38UYHDr/p1lyYyMyDPWfQVaWqTR3tCMQMv630OP20f17+p0Z8ndvNHRmCmBAykqnHkjl9wSDMxicdYYtkFj6/4+U9M3/WbPSedG0gjFvxi5lkW9p18ZMLyN4Pu0wRGl3nMQ2aXlwttW6MQ2xqD0Aim8t29Hp9J7CLeX1Cayxam3LnRSlwBay8Cz4TFFjJR7+zWXB9J1JyJbouuPiyngwxpaJ91NBRsooR65G6ASolIOvGHGjJsRtJuXYJhpNHySJ9nWf6VwCHpxAgMBAAECggEBANhcVTI8BvJwCThrvXBhpPtuohPB7Lxdrtq/iKCAnbR8NvLpRDKkOCe8b3fw4CiQkdgcjUrloHPrU0RtRC3FjX9vwaiaICeIdsHTG3ozhIP6r/hddJGxoAbZuSCqwhVuzSuju53H+5p8FciH1zHIt3iwMqcqwrN5EOfsv8EGP0+MSn8PYDVarUx1mQzJKs4iLQ6XIZlizp7WeH3RWW78zvpLnj5BcFNyR0zanf/tV8cZvVJ5A/Za5Uj2b9O4IBdriBUduCjNz9p/02cxdVxu9A1JYkyP9sYNha9zkRs+F68OhBdmptX6/LFMWENiTNDHxmkRGlBrAbA4oe4tMn4eiEUCgYEA89/AV/t+1Bq0xYX8Eim8EXgQ9r8jKzTqaevjzXGW3AuaWbg5PlETQcPLV9oMobRg2xqV4y/hm7rc275/nm2xQ24Zhu+xMZ8M+MqcxhpwuERAcTT1OHI3uQFZTq73CKo/GQX408e3okEZtt3CF6kxbYfiqvJ65o3FaFh+NAfzTm8CgYEA7y0xEE7uQuNkkc0o3F2/ulbcF4jB9KJvYDDFZAWW/MBlj5QnamhP9GDbKi4AMC1+L1gNDznrtiMBAPWyyjxl9HPVC7KIIxjkMUryuEgVwsywSbLfzyQYhat8Cmdhcko67iywX7dlgczM2qcP5FtLB2Oz7uF8v/uc8zbrH8V7NR8CgYAD4ZS7EbqT/5TO6/H2DAn9MS777lDN+Dqe0u0+MMeY2upq8R6gGkQ3MLmEvWikDi3YbtTh17o8cz3elWqMh+xhSVhIqHnmc0SOlRLnqDYRCK0J4DDi5BZ08EuOkARIdAUrDchG/o+ymlyhZ2gWXk/2EUqPM+q2zpzMq1Pe2h2KKwKBgCtaLqV9GRTIsMb4v+pJl+IHsncVk8pq0vNFg9HgbYC8wuvmd8qCw9NQ5wjbM6+H33JnbF6RKhdmet0Yq+KaVgScJkargp+R+HKy2hHrBv67KU0CfizGpyc7cQ1VtcUIjWv0b7e5v01quMr9MxU6MvxQ5yFqf7kwuz8eejnVCsMTAoGALBNEx3hWwpWSr9+c+wiDMR8VjVYRFDJqhq869UtLMv2MrESR1VVAQOIeQK+sHriuVCZsh/ZDqyj54AN0BUIZc5tqecCZd2xXMVyQ8f/sdHztlglnqxH12Vg8DA7JK1oBDw4hQjXx/WMrjsUp7Ktp15bfo+qzIvwphlpaoGP0H/k=
-----END RSA PRIVATE KEY-----'''

# 返回数据解析
res_publicKey = """-----BEGIN RSA PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA49jxpFBAoEslNYrHb0wT8nCpGBn3hvjgToNkp7lFpsSeRS7WbHoFJEvmf1U83cHrbTzRFRowPft/FGBw6/6dZcmMjMgz1n0FWlqk0d7QjEDL+t9Dj9tH9e/qdGfJ3bzR0ZgpgQMpKpx5I5fcEgzMYnHWGLZBY+v+PlPTN/1mz0nnRtIIxb8YuZZFvadfGTC8jeD7tMERpd5zENml5cLbVujENsag9AIpvLdvR6fSewi3l9QmssWpty50UpcAWsvAs+ExRYyUe/s1lwfSdSciW6Lrj4sp4MMaWifdTQUbKKEeuRugEqJSDrxhxoybEbSbl2CYaTR8kifZ1n+lcAh6cQIDAQAB
-----END RSA PUBLIC KEY-----
"""
res_privateKey = '''-----BEGIN RSA PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCaKMrIwU9els3xVszLtzvCJT+Kc8mosvygguXo0f+IqjSxvfCNbtobxIckxkBK7ipY8CK9k8WjcSsyIUd132CsGvFoUejD+sf+53wEy4z1YOgeoatll5/wMFGGZfDEyRbYd7WGTGPBZ6goENqplN5AJW6fIq8SskWZa59uq1E3Q9rM8iLg3n+955xvEb412vmTPsEWYL2qc6HUpEFxpXAg+CWjthYihZKkeOgQFr9LV3sB5bRAgtoXf/dnuWMK1jg4z7efaAxxNovQfRWXDEcgiRONmuS+l+M2y3YoPt1EFYSOZuU5GepuPPDFMxoLJ1CE2pk20ZUFIrgOisSICnkdAgMBAAECggEAKjVxEHadXLC9wo6ZlE2fNxErzKTXWjFnqiss+ApHhQvVUbVH3/GyFlhBCHifseR0A9X8LRwAyTd7NEaYYlW/CmB2KLIEoWRQziJjeoyhE65s37Y0T6SsTf9s0vembLsCXlKoiRTxW0seZ5n1xOjV0YpuN3Qvq1bUZ6VoCc0ud4rU09gDI8nDEkS0sBZbV8wVxpksoksX7YdpgJtqCMezOdnY9LqWiC0Y1km9szaNRr3X5rGTVJ+ZnTu2votXdKCMzVLXE/hm2eMRAk2droOzwKFLYlijZZg7m1SfNWlSCEelPKPRmv2RnoIGXn6EvqXLLT4zg4iOzh0dRrvT+BLloQKBgQD7b/x8aLfVvv5/dBFDN6exXpSY3gvsXhb3GhE/DO8dHRN1qcJt2ocriJEbZnD5F2DAQIT+DdG1Uihg9bTinDbhtilG1PdWQIqIcxRbMiJjtWIIEkTpFVnShZ4VNe56lseAAxAPG8z5Wzy25HiIUovnH5CiZiKesqRbkILjsrtiowKBgQCc9OpdmS38HSizOZ4Mieg3nkCm+OCZQAuIQqokALUC/Gb8sae2ZO6GGtdr6+Xo8B/WMlkmapNEFqSSE3xepjR9O1J9efvp3BJ2j/1UTO0NPlcm0lyijG3epqx8iaWJWF2wezs9w5qZtFUve/5um88ztbuhMNbgFdVIPGN9BoQxPwKBgQCCaqayvPpFkwicgU6G5/JCLMW0uM/EbVVKHCo/4uyP1EoIqOHhawzbhr2FUdBdU0Pq1ExnHjHc891f1XJabB6HWp30UHhuM5HnjpFLcCioQSe0+gzmPR3W9Vl2tP+adGTMQEpvG8Nov2sxjjX6t547ZoL1yTZBzHU1zTIm+sj5MwKBgAhcV3ui5DswxnE9mXirg+4qhOEgEr63FaYtfuiqDPpavZWqVPe3SqlkFqOODlIpMFj1l6AfPzb6ScvqM87K5bLiDRPYAp5DdcxRATqTWnFBJ91OiVazSkr47+k2X9YAGgWDmvVATSTw4TTFUxlLPW9Qt+zvMBMBtrnBVb9cMIB7AoGALNeRpqZKdjbvklQLMDnKyV7p9wuz669SX4LPODcMqf8q0wsL8/0jWTuyyePr8z+V/BI2SVHcT3CaBsmnNRU739DXLAcQ4R2d6Ak5zmmJrOcWl1QiQIcNZUp+fGEBTOl3YOxIFryGX15MocX6bE9JXj4k2L6P7XlfoLAme4801bI=
-----END RSA PRIVATE KEY-----'''

#RSA 加密方法

def rsa_ecrypt(YO):
    # 加密方法
    ecrypt_text = YO.encode('utf8')
    pub_key = RSA.importKey(publicKey)
    cipher = Cipher_pkcs1_v1_5.new(pub_key)
    rsa_text = base64.b64encode(cipher.encrypt(ecrypt_text))
    # print(rsa_text)
    return rsa_text.decode('utf8')
# RSA 解密方法
def rsa_decrypt(ciphertext,privateKey):
    # 加密的数据
    # ciphertext = encryptKey
    # print(privateKey)
    # print(ciphertext)
    private_key = RSA.importKey(privateKey)
    cipher = Cipher_pkcs1_v1_5.new(private_key)
    plaintext = cipher.decrypt(base64.b64decode(ciphertext),None)
    return plaintext.decode('utf8')
# 对称AES加密
def aes_encrypt(key,vi,data):
    data = pad(data.encode('utf8'), 16)
    cipher = AES.new(key.encode('utf8'), AES.MODE_CBC, vi.encode('utf8'))
    encryptedbytes = cipher.encrypt(data)
    # 加密后得到的是bytes类型的数据，使用Base64进行编码,返回byte字符串
    encodestrs = base64.b64encode(encryptedbytes)
    # 对byte字符串按utf-8进行解码
    enctext = encodestrs.decode('utf8')
    return enctext
# 对称加密AES 解密
def aes_decrypt(key,vi,data):
    # print(key,vi)
    # data = encryptData
    data = data.encode('utf8')
    key = key
    vi = vi
    encodebytes = base64.decodebytes(data)
    # 将加密数据转换位bytes类型数据
    cipher = AES.new(key.encode('utf8'), AES.MODE_CBC, vi.encode('utf8'))
    text_decrypted = cipher.decrypt(encodebytes)
    # print(text_decrypted.decode('utf8'))
    return text_decrypted


# 更新gqft_cookie2里面的数据
def set_Au(AU):
    with open(file='gqft_cookie2.txt', mode='w', encoding='utf-8') as f:
        js_data = f.write(AU)
        f.close()
# 获取gqft_cookie2里面的数据
def get_Au():
    with open(file='gqft_cookie2.txt', mode='r', encoding='utf-8') as f:
        js_data = f.read()
        f.close()
    return js_data
# 解密sig
def get_sig(Au):
    with open(file='index.js', mode='r', encoding='utf-8') as f:
        js_data = f.read()
        f.close()
    ctx = execjs.compile(js_data)
    data = ctx.call('a',Au)
    return data

# 签到
def sign():
    data = get_sig(get_Au())
    datas = data.split('--')
    # timemi + '--' + romdom + '--' + MO(scren)
    timestamp = datas[0]
    nonce = datas[1]
    AU = datas[2]
    sig = datas[3]
    header = {
        'Host': 'gw.nevapp.gtmc.com.cn',
        'Connection': 'keep-alive',
        'Content-Length': '61',
        'operateSystem': 'h5',
        'nonce': nonce,
        'Authorization': AU,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36 BundleId/com.gtmc.nevapp DSApp/1.5.0 StatusBarHeight/32 BottomBarHeight/0',
        'timestamp': timestamp,
        'appId': 'a41022a5-ad1e-eb24-4fb4-7d1b7a7958f2',
        'sig': sig,
        'Accept': '*/*',
        'Origin': 'https://app.nevapp.gtmc.com.cn',
        'X-Requested-With': 'com.gtmc.nevapp',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://app.nevapp.gtmc.com.cn/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }
    url = 'https://gw.nevapp.gtmc.com.cn/main/api/marketing/lgn/task/sec/signin'
    data = '{"encryptKey":"wezWvsPzLyWQLGUIhMwsdwW1lL3ONsTVYK6SZOFNflWRR57sAiT6XWJkcoB4QewoQNnY7ZMKsToyuai4R6Rtq/6O8OShLKgH7Gtl4I9uPjfolxOTWTel1b6d3Cptu6mcZkSM1vHsVUrnYDbfNKvAdArPs+9agIzSjB9uVXBljkOpccddKBVjG1dIUFIHJ/nXKsXje3DoBg6Z9Bo0+rL5RQBYflD0ta6toWsEyY3ya+a5UDvL3ixZez6/lduTIrN04AsLVO0R2lNXEG4X0QqwN1Xn2R64PA0h/S7vkqCRGqPblE+twKkJk4avYTQ1KcYHLBvPJxQoje3CfBltGK6z0w==","encryptData":"umSN8N6TqpGxxZH/1SXOxQ=="}'
    res = requests.post(url, headers=header,data=data)
    res_data = jm_res_data(res.json()['encryptKey'],res.json()['encryptData'])
    print(res_data)
    patter = '"message":"(.*?)"'
    value = re.compile(patter).findall(res_data)[0]
    message = value.encode().decode("unicode_escape")
    print("签到: " + message)

# 浏览
def read(encryptKey,encryptData):
    data = get_sig(get_Au())
    datas = data.split('--')
    # timemi + '--' + romdom + '--' + MO(scren)
    timestamp = datas[0]
    nonce = datas[1]
    AU = datas[2]
    sig = datas[3]
    header = {
        'Host': 'gw.nevapp.gtmc.com.cn',
        'Connection': 'keep-alive',
        'Content-Length': '32',
        'operateSystem': 'h5',
        'nonce': nonce,
        'Authorization': AU,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36 BundleId/com.gtmc.nevapp DSApp/1.5.0 StatusBarHeight/32 BottomBarHeight/0',
        'timestamp': timestamp,
        'appId': 'a41022a5-ad1e-eb24-4fb4-7d1b7a7958f2',
        'sig': sig,
        'Accept': '*/*',
        'Origin': 'https://app.nevapp.gtmc.com.cn',
        'X-Requested-With': 'com.gtmc.nevapp',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://app.nevapp.gtmc.com.cn/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }
    url = 'https://gw.nevapp.gtmc.com.cn/main/api/community/sec/post/detail'
    data = '{"encryptKey":"' + encryptKey + '","encryptData":"' + encryptData + '"}'
    res = requests.post(url, headers=header, data=data)
    res_data = jm_res_data(res.json()['encryptKey'], res.json()['encryptData'])
    patter = '"message":"(.*?)"'
    value = re.compile(patter).findall(res_data)[0]
    message = value.encode().decode("unicode_escape")
    print("浏览: " + message)

# 点赞
def like(encryptKey,encryptData):
    data = get_sig(get_Au())
    datas = data.split('--')
    # timemi + '--' + romdom + '--' + MO(scren)
    timestamp = datas[0]
    nonce = datas[1]
    AU = datas[2]
    sig = datas[3]
    header = {
        'Host': 'gw.nevapp.gtmc.com.cn',
        'Connection': 'keep-alive',
        'Content-Length': '666',
        'operateSystem': 'h5',
        'nonce': nonce,
        'Authorization': AU,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046141 Mobile Safari/537.36 BundleId/com.gtmc.nevapp DSApp/1.2.0 StatusBarHeight/32 BottomBarHeight/0',
        'timestamp': timestamp,
        'appId': 'a41022a5-ad1e-eb24-4fb4-7d1b7a7958f2',
        'sig': sig,
        'Accept': '*/*',
        'Origin': 'https://app.nevapp.gtmc.com.cn',
        'X-Requested-With': 'com.gtmc.nevapp',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://app.nevapp.gtmc.com.cn/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }
    url = 'https://gw.nevapp.gtmc.com.cn/main/api/community/lgn/sec/user/like'
    data = '{"encryptKey":"'+encryptKey+'","encryptData":"'+encryptData+'"}'
    # print("加密的" + data)
    res = requests.post(url, headers=header, data=data)
    res_data = jm_res_data(res.json()['encryptKey'], res.json()['encryptData'])
    patter = '"message":"(.*?)"'
    value = re.compile(patter).findall(res_data)[0]
    message = value.encode().decode("unicode_escape")
    print("点赞: " + message)
# 转发
def forward(encryptKey,encryptData):
    data = get_sig(get_Au())
    datas = data.split('--')
    # timemi + '--' + romdom + '--' + MO(scren)
    timestamp = datas[0]
    nonce = datas[1]
    AU = datas[2]
    sig = datas[3]
    header = {
        'Host': 'gw.nevapp.gtmc.com.cn',
        'Connection': 'keep-alive',
        'Content-Length': '666',
        'operateSystem': 'h5',
        'nonce': nonce,
        'Authorization': AU,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046141 Mobile Safari/537.36 BundleId/com.gtmc.nevapp DSApp/1.2.0 StatusBarHeight/32 BottomBarHeight/0',
        'timestamp': timestamp,
        'appId': 'a41022a5-ad1e-eb24-4fb4-7d1b7a7958f2',
        'sig': sig,
        'Accept': '*/*',
        'Origin': 'https://app.nevapp.gtmc.com.cn',
        'X-Requested-With': 'com.gtmc.nevapp',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://app.nevapp.gtmc.com.cn/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }
    url = 'https://gw.nevapp.gtmc.com.cn/main/api/community/lgn/sec/user/forward'
    data = '{"encryptKey":"'+encryptKey+'","encryptData":"'+encryptData+'"}'
    # encrypt_data = Aes(data)
    res = requests.post(url, headers=header, data=data)
    res_data = jm_res_data(res.json()['encryptKey'], res.json()['encryptData'])
    patter = '"message":"(.*?)"'
    value = re.compile(patter).findall(res_data)[0]
    message = value.encode().decode("unicode_escape")
    print("转发: " + message)
# 查询文章id
def get_topicId():
    data = get_sig(get_Au())
    datas = data.split('--')
    # timemi + '--' + romdom + '--' + MO(scren)
    timestamp = datas[0]
    nonce = datas[1]
    AU = datas[2]
    sig = datas[3]
    header = {
        'Host': 'gw.nevapp.gtmc.com.cn',
        'Connection': 'keep-alive',
        'operateSystem': 'h5',
        'nonce': nonce,
        'Authorization': AU,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046141 Mobile Safari/537.36 BundleId/com.gtmc.nevapp DSApp/1.2.0 StatusBarHeight/32 BottomBarHeight/0',
        'timestamp': timestamp,
        'appId': 'a41022a5-ad1e-eb24-4fb4-7d1b7a7958f2',
        'sig': sig,
        'Accept': '*/*',
        'Origin': 'https://app.nevapp.gtmc.com.cn',
        'X-Requested-With': 'com.gtmc.nevapp',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://app.nevapp.gtmc.com.cn/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }
    url = 'https://gw.nevapp.gtmc.com.cn/main/api/community/topic/moreHot?pageNo=1&pageSize=10'
    res = requests.get(url, headers=header)
    topicIds = []
    top_datas = res.json()['body']['list']
    for i in top_datas:
        topicIds.append(i['id'])
    ra = random.randrange(0,6)
    return topicIds[ra]

# 获取当前总积分
def get_socre():
    data = get_sig(get_Au())
    datas = data.split('--')
    # timemi + '--' + romdom + '--' + MO(scren)
    timestamp = datas[0]
    nonce = datas[1]
    AU = datas[2]
    sig = datas[3]
    header = {
        'Host': 'gw.nevapp.gtmc.com.cn',
        'Connection': 'keep-alive',
        'Content-Length': '402',
        'operateSystem': 'h5',
        'nonce': nonce,
        'Authorization': AU,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36 BundleId/com.gtmc.nevapp DSApp/1.5.2 StatusBarHeight/32 BottomBarHeight/0',
        'timestamp': timestamp,
        'appId': 'a41022a5-ad1e-eb24-4fb4-7d1b7a7958f2',
        'sig': sig,
        'Accept': '*/*',
        'Origin': 'https://app.nevapp.gtmc.com.cn',
        'X-Requested-With': 'com.gtmc.nevapp',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://app.nevapp.gtmc.com.cn/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }
    url = 'https://gw.nevapp.gtmc.com.cn/main/api/sec/lgn/integral/my-total-num'
    YO = datas[4]
    encryptKey = rsa_ecrypt(YO)
    key = YO.split('@DS@')[0]
    vi = YO.split('@DS@')[1]
    req_data = '{"gtmcUid":""}'
    encryptData = aes_encrypt(key, vi, req_data)
    data = '{"encryptKey":"' + encryptKey + '","encryptData":"' + encryptData + '"}'
    res = requests.post(url, headers=header,data=data)

    res_data = jm_res_data(res.json()['encryptKey'],res.json()['encryptData'])
    print(res_data)
    patter = '"score":(\d+)'
    score =re.compile(patter).findall(res_data)[0]
    print("当前积分为: "+score)

# 解密数据
def jm_res_data(encryptKey,encryptData):
    plaintext = rsa_decrypt(encryptKey, res_privateKey)
    res_key = plaintext.split('@DS@')[0]
    res_vi = plaintext.split('@DS@')[1]
    res_data = aes_decrypt(res_key, res_vi, encryptData).decode('utf8')
    return res_data

#获取，执行代码
def get_information_list():
    data = get_sig(get_Au())
    datas = data.split('--')
    # timemi + '--' + romdom + '--' + MO(scren)
    timestamp = datas[0]
    nonce = datas[1]
    AU = datas[2]
    sig = datas[3]
    header = {
        'Host': 'gw.nevapp.gtmc.com.cn',
        'Connection': 'keep-alive',
        'operateSystem': 'h5',
        'nonce': nonce,
        'Authorization': AU,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046141 Mobile Safari/537.36 BundleId/com.gtmc.nevapp DSApp/1.2.0 StatusBarHeight/32 BottomBarHeight/0',
        'timestamp': timestamp,
        'appId': 'a41022a5-ad1e-eb24-4fb4-7d1b7a7958f2',
        'sig': sig,
        'Accept': '*/*',
        'Origin': 'https://app.nevapp.gtmc.com.cn',
        'X-Requested-With': 'com.gtmc.nevapp',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://app.nevapp.gtmc.com.cn/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }
    # 社区
    topicId = get_topicId()
    url_list = 'https://gw.nevapp.gtmc.com.cn/main/api/community/topic/getTopicContentById?topicId='+topicId+'&pageNo=2&pageSize=10'
                # ['1627511914097430529','1594929619251740674']
              # https://gw.nevapp.gtmc.com.cn/main/api/community/topic/getTopicContentById?topicId=1594929619251740674&pageNo=1&pageSize=10
    print(url_list)
    # https://gw.nevapp.gtmc.com.cn/main/api/community/topic/getTopicContentById?topicId=1663944145997123586&pageNo=2&pageSize=10
    # https://gw.nevapp.gtmc.com.cn/main/api/community/topic/getTopicContentById?topicId=1651403181885677569&pageNo=2&pageSize=10
    #
    res = requests.get(url_list, headers=header)
    # 资讯
    # url_list = 'https://gw.nevapp.gtmc.com.cn/main/api/community/information/page'
    # data = '{"pageNo":1,"pageSize":10,"subjectIds":"1586546244262449154"}'
    # res = requests.post(url_list,headers=header,data=data)
    # print("id获取成功")
    ids = res.json()['body']['list']
    # 签到
    sign()
    for i in ids:
        id = i['subjectId']
        data = get_sig(get_Au())
        datas = data.split('--')
        YO = datas[4]
        encryptKey = rsa_ecrypt(YO)
        key = YO.split('@DS@')[0]
        vi = YO.split('@DS@')[1]
        # print(key,vi)
        data = '{"subjectId":"'+str(id)+'","subjectType":"POST"}'
        # {"subjectId":"1665992755333013505","subjectType":"POST"}
        read_data = '{"postId":"'+str(id)+'"}'
        encryptData = aes_encrypt(key,vi,data)
        read_encryptData = aes_encrypt(key, vi, read_data)
        # 阅读
        read(encryptKey,read_encryptData)
        # 点赞
        like(encryptKey,encryptData)
        # 转发
        forward(encryptKey,encryptData)

        time.sleep(2)

# 兑换商品
def get_skuId():
    data = get_sig(get_Au())
    datas = data.split('--')
    # timemi + '--' + romdom + '--' + MO(scren)
    timestamp = datas[0]
    nonce = datas[1]
    AU = datas[2]
    sig = datas[3]
    header = {
        'Host': 'gw.nevapp.gtmc.com.cn',
        'Connection': 'keep-alive',
        'Content-Length': '402',
        'operateSystem': 'h5',
        'nonce': nonce,
        'Authorization': AU,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36 BundleId/com.gtmc.nevapp DSApp/1.5.2 StatusBarHeight/32 BottomBarHeight/0',
        'timestamp': timestamp,
        'appId': 'a41022a5-ad1e-eb24-4fb4-7d1b7a7958f2',
        'sig': sig,
        'Accept': '*/*',
        'Origin': 'https://app.nevapp.gtmc.com.cn',
        'X-Requested-With': 'com.gtmc.nevapp',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://app.nevapp.gtmc.com.cn/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }
    url = 'https://gw.nevapp.gtmc.com.cn/main/api/mall/good/detail'
    data1 = '{"id":"'+str(id)+'"}'
    res1 = requests.post(url,data=data1,headers=header)
    skuId = res1.json()["body"]["goodsSkuList"][0]["id"]
    return skuId

def get_preOrderId():
    data = get_sig(get_Au())
    datas = data.split('--')
    timestamp = datas[0]
    nonce = datas[1]
    AU = datas[2]
    sig = datas[3]
    header = {
        'Host': 'gw.nevapp.gtmc.com.cn',
        'Connection': 'keep-alive',
        'Content-Length': '402',
        'operateSystem': 'h5',
        'nonce': nonce,
        'Authorization': AU,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36 BundleId/com.gtmc.nevapp DSApp/1.5.2 StatusBarHeight/32 BottomBarHeight/0',
        'timestamp': timestamp,
        'appId': 'a41022a5-ad1e-eb24-4fb4-7d1b7a7958f2',
        'sig': sig,
        'Accept': '*/*',
        'Origin': 'https://app.nevapp.gtmc.com.cn',
        'X-Requested-With': 'com.gtmc.nevapp',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://app.nevapp.gtmc.com.cn/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }
    url = 'https://gw.nevapp.gtmc.com.cn/main/api/sec/lgn/mall/order/goto-order-page'
    YO = datas[4]
    encryptKey = rsa_ecrypt(YO)
    key = YO.split('@DS@')[0]
    vi = YO.split('@DS@')[1]
    skuId = get_skuId()
    req_data = '[{"skuId":"'+skuId+'","quantity":"1"}]'
    encryptData = aes_encrypt(key, vi, req_data)
    data = '{"encryptKey":"' + encryptKey + '","encryptData":"' + encryptData + '"}'
    res = requests.post(url, headers=header, data=data)
    res_data = jm_res_data(res.json()['encryptKey'], res.json()['encryptData'])
    patter = '"preOrderId":"(\d+)"'
    value = re.compile(patter).findall(res_data)[0]
    return value

def duihuan():
    data = get_sig(get_Au())
    datas = data.split('--')
    # timemi + '--' + romdom + '--' + MO(scren)
    timestamp = datas[0]
    nonce = datas[1]
    AU = datas[2]
    sig = datas[3]
    url = 'https://gw.nevapp.gtmc.com.cn/main/api/sec/lgn/mall/order/create'
    header = {
        'Host': 'gw.nevapp.gtmc.com.cn',
        'Connection': 'keep-alive',
        'Content-Length': '402',
        'operateSystem': 'h5',
        'nonce': nonce,
        'Authorization': AU,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36 BundleId/com.gtmc.nevapp DSApp/1.5.2 StatusBarHeight/32 BottomBarHeight/0',
        'timestamp': timestamp,
        'appId': 'a41022a5-ad1e-eb24-4fb4-7d1b7a7958f2',
        'sig': sig,
        'Accept': '*/*',
        'Origin': 'https://app.nevapp.gtmc.com.cn',
        'X-Requested-With': 'com.gtmc.nevapp',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://app.nevapp.gtmc.com.cn/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }
    YO = datas[4]
    encryptKey = rsa_ecrypt(YO)
    key = YO.split('@DS@')[0]
    vi = YO.split('@DS@')[1]
    skuId = get_skuId()
    preOrderId = get_preOrderId()
    req_data = '{"dealAmount":null,"dealAmountPoint":'+str(price)+',"discountAmount":null,"discountAmountPoint":null,"couponCode":"","preOrderId":"'+str(preOrderId)+'","remark":"","addressId":"1668444172833390593","skuList":[{"skuId":"'+str(skuId)+'","quantity":1}],"channel":1}'
    encryptData = aes_encrypt(key, vi, req_data)
    data = '{"encryptKey":"' + encryptKey + '","encryptData":"' + encryptData + '"}'
    res = requests.post(url, headers=header, data=data)
    res_data = jm_res_data(res.json()['encryptKey'], res.json()['encryptData'])
    patter = '"message":"(.*?)"'
    value = re.compile(patter).findall(res_data)[0]
    message = value.encode().decode("unicode_escape")
    print("兑换: " + message)


# 获取信息，并执行日常任务
get_information_list()
# 获取积分
get_socre()
# 兑换商品
# duihuan()




