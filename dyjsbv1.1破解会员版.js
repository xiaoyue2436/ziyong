/**
 *
 * 项目类型：APP
 * 项目名称：抖音极速版
 * 项目更新：2023-07-31
 * 项目抓包：抓api5-normal-c-lq.amemv.com下的宝箱url#cookie#x-argus#x-ladon#user-agent填入变量
 * 项目变量：lekebo_dyjsb_Cookie
 * 项目定时：每30分钟运行一次
 * cron:10 7-22 * * *
 *
 * 版本功能: 签到、宝箱、步数、广告、刷视频，后期会完善待增加的功能
 *
 * 网站用户: 变量lekebo_user_token，值为：网站用户名&网站用户密码

 */
// process.env.lekebo_dyjsb_Cookie = ``;
const $ = new Env("抖音极速版");
//-------------------- 一般不动变量区域 -------------------------------------
const notify = $.isNode() ? require("./sendNotify") : "";
const CryptoJS = require("crypto-js");
const Notify = 0;		      //通知设置      0关闭  1开启
let debug = 0;                //Debug调试     0关闭  1开启
let envSplitor = ["@", "\n"]; //多账号分隔符
let ck = msg = '';            //let ck,msg
let versionupdate = "0";      //版本对比升级   0关闭  1开启
//===============脚本版本=================//
let scriptVersion = "v1.1",
    update_tines = "2023-07-31",
    update_data = "2023-12-12",
    scriptVersionLatest = "v1.1",
    userCookie = ($.isNode() ? process.env.lekebo_dyjsb_Cookie : $.getdata("lekebo_dyjsb_Cookie")) || "",
    userList = [],
    userIdx = 0,
    date = require("silly-datetime"),
    times = Math.round(new Date().getTime() / 1000).toString(),
    timestamp = Math.round(new Date().getTime()).toString(),
    host = "api3-normal-c.amemv.com",
    hostname = "http://" + host;

async function start() {
    taskall = [];

    for (let _0x92b19d of userList) {
        taskall.push(await _0x92b19d.getMemberInfo(2 * 1000));
        await $.wait(1000);
    }

    await Promise.all(taskall);
    DoubleLog("\n================ 查询账号收益变动 ================");
    taskall = [];

    for (let _0x1a7e88 of userList) {
        taskall.push(await _0x1a7e88.getMemberScore(2 * 1000));
        await $.wait(1000);
    }

    await Promise.all(taskall);
    DoubleLog("\n================ 执行账号签到赚钱 ================");
    taskall = [];

    for (let _0x1b0a15 of userList) {
        taskall.push(await _0x1b0a15.signin(2 * 1000));
        await $.wait(1000);
    }

    await Promise.all(taskall);
    DoubleLog("\n================ 执行账号走路赚金 ================");
    taskall = [];

    for (let _0x3177f0 of userList) {
        taskall.push(await _0x3177f0.step(2 * 1000));
        await $.wait(1000);
    }

    await Promise.all(taskall);
    DoubleLog("\n================ 执行开宝箱赚金币 ================");
    taskall = [];

    for (let _0x29a4f7 of userList) {
        taskall.push(await _0x29a4f7.treasure(2 * 1000));
        await $.wait(1000);
    }

    await Promise.all(taskall);
    DoubleLog("\n================ 执行看广告赚金币 ================");
    taskall = [];

    for (let _0x32fc02 of userList) {
        taskall.push(await _0x32fc02.video(2 * 1000));
        await $.wait(1000);
    }

    await Promise.all(taskall);
    DoubleLog("\n================ 执行观看同城视频 ================");
    taskall = [];

    for (let _0x22844d of userList) {
        taskall.push(await _0x22844d.read(2 * 1000));
        await $.wait(1000);
    }

    await Promise.all(taskall);
}

class UserInfo {
    constructor(_0x37895e) {
        this.index = ++userIdx;
        this.ck = _0x37895e.split("#");
    }

    async ["getMemberInfo"](_0x4252fc = 2000) {
        const _0x32b0a4 = {
            "oykLT": function (_0x4bd12c, _0x218efb) {
                return _0x4bd12c === _0x218efb;
            },
            "urNdx": "oRudH",
            "geTDf": function (_0x520683, _0x227a05) {
                return _0x520683 == _0x227a05;
            },
            "Soedm": function (_0x543a27, _0x3486b1) {
                return _0x543a27(_0x3486b1);
            },
            "hKAEw": "NaDMH",
            "GQKsa": "DHjNE",
            "swJHX": function (_0x273e7a, _0x578812) {
                return _0x273e7a(_0x578812);
            },
            "kAkXd": function (_0x575c30, _0x517b7a) {
                return _0x575c30 !== _0x517b7a;
            },
            "dqCWL": "MeMgq",
            "sYVUZ": function (_0x552889) {
                return _0x552889();
            },
            "DsXxJ": "application/json"
        };
        return new Promise(_0x62b90f => {
            // console.log(this.ck)
            let _0x169324 = {
                "url": hostname + "/aweme/v1/user/profile/self/?" + this.ck[0],
                "headers": {
                    "Content-Type": _0x32b0a4.DsXxJ,
                    "User-Agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "X-Ladon": this.ck[3],
                    "X-Argus": this.ck[2]
                }
            };
            $.get(_0x169324, async (_0x24fba7, _0x3ce9a9, _0x566c7c) => {
                try {
                    if (_0x24fba7) $.logErr(_0x24fba7); else {
                        let _0x4c4a52 = JSON.parse(_0x566c7c);
                        _0x32b0a4.geTDf(_0x4c4a52.status_code, 0) ? _0x32b0a4.Soedm(DoubleLog, "\n ✅ 【" + this.index + "】用户信息: " + _0x4c4a52.user.bind_phone + "，" + _0x4c4a52.user.nickname) : _0x32b0a4.oykLT(_0x32b0a4.hKAEw, _0x32b0a4.GQKsa) ? _0x419738.logErr(_0x276813, _0x186a89) : _0x32b0a4.swJHX(DoubleLog, "\n ❌ 【" + this.index + "】用户信息: " + _0x4c4a52.err_tips);
                    }
                } catch (_0x21f75c) {
                    if (_0x32b0a4.kAkXd("MeMgq", _0x32b0a4.dqCWL)) return _0x212626; else $.logErr(_0x21f75c, _0x3ce9a9);
                } finally {
                    _0x32b0a4.sYVUZ(_0x62b90f);
                }
            }, _0x4252fc);
        });
    }

