import { Injectable } from '@angular/core';

@Injectable()
export class TranslationService {
  isEn=true;

  enMap={
    "SAFE":"safe and reliable",
    "EASY":"easy to use",
    "CREATE":"Create Wallet",
    "RESTORE":"Restore",
    "AFTERRESTORE": "Please select the wallet you want to restore.",
    "WALLETNAME":"Wallet Name",
    "ENTER":"Enter Password",
    "PASSWORDMUST":"Password must contain at least a letter and a number.",
    "CONFIRMPASS":"Confirm Password",
    "WALLETSEED":"wallet seed",
    "THESE":"These 12 words are one way to restore your NBAI accounts. Save them somewhere safe.",
    "VERIFY":"verify",
    "PLEASEWORDS":"Please enter the 12 words phrase to verify your account.",
    "WORDSNOTRIGHT":"The 12 words phrase is not right, please check again.",
    "KEYSTORE":"keystore",
    "PLEASEKEYSTORE":"Please enter your keystore file to restore your wallet.",
    "LANGUAGE":"Language",
    "EN":"EN",
    "CN":"CN",
    "SAVE":"Save",
    "ADD":"New Wallet",
    "REPEAT":"Repeat Password",
    "PASSWORDNOTMATCH":"Password does not match",
    "NEXT":"NEXT",
    "EXPORTPRIVATE":"Export Private Key",
    "EXPORTKEYSTORE":"Export Keystore",
    "WARNINGEXPORT":"Warning: Export plain private key is very dangerous. We recommend you backup with keystore.",
    "PASSWORDINCORRECT":"Password Incorrect",
    "PASSFORMAT": "Password must contain a letter, a number, and at least 5 characters",
    "EXPORT":"Export",
    "COPY":"Copy",
    "STOREOFFLINE":"Store Offline",
    "PLEASESTORE":"Please store the Keystore to a safe offline place like a USB drive. Never put it on internet",
    "DONTTRANSFER":"Don't Transfer via Internet Tools",
    "DONTUSEEMAIL":"Don't use Email or Cloud Storage tools to transfer Keystore. It could easily gets hacked and result in loss",
    "STORE":"Store to Password Vault",
    "IFYOU":"If you like to store online please make sure to use password vault apps such as 1Password/Keeppass",
    "TRANSACTIONSUCCEED":"Your transaction has been submitted successfully. Check more detail in your transaction history",
    "CLOSE":"Close",
    "IMPORTWALLET":"Import Wallet",
    "KEYSTOREPASSWORDINCORRECT":"Keystore or Password incorrect",
    "RECENT":"recent 20 transactions",
    "NOTRANSACRTIONS":"You have no transactions yet",
    "TRANSACTIONHASH":"Transaction Hash",
    "IN":"IN",
    "OUT":"OUT",
    "SELF":"SELF",
    "WALLETER":"Wallet",
    "ACTION":" ",
    "VALUE":"Value",
    "FROM":"From",
    "TO":"To",
    "TIME":"Time",
    "AMOUNT": "Amount",
    "ADDRESS": "Address",
    "AMOUNTINVALID":"Insufficient balance",
    "AMOUNTISNUMBER": "Amount should be a number",
    "GASLIMIT":"Gas Limit",
    "GASLIMITMUST":"Gas Limit Must Be Between 21000 UNITS And 4928871 UNITS.",
    "GASPRICE":"Gas Price (in Gwei)",
    "NOTE": "Note", 
    "SEND":"Send",
    "SENDNBAI":"Send NBAI",
    "CONFIRMATION":"CONFIRMATION",
    "WALLETPASSWORD":"Wallet Password",
    "CONFIRM":"Confirm",
    "BACK":"Back",
    "TOTALBALANCE":"total balance",
    "ACCOUNTS":"Accounts",
    "WALLET":"Wallet",
    "HISTORY":"History",
    "DASHBOARD":"Dashboard",
    "EXPLORER":"Explorer",
    "CLEAN": "Clean History",
    "DELETE": "Delete", 
    "COMPLETED": "Completed", 
    "SUCCESS": "Your transaction has been submitted successfully. Check more detail in your transaction history. ",
    "MINVALID": "mnemonic invalid",
    "DOWNLOAD": "Download",
    "REFRESH": "Refresh",
    "IMPORTKEYSTOREFILE": "Keystore File",
    "IMPORTPRIVATEKEY": "Private Key",
    "ENTERPRIVATEKEY": "Enter Private Key",
    "ENTERNEWKEY": "Enter a password for selected wallet to enable the features temporary",
    "IMPORTKEYSTORE": "Import Keystore",
    "PRIVATEKEYINCORRECT": "Private key format incorrect.",
    "OFFLINEVERSION": "Offline Version",
    "WRONGADDRESS": "Wrong account address, please check again",     
    "TRANSACTIONSMORE": "For more information, please check the ",
    "SENDWITHADD": "Send",
    "TOKENSWAP": "Token Swap",
    "IMPORTMNEMONIC":"Mnemonic",
    "ENTERMNEMONIC":"Enter Mnemonic",
    "IMPORT": "Import",
    "NETWORK": "Network",
    "NODE": "Blockchain full node address"
};

