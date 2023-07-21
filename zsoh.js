APP：掌上瓯海
 功能：完成任务，获得积分
 抓包：https://vapp.tmuyun.com/ 任意-请求头中X-SESSION-ID和X-ACCOUNT-ID
 变量：zsoh      填 X-SESSION-ID的值&X-ACCOUNT-ID的值
 定时一天一次
 */
 const $ = new Env('掌上瓯海')
 const notify = $.isNode() ? require('./sendNotify') : '';
 const CryptoJS = require("crypto-js");
 const salt = "FR*r!isE5W";
 const appid = 78;
 let cookiesArr = [],
   message = "",


   channelId = ["643faff1e305b47056547555", "643fafe2e305b47056547554", "643fb00de305b47056547556", "643fb0dde305b4705654755a", "643fb120e305b4705654755b", "643fb17ae305b4705654755e"]
 cookie = ($.isNode() ? process.env.zsoh : $.getdata("zsoh")) || ``
 helpAu = ($.isNode() ? process.env.zsohhelpAu : $.getdata("zsohhelpAu")) || true
 !(async () => {
     await requireConfig();
     for (let i = 0; i < cookiesArr.length; i++) {
         //console.log(cookiesArr[i])
       if (cookiesArr[i]) {
         sessionid = cookiesArr[i].split('&')[0];
         $.ACCOUNT = cookiesArr[i].split('&')[1];
         msg = '';
         $.index = i + 1;
         $.nickName = '';
         $.userId = '';
         $.mobile = '';
         $.userIdStr = '';
         $.vehicleToken = '';
         $.taskList = {}
         $.queryList = {}
         //await getCookie(cookiesArr[i])
         await account_detail();
         console.log(`\n******开始【🐳掌上瓯海账号${$.index}】${$.nickName}|${$.mobile}*********\n`);
         await main()
       }
     }
     if ($.isNode() && message) {
       await notify.sendNotify(`${$.name}`, `${message}`)
     }
   })()
   .catch((e) => $.logErr(e))
   .finally(() => $.done())

 async function main() {
   if ($.userId) {
     console.log(`【获取任务列表】`)
     await numberCenter()
     console.log(`【开始完成任务】`)
     await article()
     for (i = 0; i < $.taskList.length; i++) {
       if ($.taskList[i].completed === 1) {
         console.log(`[${$.taskList[i].name}]已完成`)
         continue
       } else {
         console.log(`去完成任务：${$.taskList[i].name}`)
         await doTask($.taskList[i])
       }
     }
     if (helpAu == true) {
       console.log(`【前往助力作者】`)
       await invite()
     }
     console.log(`【查询账号信息】`)
     await account_detail()
     console.log(`拥有:[${$.integral}]积分 | 等级:[${$.grade}]-${$.grade_name}`)
     msg += `拥有:[${$.integral}]积分 \n等级:[${$.grade}]-${$.grade_name}\n\n`
     await showMsg()
   } else console.log(`获取userId失败，退出任务`)
 }
 async function doTask(task) {
   let type = JSON.stringify(task.id);
   //console.log(task)
   let num = Number(task.frequency) - Number(task.finish_times)
   //console.log(`去完成：${task.name},id：${type}`)
   await signin()
   switch (type) {
     case '337': //签到
       await signin()
       break;
     case '2002': //新闻资讯阅读
       for (j = 0; j < num && j < $.acticleList.length; j++) {
         console.log(`去浏览：${$.acticleList[j].list_title}`)
         await read($.acticleList[j].id)
         await $.wait(1500)
       }
       break;
     case '1998': //分享资讯给好友
       for (j = 0; j < num && j < $.acticleList.length; j++) {
         console.log(`去分享：${$.acticleList[j].list_title}`)
         await share($.acticleList[j].id)
         await $.wait(1500)
       }
       break;
     case '2001': //新闻资讯评论
       for (j = 0; j < num && j < $.acticleList.length; j++) {
         console.log(`去评论：${$.acticleList[j].list_title}`)
         await comment($.acticleList[j].id)
         await $.wait(1500)
       }
       break;
     case '2000': //新闻资讯点赞
       for (j = 0; j < num && j < $.acticleList.length; j++) {
         console.log(`去点赞：${$.acticleList[j].list_title}`)
         await like($.acticleList[j].id)
         await $.wait(1500)
       }
       break;
     case '1999': //使用本地服务
       for (j = 0; j < num && j < $.acticleList.length; j++) {
         await local()
         await $.wait(1500)
       }
       break;
     case '2009': //邀请
       console.log(`邀请功能暂未上线`)
       break;
     default:
       console.log(`${task.name}暂未上线,请反馈作者`);
   }
 }
 /**
  * 
  * 获取登录Code
  */
  async function credential_auth() {
   let url = {
     url: `https://passport.tmuyun.com/web/oauth/credential_auth`,
     body: `client_id=48&password=${encodeURIComponent($.pwd)}&phone_number=${$.mobile}`,
     headers: {
       'Host': 'passport.tmuyun.com',
       'Content-Type': 'application/x-www-form-urlencoded',
       'Accept-Encoding': 'gzip, deflate, br'
     }
   }
   return new Promise(resolve => {
     $.post(url, async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
             //console.log(JSON.stringify(data));
             if (data.code === 0) {
               await login(data.data.authorization_code.code)
             } else {
               console.log(data.message)
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data);
       }
     })
   })
 }
 /**
  * 
  * 登录
  */
 async function login(code) {
   let body = 'code=' + code
   sessionid = '63777162fe3fc118b09fab89'
   return new Promise(resolve => {
     $.post(taskPostUrl('/api/zbtxz/login', body), async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
             //console.log(JSON.stringify(data));
             if (data.code === 0) {
               sessionid = data.data.session.id
             } else {
               //console.log(JSON.stringify(data))
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data);
       }
     })
   })
 }
 /**
  * 
  * 获取账号信息
  */
 async function account_detail() {
   let body = ''
   //console.log(taskUrl("/api/user_mumber/account_detail", body))
   return new Promise(resolve => {
     $.get((taskUrl("/api/user_mumber/account_detail", body)), async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
             //console.log(JSON.stringify(data));
             if (data.code === 0) {
               $.userId = data.data.rst.id
               $.nickName = data.data.rst.nick_name
               $.mobile = data.data.rst.mobile
               $.grade = data.data.rst.grade
               $.grade_name = data.data.rst.grade_name
               $.integral = data.data.rst.total_integral
             } else {
               console.log(JSON.stringify(data))
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data);
       }
     })
   })
 }
 /**
  * 
  * 获取任务列表
  */
 async function numberCenter() {
   let body = '?is_new=1'
   //console.log(taskUrl("/api/user_mumber/numberCenter", body))
   return new Promise(resolve => {//https://vapp.tmuyun.com/api/user_mumber/numberCenter?is_new=1
     $.get((taskUrl("/api/user_mumber/numberCenter", body)), async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
            // console.log(JSON.stringify(data));
             if (data.code === 0) {
               console.log(`获取成功！`)
               $.taskList = data.data.rst['user_task_list']
               //console.log(JSON.stringify($.taskList))
             } else {
               console.log(JSON.stringify(data))
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data);
       }
     })
   })
 }
 /**
  * 
  * 签到
  */
 async function signin() {
   let body = ''
   return new Promise(resolve => {
     $.get((taskUrl("/api/user_mumber/sign", body)), async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
             //console.log(JSON.stringify(data));
             if (data.code === 0) {
               console.log(`签到成功！获得：${data.data.signIntegral}积分`)
             } else {
               console.log(data.message)
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data);
       }
     })
   })
 }
 /**
  * 
  * 获取文章
  */
 async function article() {
   let body = `?channel_id=${channelId[Math.floor(Math.random()*channelId.length)]}&isDiFangHao=false&is_new=1&list_count=${Math.floor(Math.random()*5+1)*10}&size=10&start=${Date.now()}`
   return new Promise(resolve => {
     $.get((taskUrl("/api/article/channel_list", body)), async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
             //console.log(JSON.stringify(data));
             if (data.code === 0) {
               $.acticleList = data.data['article_list']
             } else {
               console.log(data.message)
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data);
       }
     })
   })
 }
 /**
  * 
  * 浏览新闻资讯
  */
 async function read(id) {
   let body = `?id=${id}`
   return new Promise(resolve => {
     $.get((taskUrl("/api/article/detail", body)), async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
             //console.log(JSON.stringify(data));
             if (data.code === 0) {
               console.log(`浏览成功！`)
               if (data.data['score_notify']) console.log(`浏览任务完成，获得[${data.data.score_notify.integral}]积分`)
             } else {
               console.log(data.message)
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data);
       }
     })
   })
 }
 /**
  * 
  * 分享资讯给好友
  */
 async function share() {
   let body = `member_type=3&memberType=3`
   return new Promise(resolve => {
     $.post((taskPostUrl("/api/user_mumber/doTask", body)), async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
             //console.log(JSON.stringify(data));
             if (data.code === 0) {
               console.log(`分享成功！`)
               if (data.data) console.log(`分享任务完成，获得[${data.data.score_notify.integral}]积分`)
             } else {
               console.log(data.message)
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data);
       }
     })
   })
 }
 /**
  * 
  * 新闻资讯评论
  */
 async function comment(id) {
   let body = `channel_article_id=${id}&content=1`
   return new Promise(resolve => {
     $.post((taskPostUrl("/api/comment/create", body)), async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
             //console.log(JSON.stringify(data));
             if (data.code === 0) {
               console.log(`评论成功！`)
               if (data.data) console.log(`评论任务完成，获得[${data.data.score_notify.integral}]积分`)
             } else {
               console.log(data.message)
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data);
       }
     })
   })
 }
 /**
  * 
  * 新闻资讯点赞
  */
 async function like(id) {
   let body = `id=${id}&action=true`
   return new Promise(resolve => {
     $.post((taskPostUrl("/api/favorite/like", body)), async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
             //console.log(JSON.stringify(data));
             if (data.code === 0) {
               console.log(`点赞成功！`)
               if (data.data) console.log(`点赞任务完成，获得[${data.data.score_notify.integral}]积分`)
             } else {
               console.log(data.message)
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data);
       }
     })
   })
 }
 /**
  * 
  * 使用本地服务
  */
 async function local() {
   let body = `member_type=6&memberType=6`
   return new Promise(resolve => {
     $.post((taskPostUrl("/api/user_mumber/doTask", body)), async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
             //console.log(JSON.stringify(data));
             if (data.code === 0) {
               console.log(`使用成功！`)
               if (data.data) console.log(`使用成功，获得[${data.data.score_notify.integral}]积分`)
             } else {
               console.log(data.message)
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data);
       }
     })
   })
 }
 /**
  * 
  * 助力
  */
 async function invite() {
   let body = `ref_code=GY6SQ9`
   return new Promise(resolve => {
     $.post((taskPostUrl("/api/account/update_ref_code", body)), async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
             //console.log(JSON.stringify(data));
             if (data.code === 0) {
               console.log(`助力成功！`)
             } else {
               console.log(data.message)
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data);
       }
     })
   })
 }
 /**
  * 
  * API
  */
 function taskUrl(type, body) {
   getSign(type)
   return {
     url: `https://vapp.tmuyun.com${type}${body}`,
     headers: {
       "X-SESSION-ID": sessionid,
       "X-REQUEST-ID": requestid,
       "X-TIMESTAMP": timestamp,
       "X-SIGNATURE": sign,
       "X-ACCOUNT-ID":$.ACCOUNT,
       "Cache-Control": `no-cache`,
       "X-TENANT-ID": appid,
       'Host': 'vapp.tmuyun.com',
       'Connection': 'Keep-Alive',
       "Content-Type": `application/x-www-form-urlencoded`,
       'User-Agent': `3.0.1;${requestid};iPad13,4;IOS;16.2;Appstore`
     },
   }
 }

 function taskPostUrl(type, body) {
   getSign(type)
   return {
     url: `https://vapp.tmuyun.com${type}`,
     body: `${body}`,
     headers: {
       "X-SESSION-ID": sessionid,
       "X-REQUEST-ID": requestid,
       "X-TIMESTAMP": timestamp,
       "X-SIGNATURE": sign,
       "Cache-Control": `no-cache`,
       "X-TENANT-ID": appid,
       'Host': 'vapp.tmuyun.com',
       'Connection': 'Keep-Alive',
       "Content-Type": `application/x-www-form-urlencoded`,
       'User-Agent': `1.2.2;${requestid};iPad13,4;IOS;16.2;Appstore`
     },
   }
 }
 /**
  * 获取X-SIGNATURE
  */
 function getSign(type) {
   timestamp = Date.now()
   requestid = uuid()
   sign = CryptoJS.SHA256(`${type}&&${sessionid}&&${requestid}&&${timestamp}&&${salt}&&${appid}`).toString()
   //console.log(sign)
 }

 function uuid() {
   function S4() {
     return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
   }
   return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
 }
 /**
  * 
  * RSA加密
  */
  async function RSA_Encrypt(data) {
   let url = {
     url: `https://www.bejson.com/Bejson/Api/Rsa/pubEncrypt`,
     headers: {
       "Accept": "application/json, text/javascript, */*; q=0.01",
       "Accept-Encoding": " gzip, deflate, br",
       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
       "Host": "www.bejson.com",
       "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
     },
     body: `publicKey=-----BEGIN+PUBLIC+KEY-----%0D%0AMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs%2BcFqwa7ETJ%2BWXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx%2FiOiXFc%2BzCPvaKZric2dXCw27EvlH5rq%2BzwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg%2BthwIDAQAB%0D%0A-----END+PUBLIC+KEY-----&encStr=${data}&etype=rsa2`
   }
   return new Promise(resolve => {
     $.post(url, async (err, resp, data) => {
       try {
         if (err) {
           console.log(`${err}`)
           console.log(`${$.name} API请求失败，请检查网路重试`)
         } else {
           if (data) {
             data = JSON.parse(data);
             //console.log(JSON.stringify(data));
             if (data.code === 200) {

             } else {
               console.log(data.msg)
             }
           } else {
             console.log("没有返回数据")
           }
         }
       } catch (e) {
         $.logErr(e, resp)
       } finally {
         resolve(data.data);
       }
     })
   })
 }
 /**
  * 
  * 消息推送
  */
 function showMsg() {
   message += `=== ${$.nickName} | ${$.mobile} ===\n`;
   message += msg
   //console.log(message)
 }
 /**
  * 
  * cookie处理
  */
 function requireConfig() {
   if (cookie) {
     if (cookie.indexOf("@") != -1) {
       cookie.split("@").forEach((item) => {
         cookiesArr.push(item);
       });
     } else if (cookie.indexOf("\n") != -1) {
       cookie.split("\n").forEach((item) => {
         cookiesArr.push(item);
       });
     } else {
       cookiesArr.push(cookie);
     }
     console.log(`\n=============================================    \n脚本执行 - 北京时间(UTC+8)：${new Date(new Date().getTime() +new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString()} \n=============================================\n`)
     console.log(`\n=========共有${cookiesArr.length}个${$.name}账号Cookie=========\n`);
   } else {
     console.log(`\n【缺少zsoh变量！】`)
     return;
   }
 }
 /**
  * cookie转换
  */
 async function getCookie(rawCookie) {
   if (rawCookie.includes('#')) {
     $.pwd = await RSA_Encrypt(rawCookie.split('#')[1])
     $.mobile = rawCookie.split('#')[0]
     await credential_auth()
   } else {
     sessionid = rawCookie;
   }
 }
 // prettier-ignore
 function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