    async ["getMemberScore"](_0x2dccf0 = 2000) {
        const _0x47f278 = {
            "Pzynm": function (_0x7605e1, _0x383644) {
                return _0x7605e1(_0x383644);
            },
            "tQbHj": function (_0x16303d, _0x5aeeeb) {
                return _0x16303d == _0x5aeeeb;
            },
            "mHLPA": function (_0x2a4cf8) {
                return _0x2a4cf8();
            },
            "mCTOC": function (_0x40126e, _0x2df4ba) {
                return _0x40126e === _0x2df4ba;
            },
            "pXmQt": "hLBsD",
            "FjwbA": function (_0x307bb5, _0x121159) {
                return _0x307bb5 === _0x121159;
            },
            "oXTRv": "LWhZr",
            "EqPDb": function (_0x33798f, _0x579187) {
                return _0x33798f !== _0x579187;
            },
            "RZwoh": "yuJEU",
            "ifxvh": "BdjLl",
            "zMNRj": "uYrBx"
        };
        return new Promise(_0x590606 => {
            const _0xc83f31 = {
                "Ieqtp": function (_0x19e0b6, _0x4700b3) {
                    return _0x19e0b6 == _0x4700b3;
                },
                "ahXhY": function (_0x16aa40, _0x147158) {
                    return _0x47f278.Pzynm(_0x16aa40, _0x147158);
                },
                "niuWM": function (_0x5ec2f8, _0x41b5d2) {
                    return _0x47f278.tQbHj(_0x5ec2f8, _0x41b5d2);
                },
                "xvaxe": function (_0x1d603d, _0x1323fe) {
                    return _0x47f278.Pzynm(_0x1d603d, _0x1323fe);
                },
                "tHTvt": function (_0x451c3e, _0x5387fe) {
                    return _0x451c3e(_0x5387fe);
                },
                "IglhB": function (_0x8588c) {
                    return _0x47f278.mHLPA(_0x8588c);
                },
                "QHEAK": function (_0x4f7c04, _0x164e6f) {
                    return _0x47f278.Pzynm(_0x4f7c04, _0x164e6f);
                },
                "Vlbrq": function (_0x4592e4, _0x5a051a) {
                    return _0x4592e4(_0x5a051a);
                },
                "NfbvP": function (_0x574361, _0x2201c2) {
                    return _0x47f278.mCTOC(_0x574361, _0x2201c2);
                },
                "eCKOZ": _0x47f278.pXmQt,
                "Nsiyy": "NvuWP",
                "zoqwB": function (_0x40dc55, _0x4d93d7) {
                    return _0x47f278.FjwbA(_0x40dc55, _0x4d93d7);
                },
                "ohWSL": _0x47f278.oXTRv,
                "qxDSd": function (_0x3c2e87, _0x1be3dd) {
                    return _0x47f278.EqPDb(_0x3c2e87, _0x1be3dd);
                },
                "HLQgn": _0x47f278.RZwoh,
                "ZsWkn": function (_0x12fda7, _0x586bba) {
                    return _0x47f278.Pzynm(_0x12fda7, _0x586bba);
                },
                "eGWIi": "mqick",
                "CBhYa": _0x47f278.ifxvh,
                "OkmsM": function (_0xb11c42, _0x51697c) {
                    return _0xb11c42(_0x51697c);
                },
                "TSflN": _0x47f278.zMNRj
            };
            let _0x3ed2a4 = {
                "url": hostname + "/luckycat/aweme/v1/task/page?" + this.ck[0],
                "headers": {
                    "Content-Type": "application/json",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                }
            };
            $.get(_0x3ed2a4, async (_0x3c2532, _0x17b0dc, _0x553ad8) => {
                const _0x35c8a4 = {
                    "SiSst": function (_0x10ada5, _0x51e2f0) {
                        return _0x10ada5(_0x51e2f0);
                    },
                    "RYpUh": function (_0x25f523, _0x54b604) {
                        return _0xc83f31.Vlbrq(_0x25f523, _0x54b604);
                    }
                };

                try {
                    if (_0xc83f31.NfbvP(_0xc83f31.eCKOZ, "jBQsq")) {
                        let _0x47c26a = _0x3c663c.parse(_0x32b95b);

                        if (_0x47c26a.err_no == 0) _0x1bce5a("\n ✅ 【" + this.index + "】刷小视频: 获得奖励" + _0x47c26a.data.score_amount + " 金币"); else _0xc83f31.Ieqtp(_0x47c26a.err_no, 10009) ? _0xc83f31.ahXhY(_0x22981e, "\n ❌ 【" + this.index + "】刷小视频: 视频时间未达到或设备问题") : _0xc83f31.ahXhY(_0x126235, "\n ❌ 【" + this.index + "】刷小视频: " + _0x47c26a.err_tips);
                    } else {
                        if (_0x3c2532) {
                            if (_0xc83f31.NfbvP(_0xc83f31.Nsiyy, _0xc83f31.Nsiyy)) $.logErr(_0x3c2532); else {
                                let _0x12c108 = _0x4e6d37.parse(_0x4cab34);

                                _0xc83f31.niuWM(_0x12c108.status_code, 0) ? _0xc83f31.xvaxe(_0x4b811f, "\n ✅ 【" + this.index + "】用户信息: " + _0x12c108.user.bind_phone + "，" + _0x12c108.user.nickname) : _0xc83f31.tHTvt(_0x38c049, "\n ❌ 【" + this.index + "】用户信息: " + _0x12c108.err_tips);
                            }
                        } else {
                            if (_0xc83f31.zoqwB(_0xc83f31.ohWSL, "LWhZr")) {
                                let _0x31cfde = JSON.parse(_0x553ad8);

                                _0x31cfde.err_no == 0 ? _0xc83f31.qxDSd(_0xc83f31.HLQgn, "yuJEU") ? _0x1467f7.logErr(_0x4a5688, _0x22ff3c) : _0xc83f31.ZsWkn(DoubleLog, "\n ✅ 【" + this.index + "】金币收益: " + _0x31cfde.data.income_data.amount1 + "金币，余额:" + _0x31cfde.data.income_data.amount2 / 100 + "元") : _0xc83f31.eGWIi === _0xc83f31.CBhYa ? _0x562364.completed == true ? _0x35c8a4.SiSst(_0x249625, "\n ✅ 【" + this.index + "】签到信息: 今天已签到，已连续签到 " + _0x1130eb.action_times + " 天") : _0x35c8a4.RYpUh(_0x20387f, "\n ✅ 【" + this.index + "】签到信息: 今天未签到，已连续签到 " + _0x3c4abb.action_times + " 天") : _0xc83f31.OkmsM(DoubleLog, "\n ❌ 【" + this.index + "】金币收益: " + _0x31cfde.err_tips);
                            } else _0xc83f31.IglhB(_0x1b478a);
                        }
                    }
                } catch (_0x5ebd93) {
                    $.logErr(_0x5ebd93, _0x17b0dc);
                } finally {
                    "JydBa" === _0xc83f31.TSflN ? _0xc83f31.QHEAK(_0x2e6821, "\n ✅ 【" + this.index + "】签到信息: 今天未签到，已连续签到 " + _0x3af879.action_times + " 天") : _0x590606();
                }
            }, _0x2dccf0);
        });
    }