   cnMap={
    "SAFE":"安全可靠",
    "EASY":"使用便捷",
    "CREATE":"新建钱包",
    "RESTORE":"找回钱包",
    "ENTER":"输入密码",
    "PASSWORDMUST":"密码必须包含至少一个字母和一个数字",
    "CONFIRMPASS":"重输一遍密码",
    "WALLETSEED":"钱包助记词",
    "THESE":"这十二个单词可以帮助你找回NBAI账户。请将他们存储在一个安全的地方",
    "VERIFY":"校对",
    "PLEASEWORDS":"请输入刚刚给你的十二个单词以校对你的账户",
    "WORDSNOTRIGHT":"十二个单词不相符，请再试一次",
    "KEYSTORE":"密钥库文件",
    "PLEASEKEYSTORE":"请选择你的Keystore文件来找回你的钱包",
    "LANGUAGE":"更改 语言",
    "EN":"英",
    "CN":"中",
    "SAVE":"保存",
    "ADD":"新增钱包",
    "WALLETNAME":"钱包名称",
    "REPEAT":"重输密码",
    "PASSWORDNOTMATCH":"两次输入的密码不符",
    "NEXT":"下一步",
    "EXPORTPRIVATE":"导出私钥",
    "EXPORTKEYSTORE":"导出密钥库文件",
    "WARNINGEXPORT":"警告：导出私钥有严重的安全隐患。我们建议你采用导出密钥库文件的选项",
    "PASSWORDINCORRECT":"密码错误",
    "PASSFORMAT": "密码必须包含一个以上字母，一个以上数字，长度至少五个字符",
    "EXPORT":"导出",
    "COPY":"复制",
    "STOREOFFLINE":"离线存储",
    "PLEASESTORE":"请将密钥库文件置于一个离线地点，比如USB存储器。切勿保存于网上",
    "DONTTRANSFER":"请勿使用在线工具传输",
    "DONTUSEEMAIL":"请勿通过邮件或者云存储来传输密钥库文件，否则你可能面临文件被窃取的风险。",
    "STORE":"存储于密码库",
    "IFYOU":"如果你选择在线存储，请存于一个安全的网站，比如1Password/Keeppass",
    "TRANSACTIONSUCCEED":"你的交易已经成功提交。请在你的交易历史中查询更多细节",
    "CLOSE":"关闭",
    "IMPORTWALLET":"导入钱包",
    "KEYSTOREPASSWORDINCORRECT":"密钥库文件或者密码错误",
    "RECENT":"近期20次交易",
    "NOTRANSACRTIONS":"你还没有任何交易",
    "WALLETER":"钱包",
    "ACTION":" ",
    "VALUE":"Value",
    "TRANSACTIONHASH":"交易hash",
    "IN": "转入",
    "OUT": "转出",
    "SELF": "SELF",
    "FROM":"来自",
    "TO":"发给",
    "TIME":"时间",
    "AMOUNT":"数额",
    "ADDRESS": "钱包地址",
    "AMOUNTINVALID": "余额不足",
    "AMOUNTISNUMBER": "转账金额必须为数字",
    "GASLIMIT":"gas 上限", 
    "GASLIMITMUST":"gas 上限的数值必须介于21000和4928871",
    "NOTE": "备注", 
    "GASPRICE":"gas 价格(Gwei)",
    "SEND":"转账",
    "CONFIRMATION":"确认",
    "WALLETPASSWORD":"钱包密码",
    "CONFIRM":"确认",
    "BACK":"返回",
    "TOTALBALANCE":"总  余  额",
    "ACCOUNTS":"账户",
    "WALLET":"钱包",
    "HISTORY":"历史",
    "DASHBOARD":"首页", 
    "EXPLORER":"浏览器",
    "CLEAN": "删除历史", 
    "DELETE": "删除", 
    "COMPLETED": "转账成功", 
    "SUCCESS": "你已转账成功，请查看转账历史记录。 ",
    "MINVALID": "助记词 错误",
    "DOWNLOAD": "下载",
    "REFRESH": "刷新",
    "IMPORTKEYSTOREFILE": "用Keystore导入",
    "IMPORTPRIVATEKEY": "用密钥导入",
    "ENTERPRIVATEKEY": "请输入密钥",
    "ENTERNEWKEY": "请输入钱包新密码，以保证与平台兼容",
    "IMPORTKEYSTORE": "导入密钥库文件",
    "PRIVATEKEYINCORRECT": "密钥格式不正确",
    "OFFLINEVERSION": "离线版下载",
    "WRONGADDRESS": "钱包地址有误，请检查确认",
    "TRANSACTIONSMORE": "获取更多信息，请访问",      
    "SENDWITHADD": "转账",
    "TOKENSWAP": "主网映射",
    "IMPORTMNEMONIC":"用助记词导入",
    "ENTERMNEMONIC":"请输入助记词",
    "IMPORT": "导入钱包",
    "NETWORK": "网络",
    "NODE": "全节点地址"
};

  constructor() {}

}
