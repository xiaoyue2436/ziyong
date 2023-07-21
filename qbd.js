/*
q必达 优惠寄快递的

复制微信打开 
优惠代寄，上门取件，代理火热招募中…
weixin://dl/business/?t=WrAqJDOw2pg

邀请码:D66UAI

搞积分换快递钱,1000=1元,只能用于寄快递付费.可以说没啥搞

变量
soy_qbd_data
手机&密码

定时
 cron 45 10,21 * * *

*/

const $ = new Env("Q必达")
const author = '作者TG_ID:@ls_soy';
const notify = require("./sendNotify");
//通知控制,1发送, 0不发送
//const get_msg = 0

const g_host = 'xcx.wanhuida888.com'


var version_='jsjiami.com.v7';const _0x3d079a=_0x39b8;(function(_0x5e18ec,_0x481ceb,_0xd45a1f,_0x265969,_0x21882b,_0x548fd3,_0x46f5a7){return _0x5e18ec=_0x5e18ec>>0x2,_0x548fd3='hs',_0x46f5a7='hs',function(_0x8d600f,_0x5b54b7,_0x3af927,_0x1f7d32,_0x184598){const _0xd505c5=_0x39b8;_0x1f7d32='tfi',_0x548fd3=_0x1f7d32+_0x548fd3,_0x184598='up',_0x46f5a7+=_0x184598,_0x548fd3=_0x3af927(_0x548fd3),_0x46f5a7=_0x3af927(_0x46f5a7),_0x3af927=0x0;const _0x4d4625=_0x8d600f();while(!![]&&--_0x265969+_0x5b54b7){try{_0x1f7d32=-parseInt(_0xd505c5(0x1e0,'Hy@8'))/0x1*(parseInt(_0xd505c5(0x1c3,'Fge1'))/0x2)+-parseInt(_0xd505c5(0x1d4,'9owc'))/0x3+parseInt(_0xd505c5(0x176,'xifD'))/0x4*(-parseInt(_0xd505c5(0x20a,'El*M'))/0x5)+parseInt(_0xd505c5(0x2bd,'WgSH'))/0x6+-parseInt(_0xd505c5(0x1f9,'Mv0w'))/0x7+-parseInt(_0xd505c5(0x209,'KLex'))/0x8+-parseInt(_0xd505c5(0x214,'Redw'))/0x9*(-parseInt(_0xd505c5(0x21f,'Pgc&'))/0xa);}catch(_0x324651){_0x1f7d32=_0x3af927;}finally{_0x184598=_0x4d4625[_0x548fd3]();if(_0x5e18ec<=_0x265969)_0x3af927?_0x21882b?_0x1f7d32=_0x184598:_0x21882b=_0x184598:_0x3af927=_0x184598;else{if(_0x3af927==_0x21882b['replace'](/[QrdAPbLgSGKkwXNqytMUVhe=]/g,'')){if(_0x1f7d32===_0x5b54b7){_0x4d4625['un'+_0x548fd3](_0x184598);break;}_0x4d4625[_0x46f5a7](_0x184598);}}}}}(_0xd45a1f,_0x481ceb,function(_0x4f9b49,_0x1d5a5d,_0x156b81,_0xb97ddd,_0x1ed659,_0x1ba7e9,_0x576ec7){return _0x1d5a5d='\x73\x70\x6c\x69\x74',_0x4f9b49=arguments[0x0],_0x4f9b49=_0x4f9b49[_0x1d5a5d](''),_0x156b81='\x72\x65\x76\x65\x72\x73\x65',_0x4f9b49=_0x4f9b49[_0x156b81]('\x76'),_0xb97ddd='\x6a\x6f\x69\x6e',(0x1318f7,_0x4f9b49[_0xb97ddd](''));});}(0x320,0x5d9c9,_0x155c,0xca),_0x155c)&&(version_=_0x155c);const variable=_0x3d079a(0x171,'dtN1');try{Crypto_js=require(_0x3d079a(0x1eb,'Redw'));}catch(_0x2321ca){throw new Error(_0x3d079a(0x294,'WgSH'));}try{CryptoJs=$[_0x3d079a(0x229,'^eLa')]()?require(_0x3d079a(0x2bc,'dtN1')):'';}catch(_0x2387dd){throw new Error('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');}function _0x39b8(_0x1f7c99,_0xb470a1){const _0x155cd5=_0x155c();return _0x39b8=function(_0x39b86e,_0x54d70d){_0x39b86e=_0x39b86e-0x15c;let _0x10890d=_0x155cd5[_0x39b86e];if(_0x39b8['ISzdPI']===undefined){var _0x16e589=function(_0x12371d){const _0x52be6c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x325097='',_0x59562f='';for(let _0x58a4e5=0x0,_0x5af835,_0x1496f5,_0x2e1106=0x0;_0x1496f5=_0x12371d['charAt'](_0x2e1106++);~_0x1496f5&&(_0x5af835=_0x58a4e5%0x4?_0x5af835*0x40+_0x1496f5:_0x1496f5,_0x58a4e5++%0x4)?_0x325097+=String['fromCharCode'](0xff&_0x5af835>>(-0x2*_0x58a4e5&0x6)):0x0){_0x1496f5=_0x52be6c['indexOf'](_0x1496f5);}for(let _0x16b85d=0x0,_0x4c1c85=_0x325097['length'];_0x16b85d<_0x4c1c85;_0x16b85d++){_0x59562f+='%'+('00'+_0x325097['charCodeAt'](_0x16b85d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x59562f);};const _0x5376c2=function(_0x43b6e6,_0x3bf44f){let _0x959e96=[],_0x3db5d5=0x0,_0x885ba1,_0x477774='';_0x43b6e6=_0x16e589(_0x43b6e6);let _0xe130d;for(_0xe130d=0x0;_0xe130d<0x100;_0xe130d++){_0x959e96[_0xe130d]=_0xe130d;}for(_0xe130d=0x0;_0xe130d<0x100;_0xe130d++){_0x3db5d5=(_0x3db5d5+_0x959e96[_0xe130d]+_0x3bf44f['charCodeAt'](_0xe130d%_0x3bf44f['length']))%0x100,_0x885ba1=_0x959e96[_0xe130d],_0x959e96[_0xe130d]=_0x959e96[_0x3db5d5],_0x959e96[_0x3db5d5]=_0x885ba1;}_0xe130d=0x0,_0x3db5d5=0x0;for(let _0x365510=0x0;_0x365510<_0x43b6e6['length'];_0x365510++){_0xe130d=(_0xe130d+0x1)%0x100,_0x3db5d5=(_0x3db5d5+_0x959e96[_0xe130d])%0x100,_0x885ba1=_0x959e96[_0xe130d],_0x959e96[_0xe130d]=_0x959e96[_0x3db5d5],_0x959e96[_0x3db5d5]=_0x885ba1,_0x477774+=String['fromCharCode'](_0x43b6e6['charCodeAt'](_0x365510)^_0x959e96[(_0x959e96[_0xe130d]+_0x959e96[_0x3db5d5])%0x100]);}return _0x477774;};_0x39b8['DolHWv']=_0x5376c2,_0x1f7c99=arguments,_0x39b8['ISzdPI']=!![];}const _0x42f237=_0x155cd5[0x0],_0x4ff9cf=_0x39b86e+_0x42f237,_0x407e62=_0x1f7c99[_0x4ff9cf];return!_0x407e62?(_0x39b8['uVCRvt']===undefined&&(_0x39b8['uVCRvt']=!![]),_0x10890d=_0x39b8['DolHWv'](_0x10890d,_0x54d70d),_0x1f7c99[_0x4ff9cf]=_0x10890d):_0x10890d=_0x407e62,_0x10890d;},_0x39b8(_0x1f7c99,_0xb470a1);}try{fs=$['isNode']()?require('fs'):'';}catch(_0x392b2c){throw new Error(_0x3d079a(0x258,'0pRU'));}try{os=$[_0x3d079a(0x2b9,'KLex')]()?require('os'):'';}catch(_0xf164e){throw new Error('\x0a找不到依赖\x20OS\x20,请自行安装\x0a');}try{axios=$['isNode']()?require(_0x3d079a(0x193,'WgSH')):'';}catch(_0x326494){throw new Error(_0x3d079a(0x285,'Iabg'));}let buy_list='';async function main(_0x2f98b5){const _0x2c98ef=_0x3d079a;await _0x2f98b5[_0x2c98ef(0x232,'ngud')]();}class UserInfo{constructor(_0x511984,_0x27e9cb){const _0x418a58=_0x3d079a;try{this[_0x418a58(0x224,'Pgc&')]=_0x511984+0x1,this[_0x418a58(0x26d,'Fge1')]=_0x27e9cb[_0x418a58(0x1be,'TMob')]('&')[0x0],this[_0x418a58(0x282,'qzlv')]=_0x27e9cb[_0x418a58(0x16c,'DSQk')]('&')[0x1];}catch(_0x329f1d){console['log'](_0x329f1d);}}async['loginNew'](){const _0x49040f=_0x3d079a,_0x22dd55={'kxXbu':function(_0xcf317d,_0x541f87){return _0xcf317d+_0x541f87;},'vDQVZ':function(_0x258a73,_0x11427e){return _0x258a73===_0x11427e;},'rdMOh':function(_0x30a05a){return _0x30a05a();},'vIJWa':function(_0x5064fc,_0x3ae073){return _0x5064fc!==_0x3ae073;},'rpJVN':'QGGpy','psiXg':function(_0xacc924,_0x4376d5,_0x3162bb){return _0xacc924(_0x4376d5,_0x3162bb);},'oNCWA':_0x49040f(0x273,'WgSH'),'BvYzl':_0x49040f(0x2ad,'p6kt'),'waMNh':'ANDROID','RUXLh':_0x49040f(0x1bb,'zFe8'),'YFpwg':_0x49040f(0x170,'b]!H'),'CTRqI':'Keep-Alive'};await _0x22dd55[_0x49040f(0x297,'Iabg')](Sleep_time,0x3,0x5);let _0x29ec75=new Date()[_0x49040f(0x2a2,')aVD')](),_0x52511d=_0x49040f(0x1a3,'ngud')+this['pwd']+'\x22,\x22genre\x22:0,\x22edition\x22:\x221.7.4\x22,\x22deviceNo\x22:\x22\x22,\x22account\x22:\x22'+this[_0x49040f(0x1fc,'@k(X')]+'\x22}',_0x4cb404={'url':'http://api.ulifego.com/ht/web/login/loginNew?t='+_0x29ec75,'headers':{'Accept-Language':_0x22dd55['oNCWA'],'User-Agent':_0x22dd55[_0x49040f(0x17f,'Redw')],'source':_0x22dd55[_0x49040f(0x234,'b]!H')],'version':_0x49040f(0x22a,'zFe8'),'group':'','token':'','cookie':_0x49040f(0x18d,'xifD'),'Content-Type':_0x22dd55[_0x49040f(0x201,'ngud')],'Content-Length':_0x52511d[_0x49040f(0x26f,'h7v5')],'Host':_0x22dd55[_0x49040f(0x28a,']dUo')],'Connection':_0x22dd55[_0x49040f(0x180,'xifD')],'Accept-Encoding':_0x49040f(0x22c,'ngud')},'body':_0x52511d};return new Promise(_0x3ebba5=>{const _0x29dc8e=_0x49040f,_0x171ddb={'IGonQ':function(_0x30ae3a,_0x362483){return _0x30ae3a(_0x362483);},'fAQFC':function(_0x584236,_0x217a9b){return _0x22dd55['vDQVZ'](_0x584236,_0x217a9b);},'JBOmQ':_0x29dc8e(0x241,'Pz$S'),'oaaFL':function(_0x59a012){const _0x31f0d0=_0x29dc8e;return _0x22dd55[_0x31f0d0(0x1f1,'SqiA')](_0x59a012);}};_0x22dd55['vIJWa'](_0x22dd55[_0x29dc8e(0x179,'WgSH')],_0x29dc8e(0x226,'Xlgc'))?(this[_0x29dc8e(0x187,'SqiA')]=_0x22dd55[_0x29dc8e(0x254,'Hcvg')](_0x18ebfb,0x1),this['acc']=_0x5e9789[_0x29dc8e(0x239,'p6kt')]('&')[0x0],this[_0x29dc8e(0x261,'KUHr')]=_0x3ee57e[_0x29dc8e(0x239,'p6kt')]('&')[0x1]):$['post'](_0x4cb404,async(_0x4a8156,_0x3f4d99,_0x290108)=>{const _0x31c9b5=_0x29dc8e,_0x422971={'UHnfJ':function(_0x4b363d,_0x300137){const _0x2400fb=_0x39b8;return _0x171ddb[_0x2400fb(0x213,'KLex')](_0x4b363d,_0x300137);}};try{if(_0x4a8156)console['log'](_0x31c9b5(0x244,'KLex')+this[_0x31c9b5(0x21a,'^eLa')]+'\x20登录:返回\x20'+_0x4a8156);else{var _0x25cdc1=JSON[_0x31c9b5(0x22e,'Pz$S')](_0x290108);_0x25cdc1['code']==0x0?(this[_0x31c9b5(0x255,')aVD')]=_0x25cdc1['data'][_0x31c9b5(0x18b,']dUo')],await this[_0x31c9b5(0x16a,'TMob')]()):_0x171ddb[_0x31c9b5(0x210,'Hcvg')](_0x31c9b5(0x1c8,'CX7@'),_0x171ddb['JBOmQ'])?_0x1278bc['push'](_0x422971['UHnfJ'](_0x2f51ba,_0xe194fe)):console[_0x31c9b5(0x173,'KS$q')](_0x31c9b5(0x283,'El*M')+this['num']+_0x31c9b5(0x290,'Hy@8')+_0x25cdc1['msg']);}}catch(_0x3f68e7){}finally{_0x171ddb[_0x31c9b5(0x218,'Hcvg')](_0x3ebba5);};});});}async[_0x3d079a(0x1e1,'SqiA')](){const _0x3f0d69=_0x3d079a,_0x2de154={'behtk':_0x3f0d69(0x175,'Hy@8'),'bFkVS':'\x0a找不到依赖\x20OS\x20,请自行安装\x0a','daAcg':'XJYFf','Djnhq':function(_0x493538,_0x49899e){return _0x493538==_0x49899e;},'nplsP':function(_0x1ac769,_0x2886f4){return _0x1ac769!==_0x2886f4;},'kQznn':'cPvBf','BkFQD':_0x3f0d69(0x268,'Hcvg'),'QofOm':_0x3f0d69(0x18e,'9owc'),'BfNjW':function(_0x2ef8ea,_0x1aea5d){return _0x2ef8ea==_0x1aea5d;},'nnHDS':_0x3f0d69(0x1cb,'KUHr'),'BlsQj':function(_0x40b86f,_0x1af274){return _0x40b86f===_0x1af274;},'pHpHE':_0x3f0d69(0x184,'xifD'),'tPhvz':function(_0x25cfbc){return _0x25cfbc();},'dOcBU':function(_0x1cd050,_0x402252){return _0x1cd050+_0x402252;},'WBwRy':function(_0x7d4446,_0x431dc0){return _0x7d4446<_0x431dc0;},'xnSvk':function(_0x3fb079,_0x3853f4){return _0x3fb079+_0x3853f4;},'OqkEb':function(_0xaabc41,_0x23ca4e){return _0xaabc41<_0x23ca4e;},'XCIHG':function(_0x1d65fc,_0x20022a){return _0x1d65fc<_0x20022a;},'pNAwr':function(_0x35ed8a,_0x408593){return _0x35ed8a<_0x408593;},'WyDBR':_0x3f0d69(0x16b,'Mv0w'),'UCFab':_0x3f0d69(0x2c5,'Pgc&'),'XOtVO':_0x3f0d69(0x1ea,'Iabg'),'QEGCk':_0x3f0d69(0x23d,'HX&k'),'nimbU':'https//servicewechat.com/wx92e73ad679eee047/50/page-frame.html','VLTnE':function(_0x1914b2,_0x40b687,_0x41c71f){return _0x1914b2(_0x40b687,_0x41c71f);}};await _0x2de154[_0x3f0d69(0x24b,'TMob')](Sleep_time,0x3,0x5),this[_0x3f0d69(0x186,'Pz$S')]=_0x3f0d69(0x2b2,'Iabg'),this[_0x3f0d69(0x2ba,'Pup#')]='';let _0x5c4bf9=this['req_data'](0x0);return new Promise(_0xa18951=>{const _0x511e23=_0x3f0d69,_0x25e16b={'DpdPM':function(_0x5b54c1,_0xbd16a3){return _0x2de154['dOcBU'](_0x5b54c1,_0xbd16a3);},'MacoD':function(_0x3272c3,_0x451148){const _0x2c9806=_0x39b8;return _0x2de154[_0x2c9806(0x20c,'xifD')](_0x3272c3,_0x451148);},'PAoix':function(_0x8333a1,_0x457083){const _0x7769d2=_0x39b8;return _0x2de154[_0x7769d2(0x17e,'DSQk')](_0x8333a1,_0x457083);},'IxRtm':function(_0x1eccd4,_0x43713a){return _0x2de154['xnSvk'](_0x1eccd4,_0x43713a);},'Qndxw':function(_0x3e1b37,_0x165de4){const _0x38e33f=_0x39b8;return _0x2de154[_0x38e33f(0x1f8,'Fge1')](_0x3e1b37,_0x165de4);},'dLcgI':function(_0x26f0ed,_0x3d476d){const _0x5c441b=_0x39b8;return _0x2de154[_0x5c441b(0x21c,'!mIv')](_0x26f0ed,_0x3d476d);},'VRxwY':function(_0x5d44e9,_0x270548){return _0x2de154['pNAwr'](_0x5d44e9,_0x270548);},'ZcgAw':_0x2de154[_0x511e23(0x28d,'Xlgc')],'fnujH':_0x2de154[_0x511e23(0x22d,'xifD')],'QSZNr':'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Build/QKQ1.191008.001;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/107.0.5304.141\x20Mobile\x20Safari/537.36\x20XWEB/5115\x20MMWEBSDK/20230405\x20MMWEBID/7599\x20MicroMessenger/8.0.35.2360(0x2800235D)\x20WeChat/arm64\x20Weixin\x20NetType/WIFI\x20Language/zh_CN\x20ABI/arm64\x20MiniProgramEnv/android','EBjpS':_0x2de154[_0x511e23(0x1af,'Xlgc')],'FAzOf':_0x511e23(0x27c,'h7v5'),'VyPuI':_0x2de154[_0x511e23(0x2af,'qzlv')],'AUXBp':_0x2de154[_0x511e23(0x222,'WgSH')]};$[_0x511e23(0x21d,'X1lw')](_0x5c4bf9,async(_0x54a8f3,_0x501b95,_0x74bf9c)=>{const _0x243182=_0x511e23,_0xf0ead0={'wEPAK':_0x2de154['behtk'],'uuPhj':_0x2de154[_0x243182(0x192,'Nf3D')]};if(_0x2de154['daAcg']!==_0x2de154['daAcg'])throw new _0x58a4e5(_0xf0ead0[_0x243182(0x177,'KLex')]);else{try{if(_0x54a8f3)console[_0x243182(0x1de,'t2SM')](_0x243182(0x23a,'KS$q')+this[_0x243182(0x1dc,'!mIv')]+_0x243182(0x26b,'@k(X')+_0x54a8f3);else{var _0xd5b8dc=JSON['parse'](_0x74bf9c);if(_0x2de154[_0x243182(0x2bb,'p6kt')](_0xd5b8dc[_0x243182(0x1a0,'dtN1')],0x0)){if(_0x2de154['nplsP'](_0x2de154['kQznn'],_0x243182(0x295,'TMob'))){var _0x205388=new _0x4c667e(new _0x388eaa()[_0x243182(0x243,'KS$q')]()),_0x191c0d=_0x25e16b[_0x243182(0x190,'El*M')](_0x205388[_0x243182(0x20b,'zFe8')](),'-'),_0xc3ac89=_0x25e16b[_0x243182(0x1aa,'Iabg')](_0x25e16b['MacoD'](_0x25e16b[_0x243182(0x29b,'@k(X')](_0x205388[_0x243182(0x1cf,'zFe8')](),0x1),0xa)?_0x25e16b['PAoix']('0',_0x25e16b[_0x243182(0x190,'El*M')](_0x205388[_0x243182(0x2b7,'X1lw')](),0x1)):_0x25e16b[_0x243182(0x267,'WgSH')](_0x205388[_0x243182(0x1bf,'Xlgc')](),0x1),'-'),_0x51adb5=_0x25e16b[_0x243182(0x292,'Hcvg')](_0x25e16b[_0x243182(0x17d,'Fge1')](_0x205388[_0x243182(0x2c8,'pDhB')](),0xa)?_0x25e16b['IxRtm']('0',_0x205388[_0x243182(0x287,'El*M')]()):_0x205388[_0x243182(0x28e,'Pz$S')](),'\x20'),_0x58e6d5=_0x25e16b[_0x243182(0x1dd,'Fge1')](_0x25e16b[_0x243182(0x1d5,'SqiA')](_0x205388[_0x243182(0x26e,'zFe8')](),0xa)?'0'+_0x205388[_0x243182(0x26c,'865w')]():_0x205388[_0x243182(0x286,'oJFG')](),':'),_0x299bed=_0x25e16b[_0x243182(0x25f,'t2SM')](_0x25e16b[_0x243182(0x167,'h7v5')](_0x205388[_0x243182(0x15e,'Xlgc')](),0xa)?'0'+_0x205388[_0x243182(0x20f,'Mv0w')]():_0x205388['getMinutes'](),':'),_0x1c3231=_0x205388['getSeconds']()<0xa?'0'+_0x205388['getSeconds']():_0x205388[_0x243182(0x17a,'KUHr')]();let _0x1bb936=_0x25e16b[_0x243182(0x2aa,'xWT9')](_0x25e16b[_0x243182(0x1b6,']dUo')](_0x25e16b[_0x243182(0x1ce,'ngud')](_0x25e16b['DpdPM'](_0x191c0d+_0xc3ac89,_0x51adb5),_0x58e6d5),_0x299bed),_0x1c3231);return _0x1bb936;}else for(let _0x4fbd62 in _0xd5b8dc['data'][0x0][_0x243182(0x2ae,'X1lw')]){if(_0x2de154[_0x243182(0x227,'865w')]!==_0x2de154['QofOm']){if(_0x2de154['BfNjW'](_0xd5b8dc[_0x243182(0x19b,'TMob')][0x0][_0x243182(0x2b0,'9owc')][_0x4fbd62]['status'],0x0)){if(_0x243182(0x163,'qzlv')!==_0x2de154['nnHDS']){if(_0x2de154['BfNjW'](_0xd5b8dc[_0x243182(0x1d6,'9owc')][0x0][_0x243182(0x24c,'dtN1')][_0x4fbd62][_0x243182(0x1c0,'Xlgc')],0x3))await this['watchVideo']();else _0x2de154[_0x243182(0x1e5,'Fge1')](_0xd5b8dc[_0x243182(0x23c,'Hy@8')][0x0][_0x243182(0x1ca,'Xlgc')][_0x4fbd62][_0x243182(0x269,'865w')],0x4)&&await this[_0x243182(0x225,'KS$q')]();}else throw new _0x5a8478(_0xf0ead0['uuPhj']);}else console[_0x243182(0x18f,'X1lw')]('账号\x20'+this[_0x243182(0x21a,'^eLa')]+_0x243182(0x1a8,'Pz$S')+_0xd5b8dc[_0x243182(0x284,']dUo')][0x0][_0x243182(0x1b8,'zFe8')][_0x4fbd62][_0x243182(0x188,'Mv0w')]+_0x243182(0x29e,'pDhB'));}else{const _0x1a9455={'rQfOx':function(_0x59e35e,_0x805b20){return _0x59e35e(_0x805b20);}};_0x395c20[_0x243182(0x246,'DSQk')](_0x58dc87,_0x355584=>{_0x355584?_0x3ce5c4(!![]):_0x1a9455['rQfOx'](_0x317ff0,![]);});}}}else console[_0x243182(0x1bd,'*q]d')](_0x243182(0x21b,'pDhB')+this['num']+'\x20任务状态:'+_0xd5b8dc['msg']);}}catch(_0x2a8156){}finally{if(_0x2de154[_0x243182(0x1d7,'t2SM')]('pbstf',_0x2de154[_0x243182(0x189,'^eLa')]))_0x2de154['tPhvz'](_0xa18951);else return{'url':_0x243182(0x1d8,'*q]d')+_0x4fac88+_0x243182(0x237,'pDhB')+this['g_url']+_0x243182(0x169,'0RXB')+_0x327f32,'headers':{'Host':_0x4556bc,'Connection':_0x25e16b[_0x243182(0x19e,'HX&k')],'charset':_0x25e16b[_0x243182(0x240,'WgSH')],'appid':'wx92e73ad679eee047','User-Agent':_0x25e16b[_0x243182(0x16f,'Redw')],'content-type':_0x243182(0x276,'Pup#'),'source':_0x25e16b['EBjpS'],'Accept-Encoding':_0x25e16b[_0x243182(0x22b,']dUo')],'version':_0x25e16b[_0x243182(0x183,'0RXB')],'token':this[_0x243182(0x1f0,'Fge1')],'Referer':_0x25e16b['AUXBp']}};};}});});}async[_0x3d079a(0x1ec,'Mv0w')](){const _0x4e4d1d=_0x3d079a,_0x1c236f={'czdrz':function(_0x835fc9){return _0x835fc9();},'iwZTV':_0x4e4d1d(0x1d1,'0RXB'),'NlJsb':_0x4e4d1d(0x1a1,'KLex'),'FJFpc':_0x4e4d1d(0x1cc,'0RXB'),'Jstkh':_0x4e4d1d(0x2a6,'oJFG'),'ZbKgh':function(_0x57faa8,_0x305cea){return _0x57faa8===_0x305cea;},'bzdcZ':_0x4e4d1d(0x19d,'SqiA'),'HqBHa':function(_0x2422d8,_0x2db01b){return _0x2422d8!==_0x2db01b;},'CjMWZ':_0x4e4d1d(0x18c,'KS$q'),'dDFrn':_0x4e4d1d(0x25d,'Pup#'),'YHsRw':function(_0x16e480,_0x1fa0da){return _0x16e480==_0x1fa0da;},'IYqKw':function(_0x11e96e,_0x3b0e08){return _0x11e96e!==_0x3b0e08;},'BwCDq':'yRXhf','IAeYh':_0x4e4d1d(0x2c2,'dtN1'),'EZLRc':'UvjJF','CwyQF':'IdLAh','ZFDSg':function(_0x1e8be9,_0x38f6cb){return _0x1e8be9(_0x38f6cb);},'OhrUR':function(_0x25989b){return _0x25989b();},'cVyep':function(_0x8884a0,_0x4540e9){return _0x8884a0!==_0x4540e9;},'xDdQb':_0x4e4d1d(0x1ee,'!mIv')};await Sleep_time(0x3,0x5),this['g_url']=_0x4e4d1d(0x242,'t2SM'),this[_0x4e4d1d(0x1c9,'HX&k')]='{}';let _0x11e019=this[_0x4e4d1d(0x1e6,'oJFG')](0x1);return new Promise(_0x3f56b7=>{const _0x12bd34=_0x4e4d1d,_0xf0b997={'mVfmw':function(_0x505f0f,_0x34cabe){const _0x55d80b=_0x39b8;return _0x1c236f[_0x55d80b(0x233,'0RXB')](_0x505f0f,_0x34cabe);},'SHzbT':function(_0x542745,_0x48bf55){return _0x1c236f['ZFDSg'](_0x542745,_0x48bf55);},'OEMcV':function(_0x434f1f){return _0x1c236f['OhrUR'](_0x434f1f);}};_0x1c236f[_0x12bd34(0x266,'LT3p')](_0x1c236f[_0x12bd34(0x289,'qzlv')],_0x1c236f['xDdQb'])?_0x1c236f['czdrz'](_0x2956cf):$['post'](_0x11e019,async(_0x5b4e7d,_0x203735,_0x3f509b)=>{const _0xaa58d5=_0x12bd34,_0x427655={'JzJlv':_0x1c236f[_0xaa58d5(0x2c4,'0RXB')],'VBHLs':_0x1c236f[_0xaa58d5(0x23f,'Pz$S')],'UbkdQ':_0xaa58d5(0x257,'^eLa'),'ydupg':_0x1c236f[_0xaa58d5(0x28b,'Nf3D')],'OPdRS':_0x1c236f['Jstkh'],'Gtpcg':_0xaa58d5(0x245,'LyUq'),'QUAiN':'https//servicewechat.com/wx92e73ad679eee047/50/page-frame.html'};if(_0x1c236f['ZbKgh'](_0x1c236f['bzdcZ'],'QzRzG')){try{if(_0x5b4e7d)_0x1c236f['HqBHa'](_0xaa58d5(0x270,'SqiA'),_0x1c236f[_0xaa58d5(0x223,'dtN1')])?_0x1928c0?_0xf0b997[_0xaa58d5(0x238,'KS$q')](_0x320c10,!![]):_0xf0b997[_0xaa58d5(0x1f5,'Pup#')](_0x278d95,![]):console[_0xaa58d5(0x1de,'t2SM')]('账号\x20'+this['num']+'\x20看广告:返回\x20'+_0x5b4e7d);else{if(_0x1c236f[_0xaa58d5(0x185,'WX25')]!==_0x1c236f['dDFrn'])_0x207728[_0xaa58d5(0x17c,'zFe8')](_0xaa58d5(0x1c4,'P%]^')+this['num']+'\x20签到:'+_0x4c646e[_0xaa58d5(0x27b,'Mv0w')]);else{var _0x55e1e6=JSON[_0xaa58d5(0x164,'Hy@8')](_0x3f509b);_0x1c236f[_0xaa58d5(0x293,'TMob')](_0x55e1e6[_0xaa58d5(0x265,'b]!H')],0x0)?_0x1c236f[_0xaa58d5(0x19f,'dtN1')](_0x1c236f[_0xaa58d5(0x247,'0pRU')],_0x1c236f[_0xaa58d5(0x25e,'Pz$S')])?console[_0xaa58d5(0x298,'Redw')](_0xaa58d5(0x1ab,'3F$I')+this[_0xaa58d5(0x2bf,'9owc')]+_0xaa58d5(0x279,'!mIv')+_0x55e1e6['data']+'积分'):_0xf0b997[_0xaa58d5(0x1a4,'@k(X')](_0x21881e):console['log']('账号\x20'+this['num']+_0xaa58d5(0x162,'WX25')+_0x55e1e6['msg']);}}}catch(_0x4940b3){}finally{if(_0x1c236f[_0xaa58d5(0x2ab,'b]!H')](_0x1c236f[_0xaa58d5(0x16d,'Pgc&')],_0x1c236f[_0xaa58d5(0x259,'HX&k')]))return{'url':_0xaa58d5(0x1df,'Fge1')+_0x12d736+_0xaa58d5(0x260,'3F$I')+this[_0xaa58d5(0x2b1,'KS$q')]+_0xaa58d5(0x1a6,'WgSH')+_0x544ed7,'headers':{'Host':_0x1312ea,'Connection':_0xaa58d5(0x182,'KS$q'),'charset':_0x427655['JzJlv'],'appid':_0xaa58d5(0x236,'KS$q'),'User-Agent':_0x427655[_0xaa58d5(0x299,'p6kt')],'content-type':_0x427655[_0xaa58d5(0x198,'Hy@8')],'source':_0x427655['ydupg'],'Accept-Encoding':_0x427655['OPdRS'],'version':_0x427655['Gtpcg'],'token':this[_0xaa58d5(0x206,'ngud')],'Referer':_0x427655[_0xaa58d5(0x161,'qzlv')],'Content-Length':this[_0xaa58d5(0x1b9,'Fge1')][_0xaa58d5(0x248,'WgSH')]},'body':this[_0xaa58d5(0x18a,'KLex')]};else _0x3f56b7();};}else _0x287d2e(![]);});});}async[_0x3d079a(0x24e,'Mv0w')](){const _0x3f24b0=_0x3d079a,_0x37aee4={'Acjbf':function(_0x3e1846,_0x13cda3){return _0x3e1846==_0x13cda3;},'LuKfk':_0x3f24b0(0x1c5,'SqiA'),'osTej':function(_0x20969a,_0x1b0b84){return _0x20969a===_0x1b0b84;},'xBHlu':_0x3f24b0(0x178,'@k(X'),'vaVUa':function(_0x42860f,_0x5cb891){return _0x42860f!==_0x5cb891;},'jMChw':'XRoNt','mYIDu':_0x3f24b0(0x24d,']dUo'),'jRVlE':function(_0x3188aa,_0x5d9200){return _0x3188aa(_0x5d9200);},'zKPfR':'crypto-js','iYTwx':function(_0x157784,_0x626497,_0x1b7b22){return _0x157784(_0x626497,_0x1b7b22);}};await _0x37aee4['iYTwx'](Sleep_time,0x3,0x5),this[_0x3f24b0(0x27d,')aVD')]=_0x3f24b0(0x253,'HX&k'),this['body']='{}';let _0x5e6c09=this[_0x3f24b0(0x1a2,'x5fs')](0x1);return new Promise(_0x21a1d5=>{const _0x3bea4f=_0x3f24b0,_0x13ddff={'uJvQA':function(_0x325d99,_0x4e7499){return _0x37aee4['jRVlE'](_0x325d99,_0x4e7499);},'CzKIg':_0x37aee4[_0x3bea4f(0x281,'TMob')]};$[_0x3bea4f(0x1cd,'b]!H')](_0x5e6c09,async(_0x1f9f7d,_0x2b223a,_0x15ce92)=>{const _0x183867=_0x3bea4f;try{if(_0x1f9f7d)console[_0x183867(0x173,'KS$q')]('账号\x20'+this['num']+_0x183867(0x196,'p6kt')+_0x1f9f7d);else{var _0x3fb0c2=JSON['parse'](_0x15ce92);_0x37aee4['Acjbf'](_0x3fb0c2[_0x183867(0x1d3,'Pz$S')],0x0)?_0x37aee4['LuKfk']===_0x183867(0x1e3,'Iabg')?(console[_0x183867(0x211,'p6kt')](_0x183867(0x2c7,'Fge1')+this['num']+_0x183867(0x296,'b]!H')+_0x3fb0c2[_0x183867(0x29d,'X1lw')]+'积分'),await this[_0x183867(0x2b6,'CX7@')]()):_0x7e4880['log'](_0x183867(0x26a,'WX25')+this[_0x183867(0x212,'Nf3D')]+_0x183867(0x195,'X1lw')+_0x48c0f1[_0x183867(0x219,'Fge1')]):_0x37aee4[_0x183867(0x24f,'865w')](_0x37aee4['xBHlu'],_0x183867(0x1f7,'t2SM'))?_0x16b85d=_0x4c1c85[_0x183867(0x1e4,'9owc')]()?_0x13ddff[_0x183867(0x1b7,'0RXB')](_0x43b6e6,_0x13ddff['CzKIg']):'':console[_0x183867(0x17c,'zFe8')](_0x183867(0x271,']dUo')+this['num']+_0x183867(0x172,'Xlgc')+_0x3fb0c2[_0x183867(0x219,'Fge1')]);}}catch(_0xc8aa7a){}finally{_0x37aee4[_0x183867(0x28f,'Mv0w')](_0x37aee4['jMChw'],_0x37aee4['mYIDu'])?_0x21a1d5():_0xe130d=_0x365510[_0x183867(0x1c7,'Mv0w')]()?_0x4ed13d('fs'):'';};});});}[_0x3d079a(0x1d9,'dtN1')](_0xea52ac){const _0x385ab1=_0x3d079a,_0x3a6354={'XfXns':_0x385ab1(0x22f,'WgSH'),'cJJyT':'keep-alive','cvfAh':_0x385ab1(0x262,')aVD'),'AjIkL':_0x385ab1(0x2a3,'Nf3D'),'dMPiH':_0x385ab1(0x2b5,'SqiA'),'rDnYU':_0x385ab1(0x191,'KLex'),'psCRt':'MINIAPP','EYspn':_0x385ab1(0x256,'LyUq'),'zwClt':_0x385ab1(0x181,'p6kt'),'ctDit':function(_0x1ffa06,_0x2d496d){return _0x1ffa06==_0x2d496d;},'MvxJt':'2.5.4'};let _0x3b5dd7=new Date()[_0x385ab1(0x275,'El*M')]();if(_0xea52ac==0x0){if(_0x3a6354[_0x385ab1(0x1ae,'ngud')]!==_0x385ab1(0x15f,'Pz$S'))return{'url':_0x385ab1(0x2a1,'Pgc&')+g_host+_0x385ab1(0x23b,'@k(X')+this[_0x385ab1(0x1f4,'Pup#')]+_0x385ab1(0x1a6,'WgSH')+_0x3b5dd7,'headers':{'Host':g_host,'Connection':_0x3a6354['cJJyT'],'charset':_0x3a6354['cvfAh'],'appid':_0x3a6354['AjIkL'],'User-Agent':_0x3a6354[_0x385ab1(0x1f6,'TMob')],'content-type':_0x3a6354[_0x385ab1(0x2a4,'Hy@8')],'source':_0x3a6354[_0x385ab1(0x263,'CX7@')],'Accept-Encoding':_0x3a6354[_0x385ab1(0x1b4,'xifD')],'version':'2.5.4','token':this[_0x385ab1(0x200,'b]!H')],'Referer':_0x3a6354[_0x385ab1(0x2a5,'!mIv')]}};else _0x447292['log'](_0x385ab1(0x16e,'WgSH')+this[_0x385ab1(0x2b3,'DSQk')]+_0x385ab1(0x166,'@k(X')+_0x189c97);}else{if(_0x3a6354[_0x385ab1(0x2a8,'pDhB')](_0xea52ac,0x1))return{'url':'https://'+g_host+_0x385ab1(0x2b8,'Mv0w')+this['g_url']+'?t='+_0x3b5dd7,'headers':{'Host':g_host,'Connection':_0x385ab1(0x165,'Hy@8'),'charset':_0x3a6354['cvfAh'],'appid':_0x3a6354[_0x385ab1(0x235,'KUHr')],'User-Agent':_0x385ab1(0x29c,'qzlv'),'content-type':_0x3a6354[_0x385ab1(0x27a,'!mIv')],'source':_0x3a6354[_0x385ab1(0x20e,'KLex')],'Accept-Encoding':_0x3a6354['EYspn'],'version':_0x3a6354[_0x385ab1(0x19c,'3F$I')],'token':this['token'],'Referer':_0x3a6354[_0x385ab1(0x2c6,'Pz$S')],'Content-Length':this[_0x385ab1(0x272,'!mIv')][_0x385ab1(0x250,'P%]^')]},'body':this[_0x385ab1(0x19a,'xifD')]};}}}!(async()=>{const _0xab4caf=_0x3d079a,_0x510522={'qBKaF':function(_0x57d954,_0x2f4249){return _0x57d954(_0x2f4249);},'DGGXn':_0xab4caf(0x29a,'865w'),'kXybC':function(_0x4294fa,_0x2846ac){return _0x4294fa===_0x2846ac;},'fhysm':'fsgKt','OGrsE':'GFkOT'};console[_0xab4caf(0x1de,'t2SM')](_0xab4caf(0x204,'b]!H'));let _0x5b72a0=await getUsers(variable,async(_0x503448,_0x191090)=>{let _0x22257d=new UserInfo(_0x503448,_0x191090);return _0x22257d;});list=[],_0x5b72a0[_0xab4caf(0x27e,']dUo')](async _0x24d931=>{const _0x2e7f58=_0xab4caf,_0x358af6={'snAjp':function(_0x5b11bc,_0x5c9c93){const _0x49ff62=_0x39b8;return _0x510522[_0x49ff62(0x216,'Hy@8')](_0x5b11bc,_0x5c9c93);},'tYtEQ':_0x510522[_0x2e7f58(0x1fd,'Fge1')]};_0x510522['kXybC'](_0x510522[_0x2e7f58(0x1ed,'KUHr')],_0x510522[_0x2e7f58(0x160,'Redw')])?_0x52be6c=_0x358af6[_0x2e7f58(0x2be,'KS$q')](_0x325097,_0x358af6[_0x2e7f58(0x1db,'LyUq')]):list[_0x2e7f58(0x207,'*q]d')](_0x510522[_0x2e7f58(0x2ac,'El*M')](main,_0x24d931));}),await Promise[_0xab4caf(0x199,'Hy@8')](list);})()[_0x3d079a(0x228,'LyUq')](_0x269e41=>console['log'](_0x269e41))['finally'](()=>$[_0x3d079a(0x1ba,'0RXB')]());async function isFile(_0x32d759){const _0x5e1008=_0x3d079a,_0x355415={'ESjcQ':_0x5e1008(0x174,'qzlv'),'Dewlp':function(_0x3d40f5,_0x53e014){return _0x3d40f5(_0x53e014);},'TxCop':_0x5e1008(0x1c2,'3F$I'),'IihDJ':function(_0x3984f6,_0x12461a){return _0x3984f6===_0x12461a;},'wAglY':_0x5e1008(0x15c,'SqiA')};return new Promise(function(_0x2946e6){const _0x1751ba=_0x5e1008;if(_0x355415['IihDJ'](_0x355415['wAglY'],_0x355415['wAglY']))fs[_0x1751ba(0x1e7,'Xlgc')](_0x32d759,_0x2b473c=>{const _0xbcf79a=_0x1751ba;_0x2b473c?_0x2946e6(!![]):'HzQKo'!==_0x355415[_0xbcf79a(0x1da,'LyUq')]?_0x355415[_0xbcf79a(0x194,'LT3p')](_0x2946e6,![]):_0xae5319['log'](_0xbcf79a(0x2c1,'*q]d'));});else throw new _0x351d11(_0x355415[_0x1751ba(0x17b,'WX25')]);});}async function getUsers(_0x3d33dc,_0x211e0c){const _0x4f8de1=_0x3d079a,_0x2c6a51={'iqTkx':function(_0x15df5a,_0x38c243){return _0x15df5a==_0x38c243;},'CjNyn':function(_0x32e218,_0x50c857){return _0x32e218>_0x50c857;},'TrmrZ':function(_0x171a08,_0x205a7f){return _0x171a08<_0x205a7f;},'nEatf':function(_0x2ef6e9,_0x521cae){return _0x2ef6e9===_0x521cae;},'RtWqJ':_0x4f8de1(0x1ef,'b]!H'),'MwrDV':'未找到CK','bFMfq':function(_0x127cf,_0x4fc975){return _0x127cf*_0x4fc975;},'Jwcvh':function(_0x71d451,_0x1b2f8f){return _0x71d451*_0x1b2f8f;}};let _0x5eff8e=[],_0xb6f349=process[_0x4f8de1(0x252,'Nf3D')][_0x3d33dc],_0x1381d3=['@','\x0a','#'];if(_0xb6f349){let _0x5a6671=_0x1381d3[0x0];for(let _0x306cae of _0x1381d3)if(_0x2c6a51[_0x4f8de1(0x1a5,'X1lw')](_0xb6f349['indexOf'](_0x306cae),-0x1)){_0x5a6671=_0x306cae;break;}let _0x455eba=_0xb6f349[_0x4f8de1(0x1e8,'9owc')](_0x5a6671);for(let _0x2dedb3=0x0;_0x2c6a51[_0x4f8de1(0x251,'b]!H')](_0x2dedb3,_0x455eba[_0x4f8de1(0x2a9,'!mIv')]);_0x2dedb3++){if(_0x2c6a51[_0x4f8de1(0x1fa,'qzlv')](_0x2c6a51[_0x4f8de1(0x221,'DSQk')],_0x4f8de1(0x288,'0RXB'))){const _0x401d88=_0x455eba[_0x2dedb3];_0x401d88&&_0x5eff8e['push'](await _0x211e0c(_0x2dedb3,_0x401d88));}else{var _0xf816ec=_0x2deb3a[_0x4f8de1(0x1bc,'LyUq')](_0x57da8b);_0x2c6a51['iqTkx'](_0xf816ec[_0x4f8de1(0x1e2,'Hcvg')],0x0)?_0x24bc25[_0x4f8de1(0x2a7,')aVD')](_0x4f8de1(0x168,'Pz$S')+this['num']+'\x20看广告:获得'+_0xf816ec[_0x4f8de1(0x1f3,'oJFG')]+'积分'):_0x3475c6['log'](_0x4f8de1(0x205,'Mv0w')+this[_0x4f8de1(0x231,'KUHr')]+_0x4f8de1(0x1a7,'0pRU')+_0xf816ec[_0x4f8de1(0x2c3,'KLex')]);}}user_num=_0x5eff8e[_0x4f8de1(0x1ff,'Mv0w')];}else console[_0x4f8de1(0x1d2,'Hcvg')](_0x2c6a51['MwrDV']);return console[_0x4f8de1(0x18f,'X1lw')]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(new Date()['getTime']()+_0x2c6a51[_0x4f8de1(0x202,'SqiA')](new Date()[_0x4f8de1(0x280,'KS$q')]()*0x3c,0x3e8)+_0x2c6a51[_0x4f8de1(0x1c1,'Redw')](_0x2c6a51['Jwcvh'](0x8*0x3c,0x3c),0x3e8))[_0x4f8de1(0x1fe,'*q]d')]()+'\x20==='),(console['log']('\x0a===【共\x20'+user_num+'\x20个账号】==='),!0x0),_0x5eff8e;}function encrypt(_0x19b124){const _0x5bbf7e=_0x3d079a;var _0x6ff3cc=Crypto_js[_0x5bbf7e(0x1f2,'Pgc&')]['Utf8'][_0x5bbf7e(0x21e,'zFe8')](_0x19b124),_0x4e4454=Crypto_js['enc'][_0x5bbf7e(0x217,'KUHr')]['parse']('6Gt5J8nY'),_0x23776e=Crypto_js[_0x5bbf7e(0x249,'Xlgc')]['Utf8'][_0x5bbf7e(0x277,'Iabg')](0xbc614e);return Crypto_js[_0x5bbf7e(0x15d,'SqiA')][_0x5bbf7e(0x28c,'Redw')](_0x6ff3cc,_0x4e4454,{'iv':_0x23776e,'mode':Crypto_js[_0x5bbf7e(0x1b0,'Mv0w')]['CBC'],'padding':Crypto_js['pad'][_0x5bbf7e(0x2a0,'oJFG')]})['ciphertext'][_0x5bbf7e(0x215,'P%]^')](Crypto_js[_0x5bbf7e(0x1c6,'Mv0w')][_0x5bbf7e(0x274,'Pz$S')]);};function _0x155c(){const _0x40611c=(function(){return[version_,'hqjLPsQrjUiKeagmGti.XbcwSokNmN.yMvA7VdQM==','W7XaW7Xb','CLCdW53dLSoPomofqmkGCsFcPq','W5VdJmk6W4H1a8kJE8kyW47cNbO','WR8fufJcQSoLWQKFc8o0W7a','W4atd8oSDmoMW4SuqSorW4O','WQ5fqHre','WOVcKmo/WQKQxSkl','WPZcHSoiWQ83','W6LyWQVcOZ4umKvyea','kmomW7ikWO0','WQTYAG','luma','WQxcSSoKWPms','WR/dPXaof8k8W7DZmXhdV2u2','zSkVuSoMW57dI8o9W5y','W77dSbBcLtO','FmoKW6FcRW','iCoSW4ikWOi','d8k8DW','W7tcP2q','6lEz5y2Mpq','fSk6fmkkWOm','wCkyjq','W5CxcCozza','W5eQWR/dQSkcW73cGcS','W6e9h8oaAq','WPjLWQHaW44','wZP2iSoN','W7/dIg3cLWK','WO5VWR0','pCoYWONcOuJcNq','i8kGw8oHW4W','WQfwyNzF','kKT/h24','W7pcOuFcImk0hG','WPzbtW','WO3dGSovWQOF','dmk0W4tdIq','WQXeCYDF','p8kYW7/cGCoX','CcLsj8oL','WRRcGCkiymk5W4ruaWtcVCod','r8oLW6W','b8kHW4RdKcbrf8of','W4H+WOCHhq','WOVcVZWYWP4','Amo6W4JdVd4','oCoJW5FdVwtdHmkkWRjGhvyjW6fYW5bAuHK','W5ddUwNdO1ldVX9b','i8onWOJcONy','WRrTyCoaW40','6lwO5y2SW44','g0NdUGFcO8ohWRyo','W6VdKYNcLq','gcaRfvi','W6vhW7vbWQe','aCk/W4FcGCo2','uZ1UkSo6','lSkJW5RcG8or','qL1EvaxcKIGVW6xcIZrxW5fTsq','kCo+WPRcM2JcNSoC','6lEk5yYcWQS','EWq+uJi','WQvPWPzcW7ddNW','W5NcMx7cUCod','wtz1j8ogFa','f8kjFW','jfmzW5PLW7ytn8ojW4i','WQVcVCoOfSot','W5ddI1pcTa','WPNdMSoMWRyU','W71uWRJcGb4u','WOXoCejX','FSkLB8o1W5JdIG','WQJcRbWoWQW','jLGB','r2DWxKNcSSkVWQZcR0pcGq','jCo1W7SUWRS','mSojEsNdJW','lLbIdcRdTqa4cdKHmCkvlSonymoDo8oZzr5GWPJcMG','W7VcONNcI8k5ghyJW5a4WOawW4ldHuTM','WPhMIPdKUldLI43KVk/OT514W4uQWQLE6k646iE36kk85AYM6kkoiq','AxLNAIa','W7NdM8kon0y','W4JdRIG2WQ5XWRNdHW','W7bwmSkxW6FcN8on','e8kSWOzeWR0','bSksW6JcQ8o8','F0r/s0C','WRS+pCkTC2u2vG','wCoNW6u','m8osDghcMq','wSoapSowWOq','dmkRW5NdTcfXbSoA','WP/cSruz','W6VdQmkngga','Csn/emo/','nSoRW6iUWRy','WOrysLv+','6lwL5y6teW','fos7MUwiR+EkNUAdLCky6lYa5zU/WRK','WOryug90WOpcQmkv','a8kSCW','W4atd8oIBSo/W5u+','W4xdTHxdQ8kAEG','j8kdnxVdLW','6lET5y20WO8','lmkwoCk7','tZS2a8o8ogldTmkKWP/cPCo9Cmky','dCkYW77cL8kIsW','W6buhtZdTSo/WOi','jSkSWRP5WRW8WPbSWQvEWOFcR8knW4FcPtC','CM3dH8kBsW','W6W5mmonta','BUEFSUw4OUwsImo+6i6P5B2h','pmk9m8kBWPe','W6noWRG','W47dQrldVmocCxGCAhHRmSk1W7JdU21mE8oTW7a7s8klW68','iCo5zZ7dJq','WQ3dRmoDWQayW5ddSG','W5NdIZ/cTCkAFuhcNmoEW63dNa'].concat((function(){return['kCo+WPRcM2JcNSoCWQLRrqr/W6jXW4ypeG','WOFcUSoShSoe','W6DeiG','6lAH5y+gsq','WQ/dOSoBWOq','coAjSUs6UowlMos+S+I2NmoMW7/cNSoZqSora3pORR/OHitOOQFLRRFOO5qm','W5NdIZ/cU8kazf/cTG','W6buhsZdVSoMWOi','W7TFWOS5fa','W693iSkcW6q','WPldHCoFWPiE','bxWRW6DV','W6/cVKfovSo/WRO','jCkEwmotW6C','kmk2W7NcTSo1cYi','W7HCWONcUZy','WQ/NM4NLViJdJG','aCkxWQ5/WR0','b8o1W7e4WQm','WQtcUCopkSoH','p+AiREs4LUwjSos8R+I1GJJdV8oTWPFdQmk5mCknW5pcVCkkC+IVLEIgIUIHIEwSG+IGS8ks','WP7cOCokoSoW','W5ZNRQdLIyfg6i2b5B6d','CN/dNmkWsq','W6BcV0u','WPfFrCoLW4O','WObpxvDVWPNdT8kmW5i','CfhdQNJcMq','W5PCpmk6W6RcH8ojWQBcVmo+WO9yWRZcOwtdLH8vWRrTaNBcHmoFkbNdVWH8uCkwyXaFtKVdM8otWQHbsuqrm1CsxSk1W4BcMc49WOW3W5XSW7fDoSkYW4WuBCkeEMhdJJhdL3FdOMZdQmoiWOJcMGRcRCk6uKVdSmkVtmosWRbpW5dcU8olW4fJm8kYW6jcWPeoWRFdJ8kKW4iSWQCkW4T0W7uzFfpdHSoRtWvkWPybnbZcSSodx8oqWQJdHmk/omoXBCkZw8olW5NdNmoIze9qWRhcLCoOAWlcUKZcG0OsdSkOWPC5uCoSWOlcLCkFcmoDjvTlWPuBgMzMWRpdVY09ASkwE1FcQ8oRWQ7cP1BdK3BcHCkiwSopWQVcQvddGCowCYlcHSk/yJeUWQS4WPRdNmo8W7qnv20hWOrTeCkxWQpdGG5zWR3cGu1JlHafmxpcPSkHW77cVmkrWOPveXT/WOubBSkQWQvoWPWKW7rtW7O3lN9NW7VcGSogWRnEW6fvWOxcI8o1W7jWW7GIpMtdNNxcVIPnWPOkW6LHhSkGj8k9v2tcUSkACemQtXGLW6XynSk5W6W0zeRdV8ozWROHW6bhWQ88BConbdXNaCk1','wSkCjCoG','5Bsn5AYD5OIn','W5vUWQ4xhq','W67dHsJcGmoy','WOHUWQtdQCkWWQNdU1i','iCodzHJdImkasa','ne5uWQvPWQ9viSoiWOFdT8oQeSo4BXldSGC','W73dTJpcRsK','nmkohSkUWRa','W5NdLclcG8odCKlcQmolW77dIWSkWPytWQH2WPpcPgVdQ1e2aG','kSojDq','WPZdPvNcPve','iSkCm8kLWRb2','W6xcMSo2y8oy','WQBcVdOBWP4','W7zZiGNdMq','WQH2zCoDW40SlJJcIgzYWR7dHHpdObpdGCoeW5JdS8og','uSkuiSo1','W4z2aCkqW60','tMNcPx4','kCoeWPVcVw0','DM3dHSkdaCk5WQVdV8kkW7z5W4nqnatcH8kysG','WQ5KWPi','dwCICmkhy1BdPSoNWQ/dIW','aCkhigldLmkKW6H7W5ayW43dLJirhYJdJ01+W67dG1KgqgNcG8kGC8kYxZGqWPLbWOXEWOSBWOpcSchcT8kPWQtcNcFcP8oSiqJdJ8oQaJBdRMT1W4bMWQP8FeCopmoSW44eWQHyWQZcJwNcPspdPCkOW54TmqVdMSoEaHxdSXq8WOVdILdcVwmGwSk/W53dISouW5bhWQldKSoPWPhcJmkVWPBcV8kjWPDyWRhdRcXWgSouWQKMW4NdJs1Mv8k6WRyUyCkyucZcKSkCucKjvCoQWR9xWQ8IgWBcGujwW7HpyvSMjtKGrKeLWP/cL2i2WPNcKmoLWRWDdvxdVmk1W4NcUCkdtG7cIcZdOeBdTmobCCoHpKSdDNm0W5X/WPZdSSoKW5FcJ8o5W5SGWQ9gW6VdLa3dVu04WQv6W60WW6zbW4O2WP7dICk7WPiudty+nHOSpN5WltNdQWBcTmkmWQ/dIarnW73cUqJdRYBdNqRdJmoIbSkTvCoZWOZdM8kWWORcKCozvmkwjSk4WR/dRu7cKSoucCkOlxzzeYxcRrZcHG0HDmonW4RdUmoAs8kfymkivSkiWOZdOexcKmk7WPfcjvhdVXPHjdhcKvRcTqdcUmk7W6q','FSosdSoVWRWsuW8','wCkyjComW69ToGO','WQfvWQVdGsaFjr4','WOxcHSofWPiNvG','jCkZWQ5S','WOn3y8obW4G','W5/dKfNcScFcJsNdOcC','bMuIDCkdjsddSCoqWPNdJ8kujW','pCo1WQ/cPxe','thxcUW','kCkCkCkpWQ1WWQxcGuRcHW','5P6M5OMl5yQ/ASkp','W63dHNNcPti','WOhcHSoS','W7TpWPKMla','WPvUWRBcTmo7','nCkKW47cNSoG','6lwe5yY4ma','WPJdTgNcIetdRHG','pCkBa33dJa','cmkTcq','fCkcAmoCW5XmsCkrsCkN','nCkIW4/cT8o9','W4xcL1bpAG','W4zMb8k6W4G','y+EDR+w5JowsOCoF','W657cmkcW7m','W7/dKY/cHXK','W6tdLZJcHfhcGSkJW6/cOCow','foEzMUw/MXlOVidLMBZdTa','W7/dGqpdU8k3','6lwP5yYKWQ0','WQ1mW74','WQNcKmope8oAEwBcJW','W6vyWRRcNNOBk1HlbG','WRnHWPnyW7a','WQvaWPZdI8kG','6lst5y6KoW','W5VcG3HYxq','WP3cRHHsWOn4WP3dPvPbuCoAW7Tlta','W4/dJvNcNYlcGgddLtdcINVdKG','uUEUMEwiRmkR','iSo0WOK','W517aSkCW5m','WOxMI4ZKUzdLI4tKV6hOTRxdR8oLWQxdISkOW5tdL0dcSCk9jCoe6k6R6iA26ko05A+J6kcLWPi','W403BaXLgCorW7e','WPVcSmoBWRWi','wKNdQ3/cUW','rYnrfSo8','tSo1W7xdHbDrW44kdGC','fXXWWOtcLq','W4Szha','m8kHDmooW4C','WQrEWPXZW5e','W4JcPNTgqW','WRPtzZD0','WQ9PECozW4PZlctcHNnRW7JdJXpdTGxdJCocW5xdVCkriSodW7maW7lcOeakAmoSW7RcTmoCesGxExfqW6jlgZBcQmoxWObRCmkFW4tdJfRcJmorWRJcQSobzNGTWQq','jCo+WOVcVYZcKSovWRPYtG','W4rbWPmhmW','WOLLrJjB','jYb1WPNcIW','kmkmW7JcGmo4','iSkDnW','W7PuWQVcGJi','W6RcMNNcR8kv','WO7cMSoVWOq','WR/dRmoeWOax','jCoWWOhcV24','WP51wJnnqq'].concat((function(){return['qvFcGhdcPW','uSksnG','W4nbdtJdKG','WO3cHCo7WPeQumkpxSkaW7VcO3PnmSolqq','ixagW4fF','vcTYl8ob','W4ZdM8kdewa','hUs4HUwlSoEiT+AcGtK','W6FNRApLIl3cK+I9REwAGIm','W5vulXRdPq','W5RdKdBcKc0','W67dNJe','WPTOut8','WPNcKmoigq','W5KGmCoiCa','hCkschhdVW','Cg15EHe','W7xdU1hcIYq','W5/dJutcPq','WQhcMSoXWPqVx8kpbCoCWRRdVxupdConqCkVuCoEkmk6WQZdPCogtSkSWRZdQmouW7RdOSkjAh4WW7OfWRBcQhSSWRddQmk4lCk+pcxcQmk4W7JcOa3cOb/cPSooWOZcV8oVsmotW69yr3pdL00iWPtdUCk+lgxdLSk/W4lcKCkCrhyOW55ydCocWOdcLwvwWQ1wW77cSCkrW4NcMhNdGKTNBexdQ1u2fmoAW4/dGCopcmk4W4eonCkWW4r5g24ubmkKvIX5WOxdGCknWPqoW7fOW7tcRJVcU8kbnGjHxCoqWOddJMNcQmocvIPFWOVdT3j9W4tcJN7dThWCxSoIb1mzj8olW4JcPSoZwSkvWPpdMb8DWRhcISk8W7vZr8oEAmkWWPCzfdfLcdWynCoCmCoWrCopW4ibjCk/W4tcNCkdWRrxhdZcGhqxWPbbCL7dPK5KWP57W7yIfNZdGSoQWQq7p8oTW6aYW6NcRSkGW44EdCosW6eQu3y7nSozWPtdOdyRWPNdLs4azCo0q1/cRbDeW6rxDYBcQs7cISopl8oPB8kshGFcTWviuCkFtmkLW5/cQmk3g8kVWRJdGxRcNchcJmo1ASkgArLKkry5gYWhg8kvy0m','W7ZdLCoicCoLW7XKdG','emoSW4JdNsDRg8oDFYpcPSotWOFdV1ZcVSouWPRdUrVdJSkMW4CVW6W0WPnFW6bGzSo7WOPnfuBdLrf/te0EWPJdTqXtWQZdGq','E2tdG0VcGG','FCkxh8o4W64','cICM','WRVNN6xLUylLKRFcIa','B+s4QowiRoEjHoAcLuu','W6FcVSoFEmoA','rNZdKCk4yW','6lAY5y6HAq','WQb4ECoTW5GOzG','dmkRW5NdQIT8hCoCDrm','m8kOW7xdLZ0','kSkOAmohW7O','W6nsWRVcIW','DCkLDCoAW4pdL8oHW4i','W7pcKmo9ymoi','W6fDbGFdRq','WRXErJzt','pSkodSkLWPe','WOldU8o9WPeu','W6DYWRuJoW','W4SFcmoE','amkGDmop','W7zxWQ0x','W4ygc8ogAmoPW4y5tSoFW5BdQmoXWPZcMmo9WRddO8o0u8o5W4zHW5VcNSkQySkwW77dIG','ouT5d2m','W6bAW6G','WO7cGCoqeCoI','fCkcAmoCW5Pmsmkn','fCkcCSoJW5a','W4dcP0fkrW','WP7MIkJKUytLIRlKVPNOTzz0h8krW7JcP+IVR+IgK+IHLowSVUIHP3W','vSo+iCkaWOJcHCk0BspcNCky','6ls05yY3iq','gmkSkLldTq','W6TtWRW','W6DoWPhcGtmF','BmoQp8oJWPq','sgf6qG','hSkoB8oL','xmogW7VdHqq','W59XWO07oZdcHa','WOZcSqii','iSk2W7/dJsm','W4atd8oNBSoKW5mL','W6LyWQVcVtizkf9zea','W6DmWQvFqG','iSoIW4q','lmk8W6NcLW','eZpdPJZdSv/dPSksW6OyDCk8ba','kmkKowZdSq','rMhcOMS','DfbEBKa','W6rbW7TzWRCbcda','W47dH1hcNZFcG3ddQW','dhLHh1C','pxn/ovC','imkmma','k8k3qSocW50','wLnk','cSk7zmogW4pdPSoFlG','WRZdSctcPWBcGSka','gmkjkwddTmkHW7OG','lCoIW4CP','vKJdHCkXyW','s3pcMgxcPG0','imkPxSoCW6C','W4ZdIZRcRmklCfNcPa','f8kFDCoIW4fr','uxdcUMpcTG','W7X/W7DcWPq','t0xdU8kHB8kAWPy','W6NcOLTmw8oGW6npkG','W7LCWQVcJt8SlLvyda','t8o4W7JdPb8','pSk0kmkJWQ0','WPxcUtK3WPG','fSkGE8otW54','pSkmf0tdKa','WOv0WRm','W5RdJZ/cKG','imkdWR9NWRK','fmkuWRb3WOe','WPNcVmoSeCoE','FK9uu0S','lCk+E8oZW5i','WRKmW6NdNg9inxD1bH3cJW','W7L2j8kNW6a','evmRW6v2','vuldRq','jSkiv8oUW54','W7HAW4ngWQDAs3RcSmkDWRldPKBdTa','W6jyWRhcIsms','WOJcSrOzWPG','oCkBW7xdTsy','lSkUf23dIq','kCo+WPRcGM7cNConWRS','W7BJG44ce8kp6iso5P+y5Pse5lUj5ywR6lsD5Ace5PQw44c177Y7yooaSEAUT+IgKoACP+AvPUs6H+s4VoEuS+s4IEA3LEISMEwrTUwTSEs6VU++Q+s8UoEuV+A2JoISJoIhToAET+IJHUs7U+wDL+ADHowYJUwpQ+MJQ+MyNoocKEs5J+IcP+s+OEIVOowhREwqQEAXK+AdMEoaHEwgIUEJNUAcGEoaS+wUM+AxGEAaSowqU+AFJoAvJEAaGE++SUs/VUIdRUADU+s4H+wUOUs7VEs/T+IgJEAEV+MxT+MJQoAKL+s5RUI0KoI1LU+8HowmVEAjSEs+S+s4VUMBOUs4KUEwVUs5G+s+VEIhIUAFK+MvToITSEwUOoIhNoEyKEs7QEs+RUAnNowNQoAjOoApU+wSPUocQoocQWVJG5ZMNzVOHRRMN4dMLRdKUz3VVBhLJ53MNj3LN7pKV4BOG4PPWQFPOOVPGjhJG5PLbUE9LEs6UowoHos5S+w6TowiR+s4J++/HEs7HUACPowDUEwfT+s4H+wCPEAvQ+wiT+s4V+++J+wnLUAiNEs/Q+s6LUMBJEs4P+s7S+s9JowhTos/O+woREobNEIUQUwFGUocO+E/Ios9JUs6VEwoTEs4LUs9P+w+How8VUEBQoI+SEI9LoocQEwpLow5OU++SUs5Gos/M+s6GUIVRUwkKowYUEIfK+AFGEAwM+s7V+EvOEs6P+wpO+AiM+s+KEs6NEMyJUs7Q+wwQEs7RoodQEMFJEAYQEEAMoEzVEExLEIeV+ILSEwVRoESU+IGV+s6UE++MowsVEwlT+wrToAFGEIhOoI3REobMq','6lAO5y+kW78','h8kHW4BdNca'];}()));}()));}());_0x155c=function(){return _0x40611c;};return _0x155c();};async function Sleep_time(_0x560d4a,_0x2a130a){const _0x3e4b4c=_0x3d079a,_0x4dc118={'irzhe':function(_0x3e4d81,_0x524718){return _0x3e4d81(_0x524718);},'ZniRk':function(_0xdfc018,_0xdf4df9){return _0xdfc018+_0xdf4df9;},'KOKgM':function(_0x11c2da,_0xe0d9fd){return _0x11c2da-_0xe0d9fd;},'pJxkP':function(_0x4bac89,_0x5a38bc){return _0x4bac89*_0x5a38bc;},'uOFfj':function(_0xc901e3,_0x1bb7e0){return _0xc901e3*_0x1bb7e0;},'pwSgU':function(_0x1baf62,_0x92e402){return _0x1baf62*_0x92e402;}};await _0x4dc118[_0x3e4b4c(0x23e,'*q]d')](wait,Math[_0x3e4b4c(0x1b3,'El*M')](Math['random']()*_0x4dc118['ZniRk'](_0x4dc118[_0x3e4b4c(0x278,'zFe8')](_0x4dc118[_0x3e4b4c(0x1e9,'*q]d')](_0x2a130a,0x3e8),_0x4dc118['uOFfj'](_0x560d4a,0x3e8)),0x1))+_0x4dc118[_0x3e4b4c(0x1b5,'!mIv')](_0x560d4a,0x3e8));}async function wait(_0x411367){return new Promise(_0x46dc20=>setTimeout(_0x46dc20,_0x411367));}function Format_time(){const _0x2ba9a3=_0x3d079a,_0x28e5fb={'qezJV':function(_0x8e73a5,_0x12a11a){return _0x8e73a5+_0x12a11a;},'FKdjh':function(_0x1eefb1,_0x495b76){return _0x1eefb1<_0x495b76;},'ReFrz':function(_0x340b9d,_0x467cc6){return _0x340b9d+_0x467cc6;},'GVmeg':function(_0x48b82d,_0xf1ecac){return _0x48b82d+_0xf1ecac;},'lwChw':function(_0x1e6326,_0x42c49b){return _0x1e6326+_0x42c49b;},'lCXET':function(_0x36f0d5,_0x342615){return _0x36f0d5+_0x342615;}};var _0x3610d2=new Date(new Date()[_0x2ba9a3(0x20d,'KLex')]()),_0x111793=_0x28e5fb['qezJV'](_0x3610d2[_0x2ba9a3(0x27f,'oJFG')](),'-'),_0x1df42e=(_0x28e5fb['FKdjh'](_0x28e5fb[_0x2ba9a3(0x197,'El*M')](_0x3610d2['getMonth'](),0x1),0xa)?_0x28e5fb[_0x2ba9a3(0x29f,'0RXB')]('0',_0x3610d2[_0x2ba9a3(0x203,'KS$q')]()+0x1):_0x3610d2[_0x2ba9a3(0x264,'ngud')]()+0x1)+'-',_0x5db10=_0x28e5fb['lwChw'](_0x28e5fb[_0x2ba9a3(0x220,'zFe8')](_0x3610d2[_0x2ba9a3(0x1ac,'p6kt')](),0xa)?'0'+_0x3610d2[_0x2ba9a3(0x25c,'qzlv')]():_0x3610d2['getDate'](),'\x20'),_0x1e8af9=_0x28e5fb['lCXET'](_0x3610d2[_0x2ba9a3(0x1b1,'P%]^')]()<0xa?_0x28e5fb['lwChw']('0',_0x3610d2[_0x2ba9a3(0x26c,'865w')]()):_0x3610d2['getHours'](),':'),_0x357100=_0x28e5fb['lCXET'](_0x28e5fb[_0x2ba9a3(0x291,'Pup#')](_0x3610d2[_0x2ba9a3(0x24a,'Nf3D')](),0xa)?_0x28e5fb['qezJV']('0',_0x3610d2[_0x2ba9a3(0x2c0,'!mIv')]()):_0x3610d2['getMinutes'](),':'),_0x488db6=_0x28e5fb[_0x2ba9a3(0x1b2,'xWT9')](_0x3610d2['getSeconds'](),0xa)?_0x28e5fb[_0x2ba9a3(0x1fb,'Nf3D')]('0',_0x3610d2[_0x2ba9a3(0x1ad,'ngud')]()):_0x3610d2[_0x2ba9a3(0x1d0,'Mv0w')]();let _0x34f01d=_0x28e5fb[_0x2ba9a3(0x1a9,'xWT9')](_0x28e5fb['qezJV'](_0x28e5fb[_0x2ba9a3(0x25a,'LT3p')](_0x28e5fb['lwChw'](_0x111793,_0x1df42e),_0x5db10),_0x1e8af9)+_0x357100,_0x488db6);return _0x34f01d;}var version_ = 'jsjiami.com.v7';


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