    async ["signin"](_0x4f9c5a = 2000) {
        return new Promise(_0x7adc38 => {
            let _0x48c519 = {
                "url": hostname + "/luckycat/aweme/v1/task/page?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                }
            };
            $.get(_0x48c519, async (_0x6b5bc5, _0x8928f1, _0xe84770) => {
                try {
                    if (_0x6b5bc5) $.logErr(_0x6b5bc5); else {
                        let _0x3278a8 = JSON.parse(_0xe84770);

                        if (_0x3278a8.err_no == 0) {
                            if (_0x3278a8.data.task_list && Array.isArray(_0x3278a8.data.task_list)) for (let _0xeb8ca0 = 0; _0xeb8ca0 < _0x3278a8.data.task_list.length; _0xeb8ca0++) {
                                let _0x3459fd = _0x3278a8.data.task_list[_0xeb8ca0];
                                _0x3459fd.task_id == "203" && (_0x3459fd.completed == true ? DoubleLog("\n ❌ 【" + this.index + "】签到信息: 今天已签到，已连续签到 " + _0x3459fd.action_times + " 天") : await this.opensign(2 * 1000));
                            } else DoubleLog("\n ❌ 【" + this.index + "】任务列表: 没有找到任务相关列表");
                        } else DoubleLog("\n ❌ 【" + this.index + "】任务列表: " + _0x3278a8.err_tips);
                    }
                } catch (_0x1e5868) {
                    $.logErr(_0x1e5868, _0x8928f1);
                } finally {
                    _0x7adc38();
                }
            }, _0x4f9c5a);
        });
    }

    async ["opensign"](_0x51f5a8 = 2000) {
        return new Promise(_0x304713 => {
            let _0x3ac6c4 = {
                "url": hostname + "/luckycat/aweme/v1/task/done/sign_in?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                },
                "body": "{}"
            };
            $.post(_0x3ac6c4, async (_0xb5ed8c, _0x5d2686, _0x202a13) => {
                try {
                    if (_0xb5ed8c) $.logErr(_0xb5ed8c); else {
                        let _0x95b577 = JSON.parse(_0x202a13);

                        _0x95b577.err_no == 0 ? (DoubleLog("\n ✅ 【" + this.index + "】签到成功: 获得 " + _0x95b577.data.amount + " 金币"), await this.signinad(2 * 1000)) : DoubleLog("\n ❌ 【" + this.index + "】签到失败: " + _0x95b577.err_tips);
                    }
                } catch (_0x16ac72) {
                    $.logErr(_0x16ac72, _0x5d2686);
                } finally {
                    _0x304713();
                }
            }, _0x51f5a8);
        });
    }

    async ["signinad"](_0x1f1618 = 2000) {
        return new Promise(_0x5b6761 => {
            let _0x3429ce = {
                "url": hostname + "/luckycat/aweme/v1/task/done/excitation_ad_signin?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                },
                "body": "{}"
            };
            $.post(_0x3429ce, async (_0x1e708d, _0x45a8e9, _0xae6cb0) => {
                try {
                    if (_0x1e708d) $.logErr(_0x1e708d); else {
                        let _0x1a3eb8 = JSON.parse(_0xae6cb0);

                        _0x1a3eb8.err_no == 0 ? (this.req_id = _0x1a3eb8.data.excitation_ad_info.req_id, this.ad_id = _0x1a3eb8.data.excitation_ad_info.ad_id, this.score_amount = _0x1a3eb8.data.excitation_ad_info.score_amount, DoubleLog("\n ✅ 【" + this.index + "】获取广告: 成功预计可获得 " + this.score_amount + " 金币")) : DoubleLog("\n ❌ 【" + this.index + "】获取广告: " + _0x1a3eb8.err_tips);
                    }
                } catch (_0x3893aa) {
                    $.logErr(_0x3893aa, _0x45a8e9);
                } finally {
                    _0x5b6761();
                }
            }, _0x1f1618);
        });
    }

    async ["step"](_0x334f48 = 2000) {
        return new Promise(_0x41f5e5 => {
            let _0x148293 = {
                "url": hostname + "/luckycat/aweme/v1/walk/page?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                }
            };
            $.get(_0x148293, async (_0x3a682b, _0x241f52, _0x129320) => {
                try {
                    if (_0x3a682b) $.logErr(_0x3a682b); else {
                        let _0x3b284b = JSON.parse(_0x129320);

                        _0x3b284b.err_no == 0 ? _0x3b284b.data.today_step > 0 ? (DoubleLog("\n ✅ 【" + this.index + "】今日步数: 今日步数:" + _0x3b284b.data.today_step + "步，已领取" + _0x3b284b.data.today_step_reward.reward_amount + "金币"), _0x3b284b.data.today_step_reward.reward_amount == 0 && (await this.step_reward(2 * 1000))) : await this.step_submit(2 * 1000) : DoubleLog("\n ❌ 【" + this.index + "】今日步数: " + _0x3b284b.err_tips);
                    }
                } catch (_0xc66ec3) {
                    $.logErr(_0xc66ec3, _0x241f52);
                } finally {
                    _0x41f5e5();
                }
            }, _0x334f48);
        });
    }

    async ["step_submit"](_0x2b0cdf = 2000) {
        return new Promise(_0x34e18e => {
            let _0x5e3428 = {
                "url": hostname + "/luckycat/aweme/v1/task/walk/step_submit?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                },
                "body": "{\"step\":" + parseInt(10000 + Math.random() * 10000 + "") + ",\"submit_time\":" + parseInt(new Date().getTime() / 1000 + "") + "}"
            };
            $.post(_0x5e3428, async (_0x46d274, _0x421c97, _0x58ae53) => {
                try {
                    if (_0x46d274) $.logErr(_0x46d274); else {
                        let _0x11f42e = JSON.parse(_0x58ae53);

                        _0x11f42e.err_no == 0 ? (DoubleLog("\n ✅ 【" + this.index + "】上传步数: 今日提交步数：" + _0x11f42e.data.today_step + " 步"), await this.step_reward(2 * 1000)) : DoubleLog("\n ❌ 【" + this.index + "】上传步数: " + _0x11f42e.err_tips);
                    }
                } catch (_0x4368cc) {
                    $.logErr(_0x4368cc, _0x421c97);
                } finally {
                    _0x34e18e();
                }
            }, _0x2b0cdf);
        });
    }

