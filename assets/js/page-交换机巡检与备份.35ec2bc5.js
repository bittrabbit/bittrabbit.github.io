(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1011:function(v,_,t){"use strict";t.r(_);var l=t(1),e=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"更新终止🚧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新终止🚧"}},[v._v("#")]),v._v(" 更新终止🚧")]),v._v(" "),t("p",[v._v("由于个人问题，除非bug发生了或者是新的想法冒出来了，项目就暂时搁置于此了。Econnect已经更新到了1.3的版本了，在目前来说也算是较为完善的版本了；最后这里感谢下MIRAI与校NIC")]),v._v(" "),t("h2",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[v._v("#")]),v._v(" 下载")]),v._v(" "),t("p",[v._v("具体文件可在"),t("a",{attrs:{href:"https://github.com/MLLR-L/Econnect/releases",target:"_blank",rel:"noopener noreferrer"}},[v._v("releases"),t("OutboundLink")],1),v._v("中下载")]),v._v(" "),t("h2",{attrs:{id:"特色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特色"}},[v._v("#")]),v._v(" 特色")]),v._v(" "),t("p",[v._v("Econnect由python制作而成，.exe文件为打包好的脚本，无需安装具体环境")]),v._v(" "),t("ul",[t("li",[v._v("范围选择")]),v._v(" "),t("li",[v._v("信息录入\n"),t("ul",[t("li",[v._v("采用csv文件录入，具体格式请看标题或下面，第一行切记请勿更改！")]),v._v(" "),t("li",[v._v("IP地址, 用户名, 密码, enable密码")])])]),v._v(" "),t("li",[v._v("备份\n"),t("ul",[t("li",[v._v("自带tftp服务器，无需另外开启")]),v._v(" "),t("li",[v._v("自动备份到一个"),t("code",[v._v("tftp_box")]),v._v("的文件夹内，下一层为"),t("code",[v._v("YYYYMMDDhh")]),v._v("，具体备份文件为"),t("code",[v._v("交换机名+ip第四位.text")])]),v._v(" "),t("li",[v._v("开启tftp服务前会检测本地是否有程序占用69端口，若占用则会kill对应进程")]),v._v(" "),t("li",[v._v("备份命令：copy flash:config.text tftp://"),t("strong",[v._v("IP")]),v._v("//"),t("strong",[v._v("路径")]),v._v(".text")])])]),v._v(" "),t("li",[v._v("巡检\n"),t("ul",[t("li",[v._v("支持巡检后输出excel文档")]),v._v(" "),t("li",[v._v("巡检命令如下：\n"),t("ul",[t("li",[v._v("show int status")]),v._v(" "),t("li",[v._v("show memory")]),v._v(" "),t("li",[v._v("show cpu")])])])])]),v._v(" "),t("li",[v._v("支持\n"),t("ul",[t("li",[v._v("我只测试了如下设备\n"),t("ul",[t("li",[v._v("锐捷\n"),t("ul",[t("li",[v._v("S2628")]),v._v(" "),t("li",[v._v("S2652")]),v._v(" "),t("li",[v._v("S3760E")]),v._v(" "),t("li",[v._v("S5750")])])]),v._v(" "),t("li",[v._v("华为\n"),t("ul",[t("li",[v._v("S5700")])])])])]),v._v(" "),t("li",[v._v("目前锐捷的S3760不能进入特权模式，初步判断是由于设备问题")])])])]),v._v(" "),t("h2",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),t("ul",[t("li",[v._v("速度慢，对多设备兼容性差")]),v._v(" "),t("li",[v._v("交互逻辑差，没有GUI界面")])]),v._v(" "),t("h2",{attrs:{id:"版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[v._v("#")]),v._v(" 版本")]),v._v(" "),t("ul",[t("li",[v._v("Econnect - 1.1ssh")]),v._v(" "),t("li",[v._v("具备基本巡检备份功能")]),v._v(" "),t("li",[v._v("分支 - Econnect 1.1ssh iso+text文件备份")]),v._v(" "),t("li",[v._v("Econnect 1.2ssh\n"),t("ul",[t("li",[v._v("巡检完毕会自动导出excel报告\n"),t("ul",[t("li",[v._v("速度加快")]),v._v(" "),t("li",[v._v("文件都塞box里")])])])])]),v._v(" "),t("li",[v._v("Econnect 1.3\n"),t("ul",[t("li",[v._v("综合版本")])])])]),v._v(" "),t("h2",{attrs:{id:"使用流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用流程"}},[v._v("#")]),v._v(" 使用流程")]),v._v(" "),t("ol",[t("li",[v._v("如果是第一次使用请确保当前路径没有一个叫"),t("code",[v._v("switch_info.csv")]),v._v("的文件，脚本会自动创建一个新的文件请按照格式填写即可，一行一台设备")]),v._v(" "),t("li",[v._v("请输入要执行的数字  1.巡检 2.备份 3.退出：\n"),t("ul",[t("li",[v._v("进入请根据需求在此界面输入[1 / 2 / 3]，其他数字无效")])])]),v._v(" "),t("li",[v._v("具体\n"),t("ol",[t("li",[v._v("巡检\n"),t("ol",[t("li",[v._v("请选择需要执行的交换机[格式：1、1-5]：\n"),t("ul",[t("li",[v._v("按照所提示的设备对应输入单个数字即可")]),v._v(" "),t("li",[v._v("单个模式：[number]；例如：5")]),v._v(" "),t("li",[v._v("批量模式：[number]-[number]；例如：5-10")])])])])]),v._v(" "),t("li",[v._v("备份\n"),t("ol",[t("li",[v._v("请选择需要执行的交换机[格式：1、1-5]：\n"),t("ul",[t("li",[v._v("按照所提示的设备对应输入单个数字即可")]),v._v(" "),t("li",[v._v("单个模式：[number]；例如：5")]),v._v(" "),t("li",[v._v("批量模式：[number]-[number]；例如：5-10")])])])])]),v._v(" "),t("li",[v._v("退出")])])])]),v._v(" "),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[v._v("#")]),v._v(" 常见问题")]),v._v(" "),t("p",[v._v("如果遇到奇怪的问题，欢迎互相交流与学习😄️")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("如果遇到tftp开启失败")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("如遇防火墙请允许通过，因为tftp服务器需要监听69端口")])]),v._v(" "),t("li",[t("p",[v._v("请右键管理员运行（这个问题大多数出现在win8）")])])])]),v._v(" "),t("li",[t("p",[v._v("若端口关闭失败请参考")]),v._v(" "),t("ul",[t("li",[v._v("https://jingyan.baidu.com/article/fb48e8be97ddc92e622e14f3.html")])])]),v._v(" "),t("li",[t("p",[v._v("关于netmiko模块ssh交换机遇到more的问题：")]),v._v(" "),t("ul",[t("li",[v._v("https://blog.csdn.net/weixin_34217711/article/details/91615805")])])]),v._v(" "),t("li",[t("p",[v._v("关于tftp集成的参考")]),v._v(" "),t("ul",[t("li",[v._v("https://stackoverflow.com/questions/57109992/how-to-stop-tftp-server-using-tftpy-on-python")])])]),v._v(" "),t("li",[t("p",[v._v("打包exe使用的命令：")]),v._v(" "),t("ul",[t("li",[v._v("pyinstaller  -F -i ./network.ico  Econnect.py")])])]),v._v(" "),t("li",[t("p",[v._v("备份失败没有文件？")]),v._v(" "),t("ul",[t("li",[v._v("打开控制面板："),t("code",[v._v("控制面板\\系统和安全\\Windows Defender 防火墙\\允许的应用")]),v._v("允许"),t("code",[v._v("Econnect")]),v._v("的专用或公用通过")])])])]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"telnet-版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#telnet-版本"}},[v._v("#")]),v._v(" Telnet 版本")]),v._v(" "),t("p",[v._v("telnet版本已不再更新！")]),v._v(" "),t("ul",[t("li",[v._v("具备基本连接巡检备份功能")])])])}),[],!1,null,null,null);_.default=e.exports}}]);