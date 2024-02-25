(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72],{2305:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kubernetes-overview/window-directory-k8s-mount",function(){return a(1983)}])},1983:function(e,n,a){"use strict";a.r(n),a.d(n,{__toc:function(){return d}});var t=a(5893),c=a(2673),i=a(373),o=a(8426);a(9128);var s=a(2643);let d=[{depth:2,value:"참고자료",id:"참고자료"},{depth:2,value:"윈도우OS 에서 hostPath 경로",id:"윈도우os-에서-hostpath-경로"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",pre:"pre",code:"code",span:"span"},(0,s.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"kubernetes hostPath 지정시 윈도우 WSL 디렉터리 경로"}),"\n",(0,t.jsx)(n.h2,{id:"참고자료",children:"참고자료"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/71018631/kubernetes-on-docker-for-windows-persistent-volume-with-hostpath-gives-operatio",children:"Kubernetes on docker for windows, persistent volume with hostPath gives Operation not permitted"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://vine-nam.github.io/2022-10/mount-Windows-path-in-WSL2-Kubernetes-environment",children:"WSL2 Kubernetes 환경에서 Windows 경로 Mount 하기"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/66985465/kubernetes-how-to-correctly-mount-windows-path-in-wsl2-backed-environment/67053315#67053315",children:"Kubernetes how to correctly mount windows path in wsl2 backed environment"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://arclab.tistory.com/337",children:"Windows 10 20H2 Docker Desktop WSL2 enable 환경에서 Kubernetes volume hostPath 연결 오류 해결"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/71018631/kubernetes-on-docker-for-windows-persistent-volume-with-hostpath-gives-operatio",children:"Kubernetes on docker for windows, persistent volume with hostPath gives Operation not permitted"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.leafcats.com/330",children:"wsl2 kubernetes volume hostpath 못잡는 문제 해결방법"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.inflearn.com/questions/98495/access-i-s-denied-%EB%AC%B8%EC%A0%9C",children:"https://www.inflearn.com/questions/98495/access-i-s-denied-문제"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/73315685/error-response-from-daemon-mkdir-c-program-files-git-opt-access-is-denied",children:"Error response from daemon: mkdir C:\\Program Files\\Git\\opt: Access is denied"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/60782460/path-for-persistentvolume-in-kubernetes-yaml-in-windows",children:"path for PersistentVolume in Kubernetes .yaml in Windows"})}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"윈도우os-에서-hostpath-경로",children:"윈도우OS 에서 hostPath 경로"}),"\n",(0,t.jsxs)(n.p,{children:["쿠버네티스 역시 결국은 Docker 엔진으로 동작하는데, 윈도우 기반의 Docker 엔진에서 WSL 의 어느 디렉터리를 참조하는지가 꽤 까다롭습니다.",(0,t.jsx)("br",{}),"\r\n디렉터리를 참조하는 경로는 아래와 같이 구성됩니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.pre,{"data-language":"bash","data-theme":"default",filename:"bash",hasCopyCode:!0,children:(0,t.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"/run/desktop/mnt/host/c/PATH/TO/FILE"})})})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["예를 들어 HOST PC 의 /v/000.env/volume 을 파드 내에서 마운트할 때 ",(0,t.jsx)(n.code,{children:"hostPath"})," 의 ",(0,t.jsx)(n.code,{children:"path"})," 는 아래와 같이 지정해줍니다."]}),"\n",(0,t.jsx)(n.pre,{"data-language":"bash","data-theme":"default",filename:"bash",hasCopyCode:!0,children:(0,t.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"/run/desktop/mnt/host/v/000.env/volume"})})})})]})}let r={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/kubernetes-overview/window-directory-k8s-mount.mdx",route:"/kubernetes-overview/window-directory-k8s-mount",timestamp:17086006e5,pageMap:[{kind:"Folder",name:"fibonacci-backend-cache",route:"/fibonacci-backend-cache",children:[{kind:"MdxPage",name:"backend-cache-coding",route:"/fibonacci-backend-cache/backend-cache-coding"},{kind:"MdxPage",name:"backend-cache-graceful-shutdown",route:"/fibonacci-backend-cache/backend-cache-graceful-shutdown"},{kind:"MdxPage",name:"backend-cache-jib-build",route:"/fibonacci-backend-cache/backend-cache-jib-build"},{kind:"MdxPage",name:"backend-cache-k8s-yaml",route:"/fibonacci-backend-cache/backend-cache-k8s-yaml"},{kind:"MdxPage",name:"backend-cache-kustomize",route:"/fibonacci-backend-cache/backend-cache-kustomize"},{kind:"MdxPage",name:"introduce-fibonacci-backend-cache",route:"/fibonacci-backend-cache/introduce-fibonacci-backend-cache"},{kind:"Meta",data:{"introduce-fibonacci-backend-cache":"소개","backend-cache-coding":"Backend 코드 작업","backend-cache-jib-build":"Gradle Jib 빌드 정의, 이미지 생성, 푸시","backend-cache-k8s-yaml":"k8s 리소스 정의 & 로컬 k8s 확인","backend-cache-kustomize":"Kustomize Overlay 작업","backend-cache-graceful-shutdown":"Graceful Shutdown 처리"}}]},{kind:"Folder",name:"fibonacci-backend-web",route:"/fibonacci-backend-web",children:[{kind:"MdxPage",name:"backend-web-coding",route:"/fibonacci-backend-web/backend-web-coding"},{kind:"MdxPage",name:"backend-web-graceful-shutdown",route:"/fibonacci-backend-web/backend-web-graceful-shutdown"},{kind:"MdxPage",name:"backend-web-hpa-testing",route:"/fibonacci-backend-web/backend-web-hpa-testing"},{kind:"MdxPage",name:"backend-web-jib-build",route:"/fibonacci-backend-web/backend-web-jib-build"},{kind:"MdxPage",name:"backend-web-k8s-yaml",route:"/fibonacci-backend-web/backend-web-k8s-yaml"},{kind:"MdxPage",name:"backend-web-kustomize",route:"/fibonacci-backend-web/backend-web-kustomize"},{kind:"MdxPage",name:"introduce-fibonacci-backend-web",route:"/fibonacci-backend-web/introduce-fibonacci-backend-web"},{kind:"Meta",data:{"introduce-fibonacci-backend-web":"소개","backend-web-coding":"Backend 코드 작업","backend-web-jib-build":"Gradle Jib 빌드 정의, 이미지 생성, 푸시","backend-web-k8s-yaml":"k8s 리소스 정의 & 로컬 k8s 확인","backend-web-hpa-testing":"HPA 정의 및 테스트","backend-web-kustomize":"Kustomize Overlay 작업","backend-web-graceful-shutdown":"Graceful Shutdown 처리"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"kubernetes-overview",route:"/kubernetes-overview",children:[{kind:"MdxPage",name:"hostPath-emptyDir",route:"/kubernetes-overview/hostPath-emptyDir"},{kind:"MdxPage",name:"intro",route:"/kubernetes-overview/intro"},{kind:"MdxPage",name:"kubernetes-resource-assignment",route:"/kubernetes-overview/kubernetes-resource-assignment"},{kind:"MdxPage",name:"kubernetes-scaling",route:"/kubernetes-overview/kubernetes-scaling"},{kind:"MdxPage",name:"PV-PVC",route:"/kubernetes-overview/PV-PVC"},{kind:"MdxPage",name:"storage-class",route:"/kubernetes-overview/storage-class"},{kind:"MdxPage",name:"window-directory-k8s-mount",route:"/kubernetes-overview/window-directory-k8s-mount"},{kind:"Meta",data:{intro:"소개","kubernetes-scaling":"쿠버네티스의 스케일링","kubernetes-resource-assignment":"쿠버네티스의 자원 할당","hostPath-emptyDir":"hostPath, emptyDir","PV-PVC":"PV, PVC","storage-class":"스토리지 클래스","window-directory-k8s-mount":"kubernetes hostPath 지정시 윈도우 WSL 디렉터리 경로"}}]},{kind:"Folder",name:"setup",route:"/setup",children:[{kind:"MdxPage",name:"deploy-environment",route:"/setup/deploy-environment"},{kind:"MdxPage",name:"local-k8s-setup",route:"/setup/local-k8s-setup"},{kind:"MdxPage",name:"redis-environment",route:"/setup/redis-environment"},{kind:"MdxPage",name:"reference",route:"/setup/reference"},{kind:"Meta",data:{"local-k8s-setup":"로컬 k8s 셋업","deploy-environment":"배포환경","redis-environment":"레디스 환경설정",reference:"참고한 스터디 자료들"}}]},{kind:"Meta",data:{index:"Introduction",setup:"SETUP","fibonacci-backend-cache":"fibonacci-backend-cache","fibonacci-backend-web":"fibonacci-backend-web",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"kubernetes hostPath 지정시 윈도우 WSL 디렉터리 경로",headings:d},pageNextRoute:"/kubernetes-overview/window-directory-k8s-mount",nextraLayout:i.ZP,themeConfig:o.Z};n.default=(0,c.j)(r)},8426:function(e,n,a){"use strict";var t=a(5893);a(7294);let c={logo:(0,t.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/chagchagchag/docs-fibonacci-backend"},docsRepositoryBase:"https://github.com/chagchagchag/docs-fibonacci-backend",footer:{text:"Nextra Docs Template"}};n.Z=c},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=2305)}),_N_E=e.O()}]);