    async ["step_reward"](_0x48d133 = 2000) {
        return new Promise(_0x168fbc => {
            let _0x48286b = {
                "url": hostname + "/luckycat/aweme/v1/task/walk/receive_step_reward?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                },
                "body": "{\"in_sp_time\":0}"
            };
            $.post(_0x48286b, async (_0x1c4122, _0x10b7df, _0x36a46d) => {
                try {
                    if (_0x1c4122) $.logErr(_0x1c4122); else {
                        let _0x401ddd = JSON.parse(_0x36a46d);

                        _0x401ddd.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】步数奖励: 获得：" + _0x401ddd.data.reward_amount + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】步数奖励: " + _0x401ddd.err_tips);
                    }
                } catch (_0x596e74) {
                    $.logErr(_0x596e74, _0x10b7df);
                } finally {
                    _0x168fbc();
                }
            }, _0x48d133);
        });
    }

    async ["read"](_0x17b662 = 2000) {
        return new Promise(_0x3b529f => {
            let _0x45b0c9 = {
                "url": hostname + "/luckycat/aweme/v1/task/done/read?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2],
                    "x-ss-req-ticket": timestamp
                },
                "body": "{\"hidden_status\":1,\"is_user_active\":false,\"widget_style\":\"default\",\"has_alipay\":\"1\",\"pendant_show_scene\":\"feed_recommend\",\"is_incentive_page_to_feed\":false,\"read_task_public_welfare_status\":-1,\"read_public_welfare_group\":-1,\"task_id\":0,\"task_key\":\"\",\"is_click_icon\":false}"
            };
            $.post(_0x45b0c9, async (_0x31aa10, _0x5430fc, _0x2be6d4) => {
                try {
                    if (_0x31aa10) $.logErr(_0x31aa10); else {
                        let _0x29154a = JSON.parse(_0x2be6d4);

                        if (_0x29154a.err_no == 0) DoubleLog("\n ✅ 【" + this.index + "】刷小视频: 获得奖励" + _0x29154a.data.score_amount + " 金币"); else _0x29154a.err_no == 10009 ? DoubleLog("\n ❌ 【" + this.index + "】刷小视频: 视频时间未达到或设备问题") : DoubleLog("\n ❌ 【" + this.index + "】刷小视频: " + _0x29154a.err_tips);
                    }
                } catch (_0x4c041f) {
                    $.logErr(_0x4c041f, _0x5430fc);
                } finally {
                    _0x3b529f();
                }
            }, _0x17b662);
        });
    }

    async ["treasure"](_0x34a5bb = 2000) {
        return new Promise(_0x247771 => {
            let _0x4b4570 = {
                "url": hostname + "/luckycat/aweme/v1/task/page?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                }
            };
            $.get(_0x4b4570, async (_0x247880, _0x1ac07a, _0x5246c5) => {
                try {
                    if (_0x247880) $.logErr(_0x247880); else {
                        let _0x417ee3 = JSON.parse(_0x5246c5);

                        if (_0x417ee3.err_no == 0) {
                            let _0x3ec654 = _0x417ee3.data.treasure_box.treasure_stats.cur_time,
                                _0x16c9d0 = _0x417ee3.data.treasure_box.treasure_stats.next_time;
                            _0x16c9d0 <= _0x3ec654 ? (DoubleLog("\n ✅ 【" + this.index + "】打开宝箱: 正在执行获取宝箱请等待..."), await this.open_treasure(2 * 1000)) : DoubleLog("\n ❌ 【" + this.index + "】打开宝箱: 下次开宝箱：" + $.time("yyyy-MM-dd HH:mm:ss", _0x16c9d0 * 1000));
                        } else DoubleLog("\n ❌ 【" + this.index + "】宝箱广告: " + _0x417ee3.err_tips);
                    }
                } catch (_0x4898a5) {
                    $.logErr(_0x4898a5, _0x1ac07a);
                } finally {
                    _0x247771();
                }
            }, _0x34a5bb);
        });
    }

    async ["open_treasure"](_0x20a657 = 2000) {
        return new Promise(_0x4579de => {
            let _0x577053 = {
                "url": hostname + "/luckycat/aweme/v1/task/done/treasure_task?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                },
                "body": "{}"
            };
            $.post(_0x577053, async (_0x55590f, _0x4430a6, _0x3fa0ba) => {
                try {
                    if (_0x55590f) $.logErr(_0x55590f); else {
                        let _0x15a888 = JSON.parse(_0x3fa0ba);

                        if (_0x15a888.err_no == 0) {
                            let _0x2a378b = _0x15a888.data.excitation_ad_info.score_amount,
                                _0x487ee9 = _0x15a888.data.excitation_ad_info.ad_id,
                                _0x9b722b = _0x15a888.data.excitation_ad_info.req_id;
                            DoubleLog("\n ✅ 【" + this.index + "】打开宝箱: 获得 " + _0x15a888.data.amount + " 金币");
                            await $.wait(1000);
                            DoubleLog("\n ✅ 【" + this.index + "】宝箱广告: 预计可获得 " + _0x2a378b + " 金币");
                            await $.wait(1000);
                            await this.treasure_video(_0x2a378b, _0x487ee9, _0x9b722b, 2 * 1000);
                        } else DoubleLog("\n ❌ 【" + this.index + "】打开宝箱: " + _0x15a888.err_tips);
                    }
                } catch (_0x2c1838) {
                    $.logErr(_0x2c1838, _0x4430a6);
                } finally {
                    _0x4579de();
                }
            }, _0x20a657);
        });
    }

    async ["treasure_video"](_0x44b970, _0x1d438c, _0x285b57, _0x5133b7 = 2000) {
        return new Promise(_0x41f99a => {
            let _0x207a15 = {
                "url": hostname + "/luckycat/aweme/v1/task/done/excitation_ad_treasure_box?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                },
                "body": "{\"amount\":\"" + _0x44b970 + "\",\"inspire_modal_add_modal_manage\":false,\"cat_treasure_reward\":0,\"ad_rit\":\"" + _0x1d438c + "\",\"ad_inspire\":\"{\"score_amount\":\"" + _0x44b970 + "\",\"amount\":\"" + _0x44b970 + "\",\"req_id\":\"" + _0x285b57 + "\"}\",\"task_key\":\"excitation_ad_treasure_box\",\"stage_score_amount\":[],\"ad_alias_position\":\"box\",\"need_reward\":true,\"finish_action\":0,\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":51,\"dynamic_settings_version\":51,\"poll_settings_version\":0,\"aggr_income_id\":\"\"}"
            };
            $.post(_0x207a15, async (_0x5a835e, _0x4f1fc9, _0x3f3234) => {
                try {
                    if (_0x5a835e) $.logErr(_0x5a835e); else {
                        let _0x5a2834 = JSON.parse(_0x3f3234);

                        _0x5a2834.err_no == 0 ? (DoubleLog("\n ✅ 【" + this.index + "】宝箱广告: 获得 " + _0x5a2834.data.amount + " 金币"), await $.wait(1000), await this.treasure_video(_0x5a2834.data.aggr_info.aggr_income_id, 2 * 1000)) : DoubleLog("\n ❌ 【" + this.index + "】宝箱广告: " + _0x5a2834.err_tips);
                    }
                } catch (_0x53881a) {
                    $.logErr(_0x53881a, _0x4f1fc9);
                } finally {
                    _0x41f99a();
                }
            }, _0x5133b7);
        });
    }

    async ["treasure_video_status"](_0x320159, _0x1ce3c1 = 2000) {
        return new Promise(_0x25cb2a => {
            let _0x546bb7 = {
                "url": hostname + "/luckycat/aweme/v1/task/done/excitation_ad/one_more?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                },
                "body": "{\"task_key\":\"excitation_ad_treasure_box\",\"rit\":\"28038\",\"creator_id\":\"12317000\",\"one_more_round\":0,\"aggr_income_id\":\"" + _0x320159 + "\"}"
            };
            $.post(_0x546bb7, async (_0x33a6f2, _0x53c192, _0x15d1de) => {
                try {
                    if (_0x33a6f2) $.logErr(_0x33a6f2); else {
                        let _0x3c7424 = JSON.parse(_0x15d1de);

                        _0x3c7424.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】宝箱追加: 获得 " + _0x3c7424.data.amount + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】宝箱追加: " + _0x3c7424.err_tips);
                    }
                } catch (_0x291a33) {
                    $.logErr(_0x291a33, _0x53c192);
                } finally {
                    _0x25cb2a();
                }
            }, _0x1ce3c1);
        });
    }

    async ["video"](_0x18fd69 = 2000) {
        return new Promise(_0x3df2ee => {
            let _0x2d8967 = {
                "url": hostname + "/luckycat/aweme/v1/task/page?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                }
            };
            $.get(_0x2d8967, async (_0x4b023a, _0x6293b9, _0x480ecf) => {
                try {
                    if (_0x4b023a) $.logErr(_0x4b023a); else {
                        let _0x6bc890 = JSON.parse(_0x480ecf);

                        if (_0x6bc890.err_no == 0) {
                            if (_0x6bc890.data.task_list && Array.isArray(_0x6bc890.data.task_list)) for (let _0x2cf241 = 0; _0x2cf241 < _0x6bc890.data.task_list.length; _0x2cf241++) {
                                let _0xb12bfb = _0x6bc890.data.task_list[_0x2cf241];

                                if (_0xb12bfb.task_id == "111") {
                                    let _0x18ca64 = JSON.parse(_0xb12bfb.status_extra);

                                    if (_0x18ca64.completed == true) {
                                        if (typeof _0x18ca64.tpl != "undefined") {
                                            DoubleLog("\n ❌ 【" + this.index + "】广告赚金: 距离下一次广告还剩：" + $.time("mm:ss", _0x18ca64.tpl.countdown.value) + " 秒");
                                        } else DoubleLog("\n ❌ 【" + this.index + "】广告赚金: 距离下一次广告还剩：" + $.time("mm:ss", _0x18ca64.tpl.countdown.value) + " 秒");
                                    } else {
                                        DoubleLog("\n ✅ 【" + this.index + "】广告赚金: 执行 看广告赚金币 任务");
                                        await this.open_video(_0x18ca64.ad_id, _0x18ca64.req_id, 2 * 1000);
                                    }
                                }
                            } else DoubleLog("\n ❌ 【" + this.index + "】任务列表: 没有找到任务相关列表");
                        } else DoubleLog("\n ❌ 【" + this.index + "】任务列表: " + _0x6bc890.err_tips);
                    }
                } catch (_0x4a899a) {
                    $.logErr(_0x4a899a, _0x6293b9);
                } finally {
                    _0x3df2ee();
                }
            }, _0x18fd69);
        });
    }

    async ["open_video"](_0x3e948a, _0x911776, _0x1123f8 = 2000) {
        return new Promise(_0x3448bb => {
            let _0x382c87 = {
                "url": hostname + "/luckycat/aweme/v1/task/excitation_ad/detail?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                }
            };
            $.get(_0x382c87, async (_0x400987, _0x2a6fc3, _0x19ac20) => {
                try {
                    if (_0x400987) $.logErr(_0x400987); else {
                        let _0x177b04 = JSON.parse(_0x19ac20);

                        _0x177b04.err_no == 0 ? (DoubleLog("\n ✅ 【" + this.index + "】打开广告: 获得奖励 " + _0x177b04.data.score_amount + " 金币"), await this.open_video_stop(_0x3e948a, _0x911776, _0x177b04.data.score_amount, 2 * 1000)) : DoubleLog("\n ❌ 【" + this.index + "】打开广告: " + _0x177b04.err_tips);
                    }
                } catch (_0x59d2bb) {
                    $.logErr(_0x59d2bb, _0x2a6fc3);
                } finally {
                    _0x3448bb();
                }
            }, _0x1123f8);
        });
    }

    async ["open_video_stop"](_0x1a1b3f, _0x5e1591, _0x3ddecd, _0x524e99 = 2000) {
        return new Promise(_0x968f37 => {
            let _0x4d8e60 = {
                "url": hostname + "/luckycat/aweme/v1/task/done/excitation_ad?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                },
                "body": "{\"amount\":\"" + _0x3ddecd + "\",\"inspire_modal_add_modal_manage\":false,\"ad_rit\":\"" + _0x1a1b3f + "\",\"ad_inspire\":\"{\"score_amount\":\"" + _0x3ddecd + "\",\"experience\":\"-1\",\"req_id\":\"" + _0x5e1591 + "\"}\",\"task_key\":\"excitation_ad\",\"stage_score_amount\":[],\"ad_alias_position\":\"task\",\"need_reward\":true,\"experience\":\"-1\",\"params_for_special\":\"luckydog_sdk\",\"static_settings_version\":51,\"dynamic_settings_version\":51,\"poll_settings_version\":0,\"aggr_income_id\":\"\"}"
            };
            $.post(_0x4d8e60, async (_0x35e8fa, _0x2d9aca, _0x3c14e6) => {
                try {
                    if (_0x35e8fa) $.logErr(_0x35e8fa); else {
                        let _0x20facb = JSON.parse(_0x3c14e6);

                        _0x20facb.err_no == 0 ? (this.aggrinfoid = _0x20facb.data.aggr_info.aggr_income_id, DoubleLog("\n ✅ 【" + this.index + "】视频广告: 获得奖励 " + _0x20facb.data.score_amount + " 金币"), await this.video_more_status(2 * 1000)) : DoubleLog("\n ❌ 【" + this.index + "】视频广告: " + _0x20facb.err_tips);
                    }
                } catch (_0x2ee223) {
                    $.logErr(_0x2ee223, _0x2d9aca);
                } finally {
                    _0x968f37();
                }
            }, _0x524e99);
        });
    }

    async ["video_more_status"](_0x2e11ca = 2000) {
        return new Promise(_0x44d060 => {
            let _0x45efde = {
                "url": hostname + "/luckycat/aweme/v1/task/excitation_ad/one_more/detail?task_key=excitation_ad&rit=28038&creator_id=12315000&one_more_round=0&" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                }
            };
            $.get(_0x45efde, async (_0x3a0db6, _0x1b75fd, _0x2d4f62) => {
                try {
                    if (_0x3a0db6) $.logErr(_0x3a0db6); else {
                        let _0x427e6e = JSON.parse(_0x2d4f62);

                        _0x427e6e.err_no == 0 ? (this.aggr_income_id = _0x427e6e.data.aggr_income_id, DoubleLog("\n ✅ 【" + this.index + "】广告追加: 获得奖励 " + _0x427e6e.data.amount + " 金币"), await this.video_more1_status(2 * 1000)) : DoubleLog("\n ❌ 【" + this.index + "】广告追加: " + _0x427e6e.err_tips);
                    }
                } catch (_0x11c449) {
                    $.logErr(_0x11c449, _0x1b75fd);
                } finally {
                    _0x44d060();
                }
            }, _0x2e11ca);
        });
    }

    async ["video_more1_status"](_0x931881 = 2000) {
        return new Promise(_0x2994a6 => {
            let _0x31e328 = {
                "url": hostname + "/luckycat/aweme/v1/task/excitation_ad/one_more/detail?task_key=excitation_ad&rit=28038&creator_id=12315000&one_more_round=1&" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                }
            };
            $.get(_0x31e328, async (_0x5d77b4, _0x1cc56e, _0x1a671e) => {
                try {
                    if (_0x5d77b4) $.logErr(_0x5d77b4); else {
                        let _0x13827e = JSON.parse(_0x1a671e);

                        _0x13827e.err_no == 0 ? (this.aggr_income_id = _0x13827e.data.aggr_income_id, DoubleLog("\n ✅ 【" + this.index + "】广告追加: 获得奖励 " + _0x13827e.data.amount + " 金币"), await this.one_more_detail(2 * 1000)) : DoubleLog("\n ❌ 【" + this.index + "】广告追加: " + _0x13827e.err_tips);
                    }
                } catch (_0x3f8b06) {
                    $.logErr(_0x3f8b06, _0x1cc56e);
                } finally {
                    _0x2994a6();
                }
            }, _0x931881);
        });
    }

    async ["video_more2_status"](_0x4c78d3 = 2000) {
        return new Promise(_0x3cc51e => {
            let _0x12e122 = {
                "url": hostname + "/luckycat/aweme/v1/task/excitation_ad/one_more/detail?task_key=excitation_ad&rit=28038&creator_id=12315000&one_more_round=2&" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                }
            };
            $.get(_0x12e122, async (_0x39ee58, _0x7ed4b, _0x3b1c40) => {
                try {
                    if (_0x39ee58) $.logErr(_0x39ee58); else {
                        let _0x490bd4 = JSON.parse(_0x3b1c40);

                        _0x490bd4.err_no == 0 ? (this.aggr_income_id = _0x490bd4.data.aggr_income_id, DoubleLog("\n ✅ 【" + this.index + "】广告追加: 获得奖励 " + _0x490bd4.data.amount + " 金币"), await this.one_more_detail(2 * 1000)) : DoubleLog("\n ❌ 【" + this.index + "】广告追加: " + _0x490bd4.err_tips);
                    }
                } catch (_0x4c9dfd) {
                    $.logErr(_0x4c9dfd, _0x7ed4b);
                } finally {
                    _0x3cc51e();
                }
            }, _0x4c78d3);
        });
    }

    async ["one_moread"](_0x4b8f44 = 2000) {
        return new Promise(_0x4e91e2 => {
            let _0x302653 = {
                "url": hostname + "/luckycat/aweme/v1/task/done/excitation_ad/one_more?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                },
                "body": "{\"task_key\":\"excitation_ad\",\"rit\":\"28038\",\"creator_id\":\"12315000\",\"one_more_round\":0,\"aggr_income_id\":\"" + this.aggrinfoid + "\"}"
            };
            $.post(_0x302653, async (_0x39897f, _0x20e1df, _0x2d6471) => {
                try {
                    if (_0x39897f) $.logErr(_0x39897f); else {
                        let _0x256768 = JSON.parse(_0x2d6471);

                        _0x256768.err_no == 0 ? DoubleLog("\n ✅ 【" + this.index + "】追加奖励: 获得 " + _0x256768.data.amount + " 金币") : DoubleLog("\n ❌ 【" + this.index + "】追加奖励: " + _0x256768.err_tips);
                    }
                } catch (_0x59e22b) {
                    $.logErr(_0x59e22b, _0x20e1df);
                } finally {
                    _0x4e91e2();
                }
            }, _0x4b8f44);
        });
    }

    async ["shopping"](_0x17973d = 2000) {
        return new Promise(_0xaef12b => {
            let _0x10ffd1 = {
                "url": hostname + "/luckycat/aweme/v1/task/page?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.useragent,
                    "Cookie": "sessionid=" + this.sessionid,
                    "X-Gorgon": this.gorgon,
                    "X-Khronos": times
                }
            };
            $.get(_0x10ffd1, async (_0xcfb8cd, _0x3d3279, _0x222586) => {
                try {
                    if (_0xcfb8cd) $.logErr(_0xcfb8cd); else {
                        let _0x146d25 = JSON.parse(_0x222586);

                        if (_0x146d25.err_no == 0) {
                            if (_0x146d25.data.resource_list && Array.isArray(_0x146d25.data.resource_list)) for (let _0x11cfd2 = 0; _0x11cfd2 < _0x146d25.data.resource_list.length; _0x11cfd2++) {
                                let _0x424bdf = _0x146d25.data.resource_list[_0x11cfd2];
                                if (_0x424bdf.card_key == "normal") for (let _0x36ac60 = 0; _0x36ac60 < _0x424bdf.resource_data.task_list.length; _0x36ac60++) {
                                    let _0x3ed4aa = _0x424bdf.resource_data.task_list[_0x36ac60];
                                    _0x3ed4aa.task_id == "1334" && (_0x3ed4aa.action_cycle >= _0x3ed4aa.action_times ? DoubleLog("\n ❌ 【" + this.index + "】逛街赚钱: 每日可完成 " + _0x3ed4aa.action_cycle + "/" + _0x3ed4aa.action_times + " 次") : (DoubleLog("\n ✅ 【" + this.index + "】逛街赚钱: 每日可完成 " + _0x3ed4aa.action_cycle + "/" + _0x3ed4aa.action_times + " 次"), await $.wait(2000), await this.openshopping(2 * 1000)));
                                }
                            } else DoubleLog("\n ❌ 【" + this.index + "】任务列表: 没有找到任务相关列表");
                        } else DoubleLog("\n ❌ 【" + this.index + "】任务列表: " + _0x146d25.err_tips);
                    }
                } catch (_0x45a86a) {
                    $.logErr(_0x45a86a, _0x3d3279);
                } finally {
                    _0xaef12b();
                }
            }, _0x17973d);
        });
    }

    async ["openshopping"](_0x1287ca = 2000) {
        return new Promise(_0x41687f => {
            let _0x4189d7 = {
                "url": hostname + "/luckycat/aweme/v1/task/done/shopping_gold?mode=init&" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                },
                "body": "body=null"
            };
            $.post(_0x4189d7, async (_0x3d5883, _0x571fa8, _0x4d8438) => {
                try {
                    if (_0x3d5883) $.logErr(_0x3d5883); else {
                        let _0x20c0c7 = JSON.parse(_0x4d8438);

                        if (_0x20c0c7.err_no == 0) for (let _0x375f59 = 0; _0x375f59 < 15; _0x375f59++) {
                            if (!_0x20c0c7.data.reward_text) {
                                await $.wait(6000);
                                await this.shopping_ad(2 * 1000);
                                await $.wait(6000);
                            } else {
                                DoubleLog("\n ✅ 【" + this.index + "】逛街奖励: " + _0x20c0c7.data.reward_text);
                                continue;
                            }
                        } else DoubleLog("\n ❌ 【" + this.index + "】逛街奖励: " + _0x20c0c7.err_tips);
                    }
                } catch (_0x5b8b24) {
                    $.logErr(_0x5b8b24, _0x571fa8);
                } finally {
                    _0x41687f();
                }
            }, _0x1287ca);
        });
    }

    async ["shopping_ad"](_0x4c1c1f = 2000) {
        return new Promise(_0x5267c8 => {
            let _0x50bec2 = {
                "url": hostname + "/api/incentive/scene/marketing?marketing=aweme_ad_order_coin&scene=shopping_gold&is_vcd=0&request_tag_from=h5&" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                }
            };
            $.get(_0x50bec2, async (_0x3bb4e8, _0x44b548, _0x5b4d08) => {
                try {
                    if (_0x3bb4e8) $.logErr(_0x3bb4e8); else {
                        let _0x217f06 = JSON.parse(_0x5b4d08);

                        _0x217f06.code == 0 ? DoubleLog("\n ✅ 【" + this.index + "】逛街浏览: 正在浏览页面 5 秒后在操作") : DoubleLog("\n ❌ 【" + this.index + "】逛街浏览: " + _0x217f06.msg);
                    }
                } catch (_0x2d1fb9) {
                    $.logErr(_0x2d1fb9, _0x44b548);
                } finally {
                    _0x5267c8();
                }
            }, _0x4c1c1f);
        });
    }

    async ["shopping_gold"](_0x2d0e4e = 2000) {
        return new Promise(_0x265f39 => {
            let _0x3be165 = {
                "url": hostname + "/api/incentive/marketing/name?scene=shopping_gold&is_vcd=0&request_tag_from=h5&" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                }
            };
            $.get(_0x3be165, async (_0x249d9c, _0x2c3296, _0x27e460) => {
                try {
                    if (_0x249d9c) $.logErr(_0x249d9c); else {
                        let _0x504a7b = JSON.parse(_0x27e460);

                        _0x504a7b.code == 0 ? DoubleLog("\n ✅ 【" + this.index + "】逛街浏览: 正在浏览页面 5 秒后在操作") : DoubleLog("\n ❌ 【" + this.index + "】逛街浏览: " + _0x504a7b.msg);
                    }
                } catch (_0x40555d) {
                    $.logErr(_0x40555d, _0x2c3296);
                } finally {
                    _0x265f39();
                }
            }, _0x2d0e4e);
        });
    }

    async ["task"](_0x560fb9 = 2000) {
        return new Promise(_0x2a4ea2 => {
            let _0xd5408b = {
                "url": hostname + "/luckycat/aweme/v1/task/page?" + this.ck[0],
                "headers": {
                    "Host": host,
                    "Content-Type": "application/json; charset=utf-8",
                    "user-agent": this.ck[4],
                    "Cookie": this.ck[1],
                    "x-ladon": this.ck[3],
                    "x-argus": this.ck[2]
                }
            };
            $.get(_0xd5408b, async (_0x2c4b53, _0x5a3ae6, _0x27af65) => {
                try {
                    if (_0x2c4b53) $.logErr(_0x2c4b53); else {
                        let _0x5caac2 = JSON.parse(_0x27af65);

                        if (_0x5caac2.err_no == 0) {
                            if (_0x5caac2.data.resource_list && Array.isArray(_0x5caac2.data.resource_list)) for (let _0x5a26ad = 0; _0x5a26ad < _0x5caac2.data.resource_list.length; _0x5a26ad++) {
                                let _0x2e830c = _0x5caac2.data.resource_list[_0x5a26ad];
                                if (_0x2e830c.card_key == "normal") for (let _0x42d7d2 = 0; _0x42d7d2 < _0x2e830c.resource_data.task_list.length; _0x42d7d2++) {
                                    let _0x5ef768 = _0x2e830c.resource_data.task_list[_0x42d7d2];

                                    if (_0x5ef768.task_id == 203 || _0x5ef768.task_id == 111 || _0x5ef768.task_id == 1334 || _0x5ef768.task_id == 1007 || _0x5ef768.task_id == 1313 || _0x5ef768.task_id == 1485 || _0x5ef768.task_id == 1091 || _0x5ef768.task_id == 200003 || _0x5ef768.task_id == 160002 || _0x5ef768.task_id == 1095 || _0x5ef768.task_id == 1336) {
                                        if (_0x5ef768.task_id == "203") {
                                            if (_0x5ef768.completed == true) {
                                                DoubleLog("\n ✅ 【" + this.index + "】签到信息: 今天已签到，已连续签到 " + _0x5ef768.action_times + " 天");
                                            } else DoubleLog("\n ✅ 【" + this.index + "】签到信息: 今天未签到，已连续签到 " + _0x5ef768.action_times + " 天");
                                        }
                                    }
                                }
                            } else DoubleLog("\n ❌ 【" + this.index + "】任务列表: 没有找到任务相关列表");
                        } else {
                            DoubleLog("\n ❌ 【" + this.index + "】任务列表: " + _0x5caac2.err_tips);
                        }
                    }
                } catch (_0x4f3641) {
                    $.logErr(_0x4f3641, _0x5a3ae6);
                } finally {
                    _0x2a4ea2();
                }
            }, _0x560fb9);
        });
    }

}

