(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[54846],{16239:function(e,n,o){"use strict";o.d(n,{Z:function(){return l}});var i=o(22122),t=o(19756),r=o(86010),a=o(67294),s="docsButton_2Emz",c="docsButtonRound_3i9G";function l(e){var n,o=e.href,l=e.round,u=void 0!==l&&l,d=(0,t.Z)(e,["href","round"]);return d.className=(0,r.Z)(((n={})[d.className]=Boolean(d.className),n[s]=!0,n["docs-button"]=!0,n[c]=u,n["docs-button--round"]=u,n)),o?a.createElement("a",(0,i.Z)({href:o,className:"docsButton"},d),d.children):a.createElement("button",(0,i.Z)({className:"docsButton"},d),d.children)}},30786:function(e,n,o){"use strict";o.r(n),o.d(n,{frontMatter:function(){return d},metadata:function(){return p},toc:function(){return g},default:function(){return m}});var i=o(22122),t=o(19756),r=(o(67294),o(3905)),a=o(28312),s=o(16239),c=o(41395),l=o(58215),u=o(81840),d={title:"Foreground Service"},p={unversionedId:"native/plugins/foreground-service",id:"native/plugins/foreground-service",isDocsHomePage:!1,title:"Foreground Service",description:"This plugin allows for android devices to continue running services in the background, using a",source:"@site/docs/native/plugins/foreground-service.md",sourceDirName:"native/plugins",slug:"/native/plugins/foreground-service",permalink:"/docs/native/plugins/foreground-service",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/foreground-service.md",version:"current",frontMatter:{title:"Foreground Service"},sidebar:"native",previous:{title:"Flurry Analytics",permalink:"/docs/native/plugins/flurry-analytics"},next:{title:"FTP",permalink:"/docs/native/plugins/ftp"}},g=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],v={toc:g};function m(e){var n=e.components,o=(0,t.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},v,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This plugin allows for android devices to continue running services in the background, using a\nforeground ongoing notification. This is targeted towards use with plugins such as\n'cordova-geolocation' that will not run while the app is in the background on android API 26+."),(0,r.kt)("p",null,"For android API 28+, the following xml snippet should be inserted into ",(0,r.kt)("inlineCode",{parentName:"p"},"config.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'...\n<platform name="android">\n  <config-file parent="/*" target="AndroidManifest.xml">\n    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />\n  </config-file>\n  ...\n')),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/DavidBriglio/cordova-plugin-foreground-service",target:"_blank",rel:"noopener",className:"git-link"},(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/DavidBriglio/cordova-plugin-foreground-service")),(0,r.kt)("h2",null,"Stuck on a Cordova issue?"),(0,r.kt)(a.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,r.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,r.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{href:"#installation"},"Installation")),(0,r.kt)(c.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-foreground-service ","\n","$ npm install @ionic-native/foreground-service ","\n","$ ionic cap sync")),(0,r.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-foreground-service ","\n","$ npm install @ionic-native/foreground-service ","\n")),(0,r.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,r.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,r.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,r.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,r.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ForegroundService } from '@ionic-native/foreground-service/ngx';\n\n\nconstructor(public foregroundService: ForegroundService) { }\n\n...\n\nstartService() {\n // Notification importance is optional, the default is 1 - Low (no sound or vibration)\n this.foregroundService.start('GPS Running', 'Background Service', 'drawable/fsicon');\n}\n\nstopService() {\n // Disable the foreground service\n this.foregroundService.stop();\n}\n\n")))}m.isMDXComponent=!0}}]);