import DataFrontendBackendCTO from "./positon/DataFrontendBackendCTO";
import { IFlexiResume, IHeaderInfo } from "../types/IFlexiResume";
import { assignDeep } from "../utils/Tools";
import DataGameDev from "./positon/DataGameDev";
import DataContractTask from "./positon/DataContractTask";

export default {
    header_info: {
        "type": "header_info", // 简历头部模块
        name: "陈剑",
        email: "jk@deden.cn",
        gender: "男",
        avatar: "/images/avatar.webp",//https://photocartoon.net/ 这是一个将照片转换为卡通形象的网站
        location: "上海",
        is_male: "1",// 1男 0女 显示图标
        phone: "138******99",
        wechat: "ta******ck",
        status: "💚挂靠-随时到岗",//💚离职-随时到岗 💛在职-月内到岗 💗在职-暂不换工作
        age: "38岁",
        education: "本科",
        work_experience_num: "18年以上工作经验",
        position: "前端开发",
        expected_salary: "期望薪资 90k-150k",
        //用来保存简历时的简历名称格式,同时也是浏览器title的格式
        resume_name_format: "{position}-{name}-{age}-{location}",

        // 是否显示个人主页的URL地址
        home_page: "https://demo.deden.cn:8080",
        // home_page: "https://resume.deden.cn",


        // 生成二维码的URL地址
        qrcode: true,// 不指定特定URL会默认根据当前URL地址动态生成二维码,或直接填写URL地址生成固定的二维码
        // qrcode: "https://resume.deden.cn/game",// 生成固定的URL地址二维码
        qrcode_msg: "扫描查看体验更好",//二维码提示信息
    } as IHeaderInfo,
    skill_level:
    {
        "type": "skill_level",// 技能熟练度,高亮 
        name: "技能熟练度",
        list: [
            ["Node", 3],
            ["Canvas", 3],
            ["Wasm", 3],
            ["CICD集成", 3],
            ["微前端", 3],
            ["沙箱和样式隔离", 3],
            ["网页三剑客", 3],
            ["MVVM框架", 3],
            ["项目推进", 3],
            ["AI领域", 2],
            ["页游时代", 3],
            ["技术攻坚", 3],
            ["团队协作", 3],
            ["项目架构", 3],
            ["H5互动/游戏开发", 3],
            ["Unity游戏开发", 3],
            ["JavaScript", 3],
            ["TypeScript", 3],
            ["React Native", 2],
            ["React", 3],
            ["Vue", 3],
            ["Node.js", 3],
            ["Golang", 1],
            ["CSS", 3],
            ["技术选型", 3],
            ["技术攻关", 3],
            ["系统架构", 3],
            ["性能调优", 3],
            ["跨端应用方案", 2],
            ["解决疑难杂症", 3],
            ["敏捷开发", 3],
            ["迭代开发", 3],
            ["精益", 2],
            ["KPI", 2],
            ["OKR", 3],
            ["团队组建", 3],
            ["0到1上市", 3],
            ["0到1解散", 3],
            ["落地经验", 3],
            ["初创公司", 3],
            ["技术领导", 3],
            ["职级评定标准", 2],
            ["技术规范", 2],
            ["Node.js", 3],
            ["TypeScript", 3],
            ["JavaScript", 3],
            ["WebAssemblyScript", 3],
            ["ActionScript 3", 3],
            ["C#", 3],
            ["C/C++", 2],
            ["Java", 2],
            ["Python", 2],
            ["Golang", 1],
            ["PHP", 1],
            ["Shell", 2],
            ["React", 3],
            ["SWC", 3],
            ["Mobx", 3],
            ["Redux/MobX", 3],
            ["framer-motion", 3],
            ["remark-html", 3],
            ["Three.js", 3],
            ["LayaAir", 3],
            ["Egret", 3],
            ["ECharts", 3],
            ["TradingVueJs", 3],
            ["Vite", 3],
            ["WebPack", 2],
            ["Pm2", 3],
            ["H5互动/游戏开发", 3],
            ["Angular", 2],
            ["Web3.js", 2],
            ["TradingView", 3],
            ["Babylon.js", 2],
            ["WebGL/WebGPU", 2],
            ["WebXR", 2],
            ["Unity WebGL", 2],
            ["WebAssembly", 3],
            ["OffscreenCanvas", 3],
            ["Web Worker", 3],
            ["Service Worker", 2],
            ["PWA", 2],
            ["Cordova", 3],
            ["Hybrid", 2],
            ["Taro", 2],
            ["Flutter", 1],
            ["Onsen UI", 2],
            ["Ionic", 3],
            ["Quasar", 1],
            ["Framework7", 1],
            ["Weex", 2],
            ["Electron", 3],
            ["Koa", 3],
            ["Git/SVN", 3],
            ["Node EventEmitter", 3],
            ["Next.js", 3],
            ["Pixi.js", 2],
            ["Express", 3],
            ["SSR/SSG", 3],
            ["Socket", 3],
            ["TCP/UDP/Socket", 3],
            ["CDN缓存策略", 3],
            ["CDN防劫持", 3],
            ["端TCP请求版本缓存", 3],
            ["RabbitMQ", 3],
            ["Nginx", 3],
            ["API(BFF, GraphQL, RESTful)", 3],
            ["Spring MVC", 1],
            ["Spring Async", 1],
            ["LCP、FID、TTFB、FCP、TBT、TTI", 3],
            ["ELK Stack (Elasticsearch, Logstash, Kibana)", 2],
            ["WebRTC", 2],
            ["OpenSearch", 1],
            ["Docker", 3],
            ["Kubernetes", 2],
            ["HAProxy", 2],
            ["Kafka", 2],
            ["Spring Boot", 2],
            ["Spring Cloud", 2],
            ["阿里云FC", 2],
            ["腾讯SCF", 2],
            ["Android", 2],
            ["iOS", 1],
            ["AWS Lambda", 2],
            ["Azure Functions", 2],
            ["API Gateway", 2],
            ["EventBridge", 2],
            ["Node EventEmitter", 3],
            ["Nginx/HAProxy/PM2", 3],
            ["Spring Cloud LoadBalancer", 2],
            ["Redis", 3],
            ["MongoDB", 3],
            ["MySQL（SQL和NoSQL）", 2],
            ["Unity", 3],
            ["Harman AIR", 3],
            ["Adobe Animate", 3],
            ["Adobe Photoshop", 2],
            ["Jenkins", 3],
            ["XCode", 2],
            ["微服务架构", 3],
            ["AWS", 2],
            ["Azure", 2],
            ["腾讯云", 2],
            ["阿里云", 2],
            ["CICD 流程", 3],
            ["K8s", 2],
            ["容器化", 2],
            ["CDN 策略优化", 3],
            ["PaaS", 2],
            ["aPaaS", 2],
            ["敏捷系统", 3],
            ["代码托管", 3],
            ["代码审查", 2],
            ["课程分享", 2],
            ["员工招聘", 2],
            ["技术线职级标准制定", 2],
            ["技术编码规范制定", 2],
            ["绩效考核", 2],
            ["AR/VR", 2],
            ["大型虚拟社区架构", 3],
            ["元宇宙", 3],
            ["Web 超大型社区", 3],
        ]
    },
    expected_positions: {
        /* `JSON.parse(JSON.stringify(DataGameDev)` 因共享了DataFrontend数据,防止数据互相影响,这里使用克隆,如果多份数据都单独写的话不需要这个步骤*/
        "game": assignDeep(JSON.parse(JSON.stringify(DataGameDev)), {
            "is_home_page": true,// 作为首页
            header_info: {
                position: "虚拟社区/游戏",
                expected_salary: "期望薪资 面议",
            },
            target: { hidden: true, },// 隐藏 职业规划 
            personal_strengths: {
                "type": "personal_strengths",// 个人优势模块
                name: "个人优势",
                content: `#### <span style="margin-left: 2em;"></span>精通全栈开发及游戏开发，拥有独立完成复杂项目能力。
>
#### <span style="margin-left: 2em;"></span>全职网站开发4年+，Web游戏15年+（Unity端游3年+），精通于web端网站和游戏架构，脚手架制作、抽象组件化、模块化、CICD集成/自动化部署、网页动画、交互、游戏、前后端Wasm密集计算性能加速、Node服务器渲染/游戏开发、CDN策略和预热，熟悉微前端、沙箱和样式隔离、跨端、主流MVVM框架等。
>
#### <span style="margin-left: 2em;"></span>技术阶梯2010年时在淘米网络属于T4-2，担任技术主导者角色15年+。擅长解决疑难杂症、技术选型、技术攻关、系统架构、性能调优以及跨端应用方案。精通精通全栈开发及高并发系统优化，尤其在 Node、React、Canvas 游戏与动画开发方面具备深厚经验，拥有 React 和 Hybrid 开发优化、前端工程化、工具建设、监控及性能优化的独到见解与实践。
>
#### <span style="margin-left: 2em;"></span>精通大型虚拟社区架构，拥有丰富项目经验，自研出成熟的社区架构体系和工具流，实现模块化高效开发。支持超大型社区的代码增量编译、资源压缩和打包发布，实现自动化上线流程。适用于 Web 超大型社区、元宇宙及 AR/VR 虚拟社区，提供高效稳定的解决方案。 


*<p align="right">---------好的架构技术真的可以一当十</p>*
                                `
            },
            skills:
            {
                collapsedNodes: [//折叠不展示的内容
                    "技术栈.前端开发",
                    "技术栈.客户端开发",
                    "技术栈.DevOps",
                    "技术栈.团队管理",
                ]
            },
        }),
        "frontend": assignDeep(JSON.parse(JSON.stringify(DataFrontendBackendCTO)), {
            personal_strengths: {
                "type": "personal_strengths",// 个人优势模块
                name: "个人优势",
                content: `#### <span style="margin-left: 2em;"></span>精通全栈开发及游戏开发，拥有独立完成复杂项目能力。全职网站开发4年+，Web游戏15年+，精通于web端网站和游戏架构，脚手架制作、抽象组件化、模块化、CICD集成/自动化部署、网页动画、交互、游戏、前后端Wasm密集计算性能加速、Node服务器渲染/游戏开发、CDN策略和预热，熟悉微前端、沙箱和样式隔离、跨端、主流MVVM框架等。
>
#### <span style="margin-left: 2em;"></span>精通Typescript/JavaScript、CSS、HTML、DOM、TCP/UDP/Socket协议等前端技术，熟悉ES6/7等相关标准、Web安全等；尤其在 Node、React、Canvas 游戏与动画开发方面具备深厚经验，拥有 React、Vue、Hybrid 开发优化经验；前端工程化、工具建设、监控及性能优化的独到见解与实践。
                                
                                `
            },
            target: { hidden: true, },// 隐藏 职业规划 
            header_info: {// 这里的会覆盖上面默认的数据,根据不同期望的职位设定不同的期望薪资等参数 
                position: "Web前端开发",
                expected_salary: "期望薪资 面议",
            },
            skills:
            {
                collapsedNodes: [//折叠不展示的内容
                    // "技术栈.前端开发", //显示前端开发所以不注释
                    // "技术栈.后端开发",
                    "技术栈.游戏开发",
                    "技术栈.客户端开发",
                    // "技术栈.DevOps",
                    "技术栈.团队管理",
                ]
            },
        }),
        "backend": assignDeep(JSON.parse(JSON.stringify(DataFrontendBackendCTO)), {
            personal_strengths: {
                "type": "personal_strengths",// 个人优势模块
                name: "个人优势",
                content: `#### <span style="margin-left: 2em;"></span>具备扎实的后端技术能力，精通Node并熟练使用 Koa、Next.js、Express 等框架，精通 BFF、GraphQL、RESTful API 设计与实现，擅长系统架构优化、高并发处理以及 Linux 环境下的开发与部署，能够根据需求灵活选择技术栈，确保服务的高可用性与稳定性。
>
**框架/技术**
- 精通:Koa, Next.js, Express, SSR/SSG, Socket, RabbitMQ, Nginx, API(BFF, GraphQL, RESTful)
熟练/熟悉: Spring MVC, ELK Stack (Elasticsearch, Logstash, Kibana), WebRTC, OpenSearch

**微服务架构**
- 精通/熟悉: Docker, Kubernetes, RabbitMQ/Kafka, Spring Boot, Spring Cloud
Serverless架构/事件驱动架构 
- 精通/熟悉: 阿里云FC/腾讯SCF/AWS Lambda/Azure Functions, API Gateway,EventBridge/Node EventEmitter

**负载均衡/缓存策略/消息队列**
- 精通/熟悉: Nginx/HAProxy/Pm2, Redis, RabbitMQ/Kafka

**数据库**
- 精通/熟练: Redis, MongoDB, MySQL（SQL和NoSQL）                       
                                `
            },
            target: { hidden: true, },// 隐藏 职业规划 
            header_info: {
                position: "后端开发",
                expected_salary: "期望薪资 面议",
            },
            skills:
            {
                collapsedNodes: [//折叠不展示的内容
                    "技术栈.前端开发",
                    // "技术栈.后端开发",
                    "技术栈.客户端开发",
                    "技术栈.DevOps",
                    "技术栈.团队管理",
                ]
            },
        }),
        "cto": assignDeep(JSON.parse(JSON.stringify(DataFrontendBackendCTO)), {
            personal_strengths: {
                "type": "personal_strengths",// 个人优势模块                
                name: "个人优势",
                content: `#### <span style="margin-left: 2em;"></span>拥有15年以上的技术主导经验，2010年在淘米网络评选为职级技术阶梯T4-2，精通全栈开发及游戏开发，专注于AI及高并发系统优化。
>
#### <span style="margin-left: 2em;"></span>擅于解决疑难杂症、技术选型、技术攻关、系统架构、性能调优以及跨端应用方案。解决前端、后端和运维问题。
>
#### <span style="margin-left: 2em;"></span>诺基亚时代开始，第一批开启页游时代的开发者，拥有丰富的大小型游戏项目开发经验，独立设计开发核心底层模块的能力，能够有效应对未来复杂应用场景，具备独特的竞争优势。
>
#### <span style="margin-left: 2em;"></span>对AI领域有浓厚的兴趣，目前在电商应用（*如推荐系统、搜索引擎、视觉搜索和用户行为预测*）方面有研究，了解训练与部署，并持续学习相关技术。
>
#### <span style="margin-left: 2em;"></span>拥有10年以上管理经验，具备敏捷开发和迭代开发的实践经验，熟悉精益方法论及KPI与OKR的应用。多次完整经历初创公司周期，参与过从0到1上市和从0到1解散，这些经历显著提升了我的个人能力，并扩展了技术覆盖面，积累了团队组建经验。            
            `
            },
            target: { hidden: true, },// 隐藏 职业规划 
            header_info: {
                position: "技术总监/CTO",
                expected_salary: "期望薪资 面议",
            },
            //skills cto职业要全部展示,所以不用折叠,这里不用填写相应的折叠数据
        }),
        "contracttask": assignDeep(JSON.parse(JSON.stringify(DataContractTask)), {
            header_info: {
                position: "技术顾问/H5资源转换/外包",
                expected_salary: "价格面议",
                status: "💚空闲-可接外包",

                // 是否显示个人主页的URL地址
                home_page: "",
                // 生成二维码的URL地址
                qrcode: true,
            },
            personal_projects: {
                collapsedNodes: ["虚拟社区/游戏 作品",
                    ["虚拟社区/游戏 作品.社区养成类.摩尔庄园（2007年，儿童社区---中国迪士尼）", false],
                ]
            },
            skills: {
                collapsedNodes: ["技术栈",]
            },
            project_experience: {
                collapsedNodes: ["项目经历",]
            },
            html5_game_bottleneck: {
                collapsedNodes: [
                    "HTML5游戏行业瓶颈 与 解决方案",
                    ["HTML5游戏行业瓶颈 与 解决方案.HTML5游戏行业瓶颈.关于动画资源", false],
                    ["HTML5游戏行业瓶颈 与 解决方案.解决方案.逐帧动画.以腾讯《洛克王国Flash页游版》的宠物素材来举例👇", false],
                    ["HTML5游戏行业瓶颈 与 解决方案.解决方案.逐帧动画.未优化👿 - 体积76M-内存408M-不支持特效", false],
                    ["HTML5游戏行业瓶颈 与 解决方案.解决方案.逐帧动画.资源转换服务 - ⚡高清、流畅、无砍帧.矢量图和位图结合😃", false],
                    ["HTML5游戏行业瓶颈 与 解决方案.解决方案.逐帧动画.资源优化方案对比📖 - 百倍提升", false],
                ]
            },
            tech_consulting: {
                collapsedNodes: [
                    "技术顾问服务 + 外部资源转换服务",
                    ["技术顾问服务 + 外部资源转换服务.服务亮点.资源转换服务特性", false/*不折叠*/],
                    ["技术顾问服务 + 外部资源转换服务.服务内容.资源转换服务", false/*不折叠*/],
                ]
            },
            resource_conversion_demo: {
                collapsedNodes: [
                    "资源转换DEMO",
                    ["资源转换DEMO.示例3 - 交互动画", false/*不折叠*/],
                ]
            },
        }),
    }
}// as IFlexiResume; // 这里不关联编辑是更友好,能直接跳转到配置位置