!(async () => {
    if (!(await checkEnv())) return;
    DoubleLog("\n🎉会员注册：http://www.lekebo.top");
    DoubleLog("\n🎉交流 Q群：104062430、317929242");
    await checktoken();
    console.log("\n================ 本次运行脚本结束 ===============");
})().catch(_0x1f2150 => console.log(_0x1f2150)).finally(() => $.done());

async function checkEnv() {
    if (userCookie) {
        let _0x30ba2b = envSplitor[0];

        for (let _0x51635d of envSplitor) if (userCookie.indexOf(_0x51635d) > -1) {
            _0x30ba2b = _0x51635d;
            break;
        }

        for (let _0x5afcd4 of userCookie.split(_0x30ba2b)) _0x5afcd4 && userList.push(new UserInfo(_0x5afcd4));

        userCount = userList.length;
    } else {
        console.log("\n\n 温馨提示：您没有建立系统变量或者没填写参数\n\n");
        return;
    }

    return true;
}

async function checktoken() {
    if (versionupdate == 1) {
        if (scriptVersionLatest != scriptVersion) {
            await getVersion(), console.log("\n================ 版本对比检查更新 ==============="), console.log("\n 当前版本：" + scriptVersion + "，更新时间：" + update_tines), console.log("\n 最新版本：" + scriptVersionLatest), console.log("\n 更新信息：" + update_data);
        } else {
            await getVersion(), console.log("\n================ 版本对比检查更新 ==============="), console.log("\n 版本信息：" + scriptVersion + " ，已是最新版本无需更新开始执行脚本");
        }
    } else {
        console.log("\n================ 版本对比检查更新 ==============="), console.log("\n 当前版本:" + scriptVersion + "，更新时间:" + update_tines + "，已设不更新版本");
    }
    console.log("\n================ 脚本会员登陆检查 ===============");

    await usertoken_login(2 * 1000);

}