const $=new Env("\u6D77\u74EF\u4E0A\u638C".split("").reverse().join(""));const notify=$["\u0069\u0073\u004e\u006f\u0064\u0065"]()?require("yfitoNdnes/.".split("").reverse().join("")):"";const CryptoJS=require("sj-otpyrc".split("").reverse().join(""));const salt="\u0046\u0052\u002a\u0072\u0021\u0069\u0073\u0045\u0035\u0057";const appid=0x35864^0x3582a;let cookiesArr=[],message="".split("").reverse().join(""),channelId=["55574565074b503e1ffaf346".split("").reverse().join(""),"\u0036\u0034\u0033\u0066\u0061\u0066\u0065\u0032\u0065\u0033\u0030\u0035\u0062\u0034\u0037\u0030\u0035\u0036\u0035\u0034\u0037\u0035\u0035\u0034","65574565074b503ed00bf346".split("").reverse().join(""),"a5574565074b503edd0bf346".split("").reverse().join(""),"b5574565074b503e021bf346".split("").reverse().join(""),"e5574565074b503ea71bf346".split("").reverse().join("")];cookie=($["\u0069\u0073\u004e\u006f\u0064\u0065"]()?process["\u0065\u006e\u0076"]['zsoh']:$["\u0067\u0065\u0074\u0064\u0061\u0074\u0061"]("hosz".split("").reverse().join("")))||'';helpAu=($["\u0069\u0073\u004e\u006f\u0064\u0065"]()?process["\u0065\u006e\u0076"]['zsohhelpAu']:$["\u0067\u0065\u0074\u0064\u0061\u0074\u0061"]("\u007a\u0073\u006f\u0068\u0068\u0065\u006c\u0070\u0041\u0075"))||!![];!(async()=>{await requireConfig();for(let _0x557472=0xc84a2^0xc84a2;_0x557472<cookiesArr["\u006c\u0065\u006e\u0067\u0074\u0068"];_0x557472++){if(cookiesArr[_0x557472]){sessionid=cookiesArr[_0x557472]['split']('&')[0x7fd75^0x7fd75];$["\u0041\u0043\u0043\u004f\u0055\u004e\u0054"]=cookiesArr[_0x557472]['split']("\u0026")[0xe58db^0xe58da];msg="";$['index']=_0x557472+(0x8132c^0x8132d);$['nickName']="".split("").reverse().join("");$["\u0075\u0073\u0065\u0072\u0049\u0064"]='';$['mobile']='';$['userIdStr']='';$["\u0076\u0065\u0068\u0069\u0063\u006c\u0065\u0054\u006f\u006b\u0065\u006e"]="";$['taskList']={};$['queryList']={};await account_detail();console["\u006c\u006f\u0067"]('\x0a******开始【🐳掌上瓯海账号'+$["\u0069\u006e\u0064\u0065\u0078"]+'】'+$['nickName']+"\u007c"+$['mobile']+"\n*********".split("").reverse().join(""));await main();}}if($['isNode']()&&message){await notify['sendNotify'](""+$['name'],''+message);}})()["\u0063\u0061\u0074\u0063\u0068"](_0x1e5094=>$['logErr'](_0x1e5094))["\u0066\u0069\u006e\u0061\u006c\u006c\u0079"](()=>$['done']());async function main(){if($['userId']){console["\u006c\u006f\u0067"]("\u3010\u83b7\u53d6\u4efb\u52a1\u5217\u8868\u3011");await numberCenter();console['log']("\u3011\u52A1\u4EFB\u6210\u5B8C\u59CB\u5F00\u3010".split("").reverse().join(""));await article();for(i=0xc2b70^0xc2b70;i<$['taskList']['length'];i++){if($['taskList'][i]["\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u0064"]===(0x6f803^0x6f802)){console["\u006c\u006f\u0067"]("\u005b"+$["\u0074\u0061\u0073\u006b\u004c\u0069\u0073\u0074"][i]["\u006e\u0061\u006d\u0065"]+"\u005d\u5df2\u5b8c\u6210");continue;}else{console['log']("\u53bb\u5b8c\u6210\u4efb\u52a1\uff1a"+$["\u0074\u0061\u0073\u006b\u004c\u0069\u0073\u0074"][i]["\u006e\u0061\u006d\u0065"]);await doTask($['taskList'][i]);}}if(helpAu==!![]){console['log']("\u3010\u524d\u5f80\u52a9\u529b\u4f5c\u8005\u3011");await invite();}console['log']("\u3011\u606F\u4FE1\u53F7\u8D26\u8BE2\u67E5\u3010".split("").reverse().join(""));await account_detail();console['log']("[:\u6709\u62E5".split("").reverse().join("")+$["\u0069\u006e\u0074\u0065\u0067\u0072\u0061\u006c"]+"[:\u7EA7\u7B49 | \u5206\u79EF]".split("").reverse().join("")+$['grade']+']-'+$["\u0067\u0072\u0061\u0064\u0065\u005f\u006e\u0061\u006d\u0065"]);msg+="[:\u6709\u62E5".split("").reverse().join("")+$["\u0069\u006e\u0074\u0065\u0067\u0072\u0061\u006c"]+']积分\x20\x0a等级:['+$['grade']+"\u005d\u002d"+$['grade_name']+'\x0a\x0a';await showMsg();}else console["\u006c\u006f\u0067"]("\u52A1\u4EFB\u51FA\u9000\uFF0C\u8D25\u5931dIresu\u53D6\u83B7".split("").reverse().join(""));}async function doTask(_0x42c9d0){let _0x256c88=JSON['stringify'](_0x42c9d0['id']);let _0xe52e81=Number(_0x42c9d0["\u0066\u0072\u0065\u0071\u0075\u0065\u006e\u0063\u0079"])-Number(_0x42c9d0['finish_times']);await signin();switch(_0x256c88){case"733".split("").reverse().join(""):await signin();break;case"2002".split("").reverse().join(""):for(j=0x3b4a7^0x3b4a7;j<_0xe52e81&&j<$['acticleList']['length'];j++){console['log']("\uFF1A\u89C8\u6D4F\u53BB".split("").reverse().join("")+$["\u0061\u0063\u0074\u0069\u0063\u006c\u0065\u004c\u0069\u0073\u0074"][j]['list_title']);await read($['acticleList'][j]["\u0069\u0064"]);await $['wait'](0x5d274^0x5d7a8);}break;case'1998':for(j=0xb1b16^0xb1b16;j<_0xe52e81&&j<$['acticleList']["\u006c\u0065\u006e\u0067\u0074\u0068"];j++){console["\u006c\u006f\u0067"]('去分享：'+$["\u0061\u0063\u0074\u0069\u0063\u006c\u0065\u004c\u0069\u0073\u0074"][j]["\u006c\u0069\u0073\u0074\u005f\u0074\u0069\u0074\u006c\u0065"]);await share($['acticleList'][j]['id']);await $['wait'](0x5dc);}break;case"1002".split("").reverse().join(""):for(j=0xd7fd0^0xd7fd0;j<_0xe52e81&&j<$['acticleList']["\u006c\u0065\u006e\u0067\u0074\u0068"];j++){console["\u006c\u006f\u0067"]('去评论：'+$['acticleList'][j]['list_title']);await comment($['acticleList'][j]["\u0069\u0064"]);await $['wait'](0x5dc);}break;case'2000':for(j=0x0;j<_0xe52e81&&j<$['acticleList']['length'];j++){console["\u006c\u006f\u0067"]("\uFF1A\u8D5E\u70B9\u53BB".split("").reverse().join("")+$['acticleList'][j]["\u006c\u0069\u0073\u0074\u005f\u0074\u0069\u0074\u006c\u0065"]);await like($['acticleList'][j]["\u0069\u0064"]);await $['wait'](0x5dc);}break;case"\u0031\u0039\u0039\u0039":for(j=0x33d5c^0x33d5c;j<_0xe52e81&&j<$['acticleList']['length'];j++){await local();await $['wait'](0x5dc);}break;case'2009':console['log']('邀请功能暂未上线');break;default:console['log'](_0x42c9d0['name']+"\u8005\u4F5C\u9988\u53CD\u8BF7,\u7EBF\u4E0A\u672A\u6682".split("").reverse().join(""));}}async function credential_auth(){let _0x459429={'url':"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0070\u0061\u0073\u0073\u0070\u006f\u0072\u0074\u002e\u0074\u006d\u0075\u0079\u0075\u006e\u002e\u0063\u006f\u006d\u002f\u0077\u0065\u0062\u002f\u006f\u0061\u0075\u0074\u0068\u002f\u0063\u0072\u0065\u0064\u0065\u006e\u0074\u0069\u0061\u006c\u005f\u0061\u0075\u0074\u0068",'body':'client_id=48&password='+encodeURIComponent($['pwd'])+"=rebmun_enohp&".split("").reverse().join("")+$["\u006d\u006f\u0062\u0069\u006c\u0065"],'headers':{'Host':'passport.tmuyun.com',"\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065":'application/x-www-form-urlencoded','Accept-Encoding':'gzip,\x20deflate,\x20br'}};return new Promise(_0x1a2f23=>{$['post'](_0x459429,async(_0x3fa862,_0x5bc803,_0x55e079)=>{try{if(_0x3fa862){console["\u006c\u006f\u0067"](''+_0x3fa862);console['log']($['name']+"\u8BD5\u91CD\u8DEF\u7F51\u67E5\u68C0\u8BF7\uFF0C\u8D25\u5931\u6C42\u8BF7IPA ".split("").reverse().join(""));}else{if(_0x55e079){_0x55e079=JSON['parse'](_0x55e079);if(_0x55e079['code']===0x0){await login(_0x55e079['data']['authorization_code']['code']);}else{console['log'](_0x55e079['message']);}}else{console['log']("\u636E\u6570\u56DE\u8FD4\u6709\u6CA1".split("").reverse().join(""));}}}catch(_0x3854e1){$['logErr'](_0x3854e1,_0x5bc803);}finally{_0x1a2f23(_0x55e079);}});});}async function login(_0x5b679b){let _0x5feb2d="=edoc".split("").reverse().join("")+_0x5b679b;sessionid="\u0036\u0033\u0037\u0037\u0037\u0031\u0036\u0032\u0066\u0065\u0033\u0066\u0063\u0031\u0031\u0038\u0062\u0030\u0039\u0066\u0061\u0062\u0038\u0039";return new Promise(_0xbabb90=>{$['post'](taskPostUrl("nigol/zxtbz/ipa/".split("").reverse().join(""),_0x5feb2d),async(_0x1e1965,_0x17467c,_0x5b968c)=>{try{if(_0x1e1965){console['log']("".split("").reverse().join("")+_0x1e1965);console['log']($['name']+"\u8BD5\u91CD\u8DEF\u7F51\u67E5\u68C0\u8BF7\uFF0C\u8D25\u5931\u6C42\u8BF7IPA ".split("").reverse().join(""));}else{if(_0x5b968c){_0x5b968c=JSON['parse'](_0x5b968c);if(_0x5b968c["\u0063\u006f\u0064\u0065"]===0x0){sessionid=_0x5b968c['data']['session']['id'];}else{}}else{console['log']('没有返回数据');}}}catch(_0x22dd4a){$['logErr'](_0x22dd4a,_0x17467c);}finally{_0xbabb90(_0x5b968c);}});});}async function account_detail(){let _0x2e5c94='';return new Promise(_0x4fd22c=>{$['get'](taskUrl('/api/user_mumber/account_detail',_0x2e5c94),async(_0x4acda4,_0x4acf11,_0x556a94)=>{try{if(_0x4acda4){console['log'](''+_0x4acda4);console['log']($['name']+"\u8BD5\u91CD\u8DEF\u7F51\u67E5\u68C0\u8BF7\uFF0C\u8D25\u5931\u6C42\u8BF7IPA ".split("").reverse().join(""));}else{if(_0x556a94){_0x556a94=JSON['parse'](_0x556a94);if(_0x556a94['code']===(0x86287^0x86287)){$['userId']=_0x556a94['data']['rst']['id'];$['nickName']=_0x556a94["\u0064\u0061\u0074\u0061"]['rst']['nick_name'];$['mobile']=_0x556a94["\u0064\u0061\u0074\u0061"]['rst']["\u006d\u006f\u0062\u0069\u006c\u0065"];$['grade']=_0x556a94['data']['rst']["\u0067\u0072\u0061\u0064\u0065"];$['grade_name']=_0x556a94["\u0064\u0061\u0074\u0061"]["\u0072\u0073\u0074"]["\u0067\u0072\u0061\u0064\u0065\u005f\u006e\u0061\u006d\u0065"];$['integral']=_0x556a94['data']['rst']['total_integral'];}else{console['log'](JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](_0x556a94));}}else{console['log']('没有返回数据');}}}catch(_0x2f68a7){$['logErr'](_0x2f68a7,_0x4acf11);}finally{_0x4fd22c(_0x556a94);}});});}async function numberCenter(){let _0x318c53='?is_new=1';return new Promise(_0xe86fa0=>{$['get'](taskUrl('/api/user_mumber/numberCenter',_0x318c53),async(_0x3ae728,_0x28c8cd,_0x4bdde6)=>{try{if(_0x3ae728){console['log'](''+_0x3ae728);console['log']($['name']+"\u8BD5\u91CD\u8DEF\u7F51\u67E5\u68C0\u8BF7\uFF0C\u8D25\u5931\u6C42\u8BF7IPA ".split("").reverse().join(""));}else{if(_0x4bdde6){_0x4bdde6=JSON['parse'](_0x4bdde6);if(_0x4bdde6['code']===(0x1a31c^0x1a31c)){console['log']('获取成功！');$['taskList']=_0x4bdde6['data']['rst']['user_task_list'];}else{console["\u006c\u006f\u0067"](JSON['stringify'](_0x4bdde6));}}else{console['log']("\u636E\u6570\u56DE\u8FD4\u6709\u6CA1".split("").reverse().join(""));}}}catch(_0x41fa0e){$['logErr'](_0x41fa0e,_0x28c8cd);}finally{_0xe86fa0(_0x4bdde6);}});});}async function signin(){let _0x377d57="".split("").reverse().join("");return new Promise(_0x1d902b=>{$['get'](taskUrl("ngis/rebmum_resu/ipa/".split("").reverse().join(""),_0x377d57),async(_0x1129d3,_0x39fe0a,_0x38ac06)=>{try{if(_0x1129d3){console['log']("".split("").reverse().join("")+_0x1129d3);console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{if(_0x38ac06){_0x38ac06=JSON['parse'](_0x38ac06);if(_0x38ac06['code']===(0xc92e8^0xc92e8)){console['log']("\uFF1A\u5F97\u83B7\uFF01\u529F\u6210\u5230\u7B7E".split("").reverse().join("")+_0x38ac06['data']["\u0073\u0069\u0067\u006e\u0049\u006e\u0074\u0065\u0067\u0072\u0061\u006c"]+"\u79ef\u5206");}else{console['log'](_0x38ac06['message']);}}else{console['log']('没有返回数据');}}}catch(_0x2bcb70){$["\u006c\u006f\u0067\u0045\u0072\u0072"](_0x2bcb70,_0x39fe0a);}finally{_0x1d902b(_0x38ac06);}});});}async function article(){let _0x4f11b4='?channel_id='+channelId[Math['floor'](Math['random']()*channelId["\u006c\u0065\u006e\u0067\u0074\u0068"])]+'&isDiFangHao=false&is_new=1&list_count='+Math['floor'](Math['random']()*(0x7c0f2^0x7c0f7)+0x1)*0xa+'&size=10&start='+Date['now']();return new Promise(_0xb5d294=>{$['get'](taskUrl('/api/article/channel_list',_0x4f11b4),async(_0x575595,_0x16ed5f,_0x5baa48)=>{try{if(_0x575595){console['log'](''+_0x575595);console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{if(_0x5baa48){_0x5baa48=JSON['parse'](_0x5baa48);if(_0x5baa48["\u0063\u006f\u0064\u0065"]===(0x85e3d^0x85e3d)){$['acticleList']=_0x5baa48["\u0064\u0061\u0074\u0061"]['article_list'];}else{console['log'](_0x5baa48['message']);}}else{console['log']("\u636E\u6570\u56DE\u8FD4\u6709\u6CA1".split("").reverse().join(""));}}}catch(_0x4c4062){$['logErr'](_0x4c4062,_0x16ed5f);}finally{_0xb5d294(_0x5baa48);}});});}async function read(_0x10a018){let _0x3bcbce="=di?".split("").reverse().join("")+_0x10a018;return new Promise(_0x3631e7=>{$['get'](taskUrl('/api/article/detail',_0x3bcbce),async(_0x41e568,_0x4dba4b,_0x117ce1)=>{try{if(_0x41e568){console["\u006c\u006f\u0067"]("".split("").reverse().join("")+_0x41e568);console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{if(_0x117ce1){_0x117ce1=JSON['parse'](_0x117ce1);if(_0x117ce1["\u0063\u006f\u0064\u0065"]===0x0){console['log']('浏览成功！');if(_0x117ce1['data']['score_notify'])console['log']("\u6d4f\u89c8\u4efb\u52a1\u5b8c\u6210\uff0c\u83b7\u5f97\u005b"+_0x117ce1['data']['score_notify']['integral']+"\u5206\u79EF]".split("").reverse().join(""));}else{console['log'](_0x117ce1['message']);}}else{console['log']('没有返回数据');}}}catch(_0x460db2){$['logErr'](_0x460db2,_0x4dba4b);}finally{_0x3631e7(_0x117ce1);}});});}async function share(){let _0x85628='member_type=3&memberType=3';return new Promise(_0x48ff65=>{$['post'](taskPostUrl('/api/user_mumber/doTask',_0x85628),async(_0x566a3f,_0x585707,_0x4ee057)=>{try{if(_0x566a3f){console['log']("".split("").reverse().join("")+_0x566a3f);console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{if(_0x4ee057){_0x4ee057=JSON['parse'](_0x4ee057);if(_0x4ee057['code']===0x0){console['log']("\uFF01\u529F\u6210\u4EAB\u5206".split("").reverse().join(""));if(_0x4ee057['data'])console['log']('分享任务完成，获得['+_0x4ee057['data']['score_notify']['integral']+"\u5206\u79EF]".split("").reverse().join(""));}else{console["\u006c\u006f\u0067"](_0x4ee057['message']);}}else{console["\u006c\u006f\u0067"]('没有返回数据');}}}catch(_0x53ce49){$['logErr'](_0x53ce49,_0x585707);}finally{_0x48ff65(_0x4ee057);}});});}async function comment(_0x5ecf5e){let _0x4da25e='channel_article_id='+_0x5ecf5e+'&content=1';return new Promise(_0x3fce5a=>{$['post'](taskPostUrl("etaerc/tnemmoc/ipa/".split("").reverse().join(""),_0x4da25e),async(_0x2b12f0,_0x5b1ecf,_0x1cc341)=>{try{if(_0x2b12f0){console['log'](''+_0x2b12f0);console['log']($["\u006e\u0061\u006d\u0065"]+"\u8BD5\u91CD\u8DEF\u7F51\u67E5\u68C0\u8BF7\uFF0C\u8D25\u5931\u6C42\u8BF7IPA ".split("").reverse().join(""));}else{if(_0x1cc341){_0x1cc341=JSON['parse'](_0x1cc341);if(_0x1cc341['code']===(0x6da03^0x6da03)){console['log']("\u8bc4\u8bba\u6210\u529f\uff01");if(_0x1cc341['data'])console['log']('评论任务完成，获得['+_0x1cc341['data']['score_notify']['integral']+']积分');}else{console['log'](_0x1cc341['message']);}}else{console['log']('没有返回数据');}}}catch(_0x20aed6){$['logErr'](_0x20aed6,_0x5b1ecf);}finally{_0x3fce5a(_0x1cc341);}});});}async function like(_0x1bb021){let _0x5a42d8='id='+_0x1bb021+'&action=true';return new Promise(_0x542ad7=>{$['post'](taskPostUrl('/api/favorite/like',_0x5a42d8),async(_0x71c22e,_0xaae095,_0x3ebcc8)=>{try{if(_0x71c22e){console['log']("".split("").reverse().join("")+_0x71c22e);console["\u006c\u006f\u0067"]($['name']+'\x20API请求失败，请检查网路重试');}else{if(_0x3ebcc8){_0x3ebcc8=JSON['parse'](_0x3ebcc8);if(_0x3ebcc8['code']===0x0){console['log']("\uFF01\u529F\u6210\u8D5E\u70B9".split("").reverse().join(""));if(_0x3ebcc8['data'])console['log']("[\u5F97\u83B7\uFF0C\u6210\u5B8C\u52A1\u4EFB\u8D5E\u70B9".split("").reverse().join("")+_0x3ebcc8['data']['score_notify']["\u0069\u006e\u0074\u0065\u0067\u0072\u0061\u006c"]+"\u005d\u79ef\u5206");}else{console["\u006c\u006f\u0067"](_0x3ebcc8["\u006d\u0065\u0073\u0073\u0061\u0067\u0065"]);}}else{console['log']("\u636E\u6570\u56DE\u8FD4\u6709\u6CA1".split("").reverse().join(""));}}}catch(_0x3d0cdc){$['logErr'](_0x3d0cdc,_0xaae095);}finally{_0x542ad7(_0x3ebcc8);}});});}async function local(){let _0x47ba6c='memberType=6&member_type=6';return new Promise(_0x2dd865=>{$['post'](taskPostUrl('/api/user_mumber/doTask',_0x47ba6c),async(_0x1c0981,_0x2aa37a,_0x2e165f)=>{try{if(_0x1c0981){console["\u006c\u006f\u0067"](''+_0x1c0981);console['log']($['name']+"\u8BD5\u91CD\u8DEF\u7F51\u67E5\u68C0\u8BF7\uFF0C\u8D25\u5931\u6C42\u8BF7IPA ".split("").reverse().join(""));}else{if(_0x2e165f){_0x2e165f=JSON['parse'](_0x2e165f);if(_0x2e165f['code']===(0x2096c^0x2096c)){console["\u006c\u006f\u0067"]("\uFF01\u529F\u6210\u7528\u4F7F".split("").reverse().join(""));if(_0x2e165f['data'])console['log']("[\u5F97\u83B7\uFF0C\u529F\u6210\u7528\u4F7F".split("").reverse().join("")+_0x2e165f['data']['score_notify']['integral']+']积分');}else{console['log'](_0x2e165f['message']);}}else{console['log']('没有返回数据');}}}catch(_0xc70e95){$["\u006c\u006f\u0067\u0045\u0072\u0072"](_0xc70e95,_0x2aa37a);}finally{_0x2dd865(_0x2e165f);}});});}async function invite(){let _0x1e6b66="9QS6YG=edoc_fer".split("").reverse().join("");return new Promise(_0x3cbc7f=>{$['post'](taskPostUrl('/api/account/update_ref_code',_0x1e6b66),async(_0x285884,_0x56eeeb,_0x3b3397)=>{try{if(_0x285884){console['log'](''+_0x285884);console["\u006c\u006f\u0067"]($['name']+"\u8BD5\u91CD\u8DEF\u7F51\u67E5\u68C0\u8BF7\uFF0C\u8D25\u5931\u6C42\u8BF7IPA ".split("").reverse().join(""));}else{if(_0x3b3397){_0x3b3397=JSON['parse'](_0x3b3397);if(_0x3b3397['code']===(0xc9f48^0xc9f48)){console['log']("\uFF01\u529F\u6210\u529B\u52A9".split("").reverse().join(""));}else{console['log'](_0x3b3397['message']);}}else{console['log']('没有返回数据');}}}catch(_0x3e159f){$['logErr'](_0x3e159f,_0x56eeeb);}finally{_0x3cbc7f(_0x3b3397);}});});}function taskUrl(_0x11b6fa,_0x2cd8c9){getSign(_0x11b6fa);return{'url':'https://vapp.tmuyun.com'+_0x11b6fa+_0x2cd8c9,'headers':{'X-SESSION-ID':sessionid,'X-REQUEST-ID':requestid,'X-TIMESTAMP':timestamp,'X-SIGNATURE':sign,'X-ACCOUNT-ID':$['ACCOUNT'],'Cache-Control':"\u006e\u006f\u002d\u0063\u0061\u0063\u0068\u0065",'X-TENANT-ID':appid,'Host':'vapp.tmuyun.com','Connection':'Keep-Alive','Content-Type':'application/x-www-form-urlencoded','User-Agent':"\u0033\u002e\u0030\u002e\u0031\u003b"+requestid+"\u003b\u0069\u0050\u0061\u0064\u0031\u0033\u002c\u0034\u003b\u0049\u004f\u0053\u003b\u0031\u0036\u002e\u0032\u003b\u0041\u0070\u0070\u0073\u0074\u006f\u0072\u0065"}};}function taskPostUrl(_0x58fca3,_0x5c2a4d){getSign(_0x58fca3);return{'url':'https://vapp.tmuyun.com'+_0x58fca3,'body':"".split("").reverse().join("")+_0x5c2a4d,'headers':{'X-SESSION-ID':sessionid,'X-REQUEST-ID':requestid,'X-TIMESTAMP':timestamp,'X-SIGNATURE':sign,'Cache-Control':'no-cache','X-TENANT-ID':appid,'Host':'vapp.tmuyun.com','Connection':'Keep-Alive','Content-Type':'application/x-www-form-urlencoded',"\u0055\u0073\u0065\u0072\u002d\u0041\u0067\u0065\u006e\u0074":'1.2.2;'+requestid+';iPad13,4;IOS;16.2;Appstore'}};}function getSign(_0x11948a){timestamp=Date['now']();requestid=uuid();sign=CryptoJS['SHA256'](_0x11948a+"\u0026\u0026"+sessionid+'&&'+requestid+'&&'+timestamp+'&&'+salt+"&&".split("").reverse().join("")+appid)["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"]();}function uuid(){function _0x514cc9(){return((0x1+Math['random']())*0x10000|0x913ae^0x913ae)['toString'](0xea56a^0xea57a)['substring'](0x8d436^0x8d437);}return _0x514cc9()+_0x514cc9()+"\u002d"+_0x514cc9()+'-'+_0x514cc9()+'-'+_0x514cc9()+'-'+_0x514cc9()+_0x514cc9()+_0x514cc9();}async function RSA_Encrypt(_0x4d9331){let _0x8c65b8={'url':"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0062\u0065\u006a\u0073\u006f\u006e\u002e\u0063\u006f\u006d\u002f\u0042\u0065\u006a\u0073\u006f\u006e\u002f\u0041\u0070\u0069\u002f\u0052\u0073\u0061\u002f\u0070\u0075\u0062\u0045\u006e\u0063\u0072\u0079\u0070\u0074",'headers':{'Accept':'application/json,\x20text/javascript,\x20*/*;\x20q=0.01','Accept-Encoding':'\x20gzip,\x20deflate,\x20br',"\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065":'application/x-www-form-urlencoded;\x20charset=UTF-8','Host':'www.bejson.com','User-Agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/105.0.0.0\x20Safari/537.36'},'body':"\u0070\u0075\u0062\u006c\u0069\u0063\u004b\u0065\u0079\u003d\u002d\u002d\u002d\u002d\u002d\u0042\u0045\u0047\u0049\u004e\u002b\u0050\u0055\u0042\u004c\u0049\u0043\u002b\u004b\u0045\u0059\u002d\u002d\u002d\u002d\u002d\u0025\u0030\u0044\u0025\u0030\u0041\u004d\u0049\u0047\u0066\u004d\u0041\u0030\u0047\u0043\u0053\u0071\u0047\u0053\u0049\u0062\u0033\u0044\u0051\u0045\u0042\u0041\u0051\u0055\u0041\u0041\u0034\u0047\u004e\u0041\u0044\u0043\u0042\u0069\u0051\u004b\u0042\u0067\u0051\u0044\u0036\u0058\u004f\u0037\u0065\u0039\u0059\u0065\u0041\u004f\u0073\u0025\u0032\u0042\u0063\u0046\u0071\u0077\u0061\u0037\u0045\u0054\u004a\u0025\u0032\u0042\u0057\u0058\u0069\u007a\u0050\u0071\u0051\u0065\u0058\u0076\u0036\u0038\u0069\u0035\u0076\u0071\u0077\u0039\u0070\u0046\u0052\u0045\u0073\u0072\u0071\u0069\u0042\u0054\u0052\u0063\u0067\u0037\u0077\u0042\u0030\u0052\u0049\u0070\u0033\u0072\u004a\u006b\u0044\u0070\u0061\u0065\u0056\u004a\u004c\u0073\u005a\u0071\u0059\u006d\u0035\u0054\u0057\u0037\u0046\u0057\u0078\u0025\u0032\u0046\u0069\u004f\u0069\u0058\u0046\u0063\u0025\u0032\u0042\u007a\u0043\u0050\u0076\u0061\u004b\u005a\u0072\u0069\u0063\u0032\u0064\u0058\u0043\u0077\u0032\u0037\u0045\u0076\u006c\u0048\u0035\u0072\u0071\u0025\u0032\u0042\u007a\u0077\u0049\u0050\u0044\u0041\u004a\u0048\u0047\u0041\u0066\u006e\u006e\u0031\u006e\u006d\u0051\u0048\u0037\u0077\u0052\u0033\u0050\u0043\u0061\u0074\u0045\u0049\u0062\u0038\u0070\u007a\u0035\u0047\u0046\u006c\u0054\u0048\u004d\u006c\u006c\u0075\u0077\u0034\u005a\u0059\u006d\u006e\u004f\u0077\u0067\u0025\u0032\u0042\u0074\u0068\u0077\u0049\u0044\u0041\u0051\u0041\u0042\u0025\u0030\u0044\u0025\u0030\u0041\u002d\u002d\u002d\u002d\u002d\u0045\u004e\u0044\u002b\u0050\u0055\u0042\u004c\u0049\u0043\u002b\u004b\u0045\u0059\u002d\u002d\u002d\u002d\u002d\u0026\u0065\u006e\u0063\u0053\u0074\u0072\u003d"+_0x4d9331+"\u0026\u0065\u0074\u0079\u0070\u0065\u003d\u0072\u0073\u0061\u0032"};return new Promise(_0x14c384=>{$['post'](_0x8c65b8,async(_0x1f0a60,_0x10c78c,_0xad12e0)=>{try{if(_0x1f0a60){console['log'](""+_0x1f0a60);console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{if(_0xad12e0){_0xad12e0=JSON['parse'](_0xad12e0);if(_0xad12e0['code']===(0x6b08a^0x6b042)){}else{console['log'](_0xad12e0["\u006d\u0073\u0067"]);}}else{console['log']("\u6ca1\u6709\u8fd4\u56de\u6570\u636e");}}}catch(_0x2bc644){$['logErr'](_0x2bc644,_0x10c78c);}finally{_0x14c384(_0xad12e0['data']);}});});}function showMsg(){message+='===\x20'+$['nickName']+'\x20|\x20'+$['mobile']+"\n=== ".split("").reverse().join("");message+=msg;}function requireConfig(){if(cookie){if(cookie['indexOf']("\u0040")!=-0x1){cookie['split']('@')['forEach'](_0x52cfad=>{cookiesArr['push'](_0x52cfad);});}else if(cookie['indexOf']('\x0a')!=-0x1){cookie['split']('\x0a')['forEach'](_0x2e5ce1=>{cookiesArr['push'](_0x2e5ce1);});}else{cookiesArr['push'](cookie);}console['log']("\uFF1A)8+CTU(\u95F4\u65F6\u4EAC\u5317 - \u884C\u6267\u672C\u811A\n    =============================================\n".split("").reverse().join("")+new Date(new Date()['getTime']()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*(0xbbda2^0xbbd9e)*0x3c*(0x5937a^0x59092))['toLocaleString']()+'\x20\x0a=============================================\x0a');console['log']("\u6709\u5171=========\n".split("").reverse().join("")+cookiesArr['length']+'个'+$['name']+'账号Cookie=========\x0a');}else{console['log']("\u3011\uFF01\u91CF\u53D8hosz\u5C11\u7F3A\u3010\n".split("").reverse().join(""));return;}}async function getCookie(_0x465662){if(_0x465662['includes']('#')){$['pwd']=await RSA_Encrypt(_0x465662['split']('#')[0x402ca^0x402cb]);$['mobile']=_0x465662['split']('#')[0x0];await credential_auth();}else{sessionid=_0x465662;}}function Env(_0x301c9d,_0x3acb2a){class _0x5106b1{constructor(_0x104579){this['env']=_0x104579;}["dnes".split("").reverse().join("")](_0xa54c50,_0x17560a='GET'){_0xa54c50='string'==typeof _0xa54c50?{'url':_0xa54c50}:_0xa54c50;let _0x7891cc=this['get'];return'POST'===_0x17560a&&(_0x7891cc=this['post']),new Promise((_0x271f07,_0x14453c)=>{_0x7891cc['call'](this,_0xa54c50,(_0x318aeb,_0x71ed53,_0xb4e0d7)=>{_0x318aeb?_0x14453c(_0x318aeb):_0x271f07(_0x71ed53);});});}['get'](_0x2be2c2){return this['send']['call'](this['env'],_0x2be2c2);}["tsop".split("").reverse().join("")](_0x9db1da){return this['send']['call'](this['env'],_0x9db1da,"TSOP".split("").reverse().join(""));}}return new class{constructor(_0x2cdd4d,_0x3a34bc){this['name']=_0x2cdd4d,this['http']=new _0x5106b1(this),this['data']=null,this['dataFile']="tad.xob".split("").reverse().join(""),this['logs']=[],this['isMute']=!0x1,this['isNeedRewrite']=!0x1,this['logSeparator']='\x0a',this['startTime']=new Date()['getTime'](),Object['assign'](this,_0x3a34bc),this['log']('','🔔'+this['name']+',\x20开始!');}['isNode'](){return'undefined'!=typeof module&&!!module['exports'];}['isQuanX'](){return"denifednu".split("").reverse().join("")!=typeof $task;}['isSurge'](){return'undefined'!=typeof $httpClient&&'undefined'==typeof $loon;}["nooLsi".split("").reverse().join("")](){return"\u0075\u006e\u0064\u0065\u0066\u0069\u006e\u0065\u0064"!=typeof $loon;}['toObj'](_0x3bc96e,_0xee6e5b=null){try{return JSON['parse'](_0x3bc96e);}catch{return _0xee6e5b;}}["rtSot".split("").reverse().join("")](_0x44466a,_0x5bf1b2=null){try{return JSON['stringify'](_0x44466a);}catch{return _0x5bf1b2;}}['getjson'](_0x3619ac,_0x1a6c4e){let _0x110c34=_0x1a6c4e;const _0x33ac67=this['getdata'](_0x3619ac);if(_0x33ac67)try{_0x110c34=JSON["\u0070\u0061\u0072\u0073\u0065"](this['getdata'](_0x3619ac));}catch{}return _0x110c34;}['setjson'](_0x1cec9c,_0x1ab820){try{return this['setdata'](JSON['stringify'](_0x1cec9c),_0x1ab820);}catch{return!(0xe7792^0xe7793);}}['getScript'](_0x452928){return new Promise(_0x311b07=>{this["\u0067\u0065\u0074"]({'url':_0x452928},(_0x4a0856,_0x144322,_0xa6667c)=>_0x311b07(_0xa6667c));});}['runScript'](_0x1ed03a,_0x413cc3){return new Promise(_0x5efc39=>{let _0x2c6f71=this['getdata']('@chavy_boxjs_userCfgs.httpapi');_0x2c6f71=_0x2c6f71?_0x2c6f71['replace'](/\n/g,'')['trim']():_0x2c6f71;let _0x5dc48e=this['getdata']('@chavy_boxjs_userCfgs.httpapi_timeout');_0x5dc48e=_0x5dc48e?(0x8a604^0x8a605)*_0x5dc48e:0x14,_0x5dc48e=_0x413cc3&&_0x413cc3['timeout']?_0x413cc3['timeout']:_0x5dc48e;const[_0x79170d,_0x263602]=_0x2c6f71['split']('@'),_0x1dc7f8={'url':"//:ptth".split("").reverse().join("")+_0x263602+'/v1/scripting/evaluate','body':{'script_text':_0x1ed03a,'mock_type':'cron','timeout':_0x5dc48e},'headers':{'X-Key':_0x79170d,'Accept':'*/*'}};this["\u0070\u006f\u0073\u0074"](_0x1dc7f8,(_0x427716,_0x46da47,_0x3bcef4)=>_0x5efc39(_0x3bcef4));})['catch'](_0x2ef462=>this['logErr'](_0x2ef462));}['loaddata'](){if(!this['isNode']())return{};{this['fs']=this['fs']?this['fs']:require("sf".split("").reverse().join("")),this['path']=this['path']?this['path']:require('path');const _0x58a4aa=this['path']['resolve'](this['dataFile']),_0x5e43cb=this['path']['resolve'](process['cwd'](),this['dataFile']),_0x928cca=this['fs']['existsSync'](_0x58a4aa),_0x5a15a4=!_0x928cca&&this['fs']['existsSync'](_0x5e43cb);if(!_0x928cca&&!_0x5a15a4)return{};{const _0x5ad824=_0x928cca?_0x58a4aa:_0x5e43cb;try{return JSON['parse'](this['fs']['readFileSync'](_0x5ad824));}catch(_0x33c9c4){return{};}}}}["atadetirw".split("").reverse().join("")](){if(this['isNode']()){this['fs']=this['fs']?this['fs']:require("sf".split("").reverse().join("")),this['path']=this['path']?this['path']:require('path');const _0x5941f9=this["\u0070\u0061\u0074\u0068"]['resolve'](this['dataFile']),_0x16121f=this['path']['resolve'](process['cwd'](),this['dataFile']),_0x503d38=this['fs']['existsSync'](_0x5941f9),_0x5aef5a=!_0x503d38&&this['fs']['existsSync'](_0x16121f),_0x465d0d=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](this['data']);_0x503d38?this['fs']['writeFileSync'](_0x5941f9,_0x465d0d):_0x5aef5a?this['fs']['writeFileSync'](_0x16121f,_0x465d0d):this['fs']['writeFileSync'](_0x5941f9,_0x465d0d);}}['lodash_get'](_0xe9310d,_0x2e55aa,_0x1601fe){const _0x4bbc75=_0x2e55aa['replace'](/\[(\d+)\]/g,'.$1')['split']('.');let _0x20222e=_0xe9310d;for(const _0xb6a0da of _0x4bbc75)if(_0x20222e=Object(_0x20222e)[_0xb6a0da],void 0x0===_0x20222e)return _0x1601fe;return _0x20222e;}['lodash_set'](_0x201650,_0x1224ae,_0x2fc5ee){return Object(_0x201650)!==_0x201650?_0x201650:(Array['isArray'](_0x1224ae)||(_0x1224ae=_0x1224ae['toString']()['match'](/[^.[\]]+/g)||[]),_0x1224ae['slice'](0x0,-0x1)['reduce']((_0x474b39,_0x4582bd,_0x2f1a78)=>Object(_0x474b39[_0x4582bd])===_0x474b39[_0x4582bd]?_0x474b39[_0x4582bd]:_0x474b39[_0x4582bd]=Math['abs'](_0x1224ae[_0x2f1a78+0x1])>>0x0==+_0x1224ae[_0x2f1a78+0x1]?[]:{},_0x201650)[_0x1224ae[_0x1224ae['length']-0x1]]=_0x2fc5ee,_0x201650);}['getdata'](_0x56bc9c){let _0x14d487=this['getval'](_0x56bc9c);if(/^@/['test'](_0x56bc9c)){const[,_0x4f687a,_0x373573]=/^@(.*?)\.(.*?)$/['exec'](_0x56bc9c),_0x455bde=_0x4f687a?this['getval'](_0x4f687a):'';if(_0x455bde)try{const _0x4463e9=JSON['parse'](_0x455bde);_0x14d487=_0x4463e9?this['lodash_get'](_0x4463e9,_0x373573,''):_0x14d487;}catch(_0x903ed2){_0x14d487='';}}return _0x14d487;}['setdata'](_0x444ec0,_0x550874){let _0x2d1595=!0x1;if(/^@/['test'](_0x550874)){const[,_0x228e2c,_0x1bc609]=/^@(.*?)\.(.*?)$/['exec'](_0x550874),_0x1955ad=this['getval'](_0x228e2c),_0x2d80ed=_0x228e2c?'null'===_0x1955ad?null:_0x1955ad||'{}':'{}';try{const _0x5aca76=JSON['parse'](_0x2d80ed);this['lodash_set'](_0x5aca76,_0x1bc609,_0x444ec0),_0x2d1595=this['setval'](JSON['stringify'](_0x5aca76),_0x228e2c);}catch(_0x366b78){const _0x28feff={};this['lodash_set'](_0x28feff,_0x1bc609,_0x444ec0),_0x2d1595=this['setval'](JSON['stringify'](_0x28feff),_0x228e2c);}}else _0x2d1595=this['setval'](_0x444ec0,_0x550874);return _0x2d1595;}["lavteg".split("").reverse().join("")](_0x353695){return this['isSurge']()||this['isLoon']()?$persistentStore['read'](_0x353695):this['isQuanX']()?$prefs['valueForKey'](_0x353695):this['isNode']()?(this['data']=this['loaddata'](),this['data'][_0x353695]):this['data']&&this['data'][_0x353695]||null;}['setval'](_0x31a8c9,_0x2f0828){return this['isSurge']()||this['isLoon']()?$persistentStore['write'](_0x31a8c9,_0x2f0828):this['isQuanX']()?$prefs['setValueForKey'](_0x31a8c9,_0x2f0828):this['isNode']()?(this['data']=this['loaddata'](),this['data'][_0x2f0828]=_0x31a8c9,this['writedata'](),!(0x4cbec^0x4cbec)):this['data']&&this['data'][_0x2f0828]||null;}["\u0069\u006e\u0069\u0074\u0047\u006f\u0074\u0045\u006e\u0076"](_0xae2581){this['got']=this['got']?this['got']:require('got'),this['cktough']=this['cktough']?this['cktough']:require('tough-cookie'),this['ckjar']=this['ckjar']?this['ckjar']:new this['cktough']['CookieJar'](),_0xae2581&&(_0xae2581['headers']=_0xae2581['headers']?_0xae2581['headers']:{},void 0x0===_0xae2581['headers']['Cookie']&&void(0x6b523^0x6b523)===_0xae2581['cookieJar']&&(_0xae2581['cookieJar']=this['ckjar']));}['get'](_0x27eaf5,_0x56746a=()=>{}){_0x27eaf5['headers']&&(delete _0x27eaf5['headers']['Content-Type'],delete _0x27eaf5['headers']['Content-Length']),this['isSurge']()||this['isLoon']()?(this['isSurge']()&&this['isNeedRewrite']&&(_0x27eaf5['headers']=_0x27eaf5['headers']||{},Object['assign'](_0x27eaf5['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['get'](_0x27eaf5,(_0x235055,_0x1944c7,_0x4953de)=>{!_0x235055&&_0x1944c7&&(_0x1944c7['body']=_0x4953de,_0x1944c7['statusCode']=_0x1944c7['status']),_0x56746a(_0x235055,_0x1944c7,_0x4953de);})):this['isQuanX']()?(this['isNeedRewrite']&&(_0x27eaf5['opts']=_0x27eaf5['opts']||{},Object['assign'](_0x27eaf5['opts'],{'hints':!(0x54eb9^0x54eb8)})),$task['fetch'](_0x27eaf5)['then'](_0x2d962a=>{const{statusCode:_0x24ab5a,statusCode:_0x1482a3,headers:_0x4083c9,body:_0x250207}=_0x2d962a;_0x56746a(null,{'status':_0x24ab5a,'statusCode':_0x1482a3,'headers':_0x4083c9,'body':_0x250207},_0x250207);},_0xcc9730=>_0x56746a(_0xcc9730))):this['isNode']()&&(this['initGotEnv'](_0x27eaf5),this['got'](_0x27eaf5)['on']("tcerider".split("").reverse().join(""),(_0x18b3fb,_0x190c37)=>{try{if(_0x18b3fb['headers']['set-cookie']){const _0x3289a=_0x18b3fb['headers']['set-cookie']['map'](this['cktough']['Cookie']['parse'])['toString']();_0x3289a&&this['ckjar']['setCookieSync'](_0x3289a,null),_0x190c37['cookieJar']=this['ckjar'];}}catch(_0x569ca5){this['logErr'](_0x569ca5);}})['then'](_0x5d227f=>{const{statusCode:_0x52ef66,statusCode:_0x1522de,headers:_0x481e54,body:_0x13377d}=_0x5d227f;_0x56746a(null,{'status':_0x52ef66,'statusCode':_0x1522de,'headers':_0x481e54,'body':_0x13377d},_0x13377d);},_0x19c8be=>{const{message:_0x4c9c6f,response:_0x1ceab7}=_0x19c8be;_0x56746a(_0x4c9c6f,_0x1ceab7,_0x1ceab7&&_0x1ceab7['body']);}));}['post'](_0x288d68,_0x1c6188=()=>{}){if(_0x288d68['body']&&_0x288d68['headers']&&!_0x288d68['headers']['Content-Type']&&(_0x288d68['headers']['Content-Type']='application/x-www-form-urlencoded'),_0x288d68['headers']&&delete _0x288d68['headers']['Content-Length'],this['isSurge']()||this['isLoon']())this['isSurge']()&&this['isNeedRewrite']&&(_0x288d68['headers']=_0x288d68['headers']||{},Object['assign'](_0x288d68['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['post'](_0x288d68,(_0x4648cc,_0x5342a3,_0x5e4779)=>{!_0x4648cc&&_0x5342a3&&(_0x5342a3['body']=_0x5e4779,_0x5342a3['statusCode']=_0x5342a3['status']),_0x1c6188(_0x4648cc,_0x5342a3,_0x5e4779);});else if(this['isQuanX']())_0x288d68['method']='POST',this['isNeedRewrite']&&(_0x288d68['opts']=_0x288d68['opts']||{},Object['assign'](_0x288d68['opts'],{'hints':!0x1})),$task['fetch'](_0x288d68)['then'](_0x4b879a=>{const{statusCode:_0x2aee5e,statusCode:_0x275418,headers:_0x326124,body:_0x2324cb}=_0x4b879a;_0x1c6188(null,{'status':_0x2aee5e,'statusCode':_0x275418,'headers':_0x326124,'body':_0x2324cb},_0x2324cb);},_0x89a297=>_0x1c6188(_0x89a297));else if(this['isNode']()){this['initGotEnv'](_0x288d68);const{url:_0x147fa3,..._0x332adc}=_0x288d68;this["\u0067\u006f\u0074"]['post'](_0x147fa3,_0x332adc)['then'](_0xab702=>{const{statusCode:_0xdbb693,statusCode:_0x4e78cc,headers:_0x3280bb,body:_0xa7f1e6}=_0xab702;_0x1c6188(null,{'status':_0xdbb693,'statusCode':_0x4e78cc,'headers':_0x3280bb,'body':_0xa7f1e6},_0xa7f1e6);},_0x29fedc=>{const{message:_0x46bd2c,response:_0xa5cebd}=_0x29fedc;_0x1c6188(_0x46bd2c,_0xa5cebd,_0xa5cebd&&_0xa5cebd['body']);});}}['time'](_0x283321,_0x33c96b=null){const _0x5b974c=_0x33c96b?new Date(_0x33c96b):new Date();let _0x4946a6={'M+':_0x5b974c['getMonth']()+0x1,'d+':_0x5b974c['getDate'](),'H+':_0x5b974c['getHours'](),'m+':_0x5b974c['getMinutes'](),'s+':_0x5b974c['getSeconds'](),'q+':Math['floor']((_0x5b974c['getMonth']()+0x3)/(0x8b821^0x8b822)),'S':_0x5b974c['getMilliseconds']()};/(y+)/['test'](_0x283321)&&(_0x283321=_0x283321['replace'](RegExp['$1'],(_0x5b974c['getFullYear']()+'')['substr'](0x4-RegExp['$1']["\u006c\u0065\u006e\u0067\u0074\u0068"])));for(let _0x54e1aa in _0x4946a6)new RegExp('('+_0x54e1aa+')')['test'](_0x283321)&&(_0x283321=_0x283321['replace'](RegExp['$1'],0x1==RegExp['$1']['length']?_0x4946a6[_0x54e1aa]:('00'+_0x4946a6[_0x54e1aa])['substr']((''+_0x4946a6[_0x54e1aa])['length'])));return _0x283321;}["gsm".split("").reverse().join("")](_0x2b099f=_0x301c9d,_0x418d7a="".split("").reverse().join(""),_0x459bb7='',_0x2cc3a3){const _0x4fac19=_0x4f16f3=>{if(!_0x4f16f3)return _0x4f16f3;if('string'==typeof _0x4f16f3)return this['isLoon']()?_0x4f16f3:this['isQuanX']()?{'open-url':_0x4f16f3}:this['isSurge']()?{'url':_0x4f16f3}:void(0xc0a85^0xc0a85);if('object'==typeof _0x4f16f3){if(this["\u0069\u0073\u004c\u006f\u006f\u006e"]()){let _0x1a283d=_0x4f16f3['openUrl']||_0x4f16f3['url']||_0x4f16f3['open-url'],_0x43aaaa=_0x4f16f3['mediaUrl']||_0x4f16f3['media-url'];return{'openUrl':_0x1a283d,'mediaUrl':_0x43aaaa};}if(this['isQuanX']()){let _0x237987=_0x4f16f3['open-url']||_0x4f16f3['url']||_0x4f16f3['openUrl'],_0xd92fb3=_0x4f16f3['media-url']||_0x4f16f3['mediaUrl'];return{'open-url':_0x237987,'media-url':_0xd92fb3};}if(this['isSurge']()){let _0x39e18c=_0x4f16f3['url']||_0x4f16f3['openUrl']||_0x4f16f3['open-url'];return{'url':_0x39e18c};}}};if(this['isMute']||(this['isSurge']()||this['isLoon']()?$notification['post'](_0x2b099f,_0x418d7a,_0x459bb7,_0x4fac19(_0x2cc3a3)):this['isQuanX']()&&$notify(_0x2b099f,_0x418d7a,_0x459bb7,_0x4fac19(_0x2cc3a3))),!this['isMuteLog']){let _0xafa9ae=['','==============📣系统通知📣=============='];_0xafa9ae['push'](_0x2b099f),_0x418d7a&&_0xafa9ae['push'](_0x418d7a),_0x459bb7&&_0xafa9ae['push'](_0x459bb7),console['log'](_0xafa9ae['join']('\x0a')),this['logs']=this['logs']['concat'](_0xafa9ae);}}["gol".split("").reverse().join("")](..._0x3d8774){_0x3d8774['length']>0x0&&(this['logs']=[...this['logs'],..._0x3d8774]),console['log'](_0x3d8774['join'](this['logSeparator']));}['logErr'](_0x954cba,_0x57e2f2){const _0x31f418=!this['isSurge']()&&!this['isQuanX']()&&!this['isLoon']();_0x31f418?this['log']('',"\uFE0F\u2757".split("").reverse().join("")+this['name']+',\x20错误!',_0x954cba['stack']):this['log']('',"\uFE0F\u2757".split("").reverse().join("")+this['name']+',\x20错误!',_0x954cba);}['wait'](_0x4f9200){return new Promise(_0x8e00b3=>setTimeout(_0x8e00b3,_0x4f9200));}['done'](_0x5202e5={}){const _0x41590f=new Date()['getTime'](),_0x2c5a24=(_0x41590f-this['startTime'])/(0x50cdf^0x50f37);this['log']('',"\uDD14\uD83D".split("").reverse().join("")+this['name']+',\x20结束!\x20🕛\x20'+_0x2c5a24+'\x20秒'),this['log'](),(this['isSurge']()||this['isQuanX']()||this['isLoon']())&&$done(_0x5202e5);}}(_0x301c9d,_0x3acb2a);}