async function usertoken_login(_0x1e4e23 = 2000) {
    DoubleLog("\n 超级会员用户: " + "假的SSSSSVIP" + "，脚本时间:" + 0);
    if (userList.length > 100) {
        DoubleLog("\n================ 脚本共 " + userList.length + " 个账号 ================");
        DoubleLog("\n\n 温馨提示：您的账户超出作者指定的数量，请升级此账号\n");
    } else {
        DoubleLog("\n================ 脚本共 " + userList.length + " 个账号 ================");
        await start();
    }
}

function getVersion(_0x180e40 = 3 * 1000) {
    return new Promise(_0x3ded12 => {
        let _0x498056 = {
            "url": "https://ghproxy.com/https://raw.githubusercontent.com/qq274023/lekebo/master/lekebo_akrd.js"
        };
        $.get(_0x498056, async (_0x4111ab, _0x49dd3a, _0x1f5a46) => {
            try {
                scriptVersionLatest = _0x1f5a46.match(/scriptVersion = "([\d\.]+)"/)[1];
                update_data = _0x1f5a46.match(/update_data = "(.*?)"/)[1];
            } catch (_0x58f652) {
                $.logErr(_0x58f652, _0x49dd3a);
            } finally {
                _0x3ded12();
            }
        }, _0x180e40);
    });
}

function getUA() {
    $.UUID = randomString(40);
    const _0x58f28c = {
        "167814": "10.1.4",
        "167841": "10.1.6",
        "167853": "10.2.0"
    };
    $.osVersion = randomNum(13, 14) + "." + randomNum(3, 6) + "." + randomNum(1, 3);

    let _0x15d80c = "network/" + ["4g", "5g", "wifi"][randomNum(0, 2)];

    return $.mobile = "iPhone" + randomNum(9, 13) + "," + randomNum(1, 3), $.build = ["167814", "167841", "167853"][randomNum(0, 2)], $.appVersion = _0x58f28c[$.build], "jdapp;iPhone;" + $.appVersion + ";" + $.osVersion + ";" + $.UUID + ";M/5.0;" + _0x15d80c + ";ADID/;model/" + $.mobile + ";addressid/;appBuild/" + $.build + ";jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS " + $.osVersion.replace(/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}

function randomString(_0x851870) {
    _0x851870 = _0x851870 || 32;
    var _0x16cef6 = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
        _0x2d0162 = _0x16cef6.length,
        _0x1426ab = "";

    for (i = 0; i < _0x851870; i++) _0x1426ab += _0x16cef6.charAt(Math.floor(Math.random() * _0x2d0162));

    return _0x1426ab;
}

function randomsstring(_0x59c823, _0x3b56c2 = "abcdefhijkmnprstwxyz123456789") {
    _0x59c823 = _0x59c823 || 32;
    let _0x3ac13b = _0x3b56c2.length,
        _0x2a9662 = "";

    for (let _0x35975e = 0; _0x35975e < _0x59c823; _0x35975e++) _0x2a9662 += _0x3b56c2.charAt(Math.floor(Math.random() * _0x3ac13b));

    return _0x2a9662;
}

function randomNum(_0x4ed940, _0x2c4ca7) {
    if (arguments.length === 0) return Math.random();
    if (!_0x2c4ca7) _0x2c4ca7 = 10 ** (Math.log(_0x4ed940) * Math.LOG10E + 1 | 0) - 1;
    return Math.floor(Math.random() * (_0x2c4ca7 - _0x4ed940 + 1) + _0x4ed940);
}

function getTime(_0x78c263) {
    var _0xac1256 = new Date(_0x78c263);

    let _0x2c5047 = _0xac1256.getFullYear(),
        _0x5e4f3b = _0xac1256.getMonth() + 1 < 10 ? "0" + (_0xac1256.getMonth() + 1) : _0xac1256.getMonth() + 1,
        _0x29a1bf = _0xac1256.getDate() < 10 ? "0" + _0xac1256.getDate() : _0xac1256.getDate(),
        _0x9957db = _0xac1256.getHours() < 10 ? "0" + _0xac1256.getHours() : _0xac1256.getHours(),
        _0x4fdac4 = _0xac1256.getMinutes() < 10 ? "0" + _0xac1256.getMinutes() : _0xac1256.getMinutes(),
        _0x42590d = _0xac1256.getSeconds() < 10 ? "0" + _0xac1256.getSeconds() : _0xac1256.getSeconds();

    return _0x2c5047 + "-" + _0x5e4f3b + "-" + _0x29a1bf + " " + _0x9957db + ":" + _0x4fdac4 + ":" + _0x42590d;
}

function tmtoDate(_0x132437 = +new Date()) {
    if (_0x132437.toString().length == 13) {
        var _0x109cb5 = new Date(_0x132437 + 8 * 3600 * 1000);

        return _0x109cb5.toJSON().substr(0, 19).replace("T", " ");
    } else {
        if (_0x132437.toString().length == 10) {
            _0x132437 = _0x132437 * 1000;

            var _0x109cb5 = new Date(_0x132437 + 8 * 3600 * 1000);

            return _0x109cb5.toJSON().substr(0, 19).replace("T", " ");
        }
    }
}

function phone_num(_0x166b94) {
    if (_0x166b94.length == 11) {
        let _0x416fd1 = _0x166b94.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");

        return _0x416fd1;
    } else return _0x166b94;
}

// ============================================结束项目所需参数============================================ \\
function DoubleLog(data) {
    if ($.isNode()) {
        if (data) {
            console.log(`${data}`);
            msg += `${data}`
        }
    } else {
        console.log(`${data}`);
        msg += `${data}`
    }
}

async function SendMsg(message) {
    if (!message) return;
    if (Notify > 0) {
        if ($.isNode()) {
            var notify = require("./sendNotify");
            await notify.sendNotify($.name, message)
        } else {
            $.msg($.name, '', message)
        }
    } else {
        console.log(message)
    }
}

function MD5Encrypt(a) {
    function b(a, b) {
        return a << b | a >>> 32 - b
    }

    function c(a, b) {
        var c, d, e, f, g;
        return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
    }

    function d(a, b, c) {
        return a & b | ~a & c
    }

    function e(a, b, c) {
        return a & c | b & ~c
    }

    function f(a, b, c) {
        return a ^ b ^ c
    }

    function g(a, b, c) {
        return b ^ (a | ~c)
    }

    function h(a, e, f, g, h, i, j) {
        return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e)
    }

    function i(a, d, f, g, h, i, j) {
        return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d)
    }

    function j(a, d, e, g, h, i, j) {
        return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d)
    }

    function k(a, d, e, f, h, i, j) {
        return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d)
    }

    function l(a) {
        for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
        return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g
    }

    function m(a) {
        var b, c, d = "", e = "";
        for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
        return d
    }

    function n(a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
        }
        return b
    }

    var o, p, q, r, s, t, u, v, w, x = [], y = 7, z = 12, A = 17, B = 22, C = 5, D = 9, E = 14, F = 20, G = 4, H = 11,
        I = 16, J = 23, K = 6, L = 10, M = 15, N = 21;
    for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);
    var O = m(t) + m(u) + m(v) + m(w);
    return O.toLowerCase()
}

function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
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
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
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
            } catch {
            }
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
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
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
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
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
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
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
            if (this.isSurge() || this.isLoon()) {
                t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
                })
            } else if (this.isQuanX()) {
                t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => e(t))
            } else {
                t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                }))
            }
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}