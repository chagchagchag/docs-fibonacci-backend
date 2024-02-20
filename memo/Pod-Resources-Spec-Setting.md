## Kubernetes Pod 의 자원 설정

## `resources` : Pod 의 Resource
```yaml filename="something-resource.yml" {0} copy
resources:
  requests: ## 1) 
    memory: "512Mi"
    cpu: "250m"
  limits:  ## 2)
    memory: "1Gi"
    cpu: "500m"
```
<br/>

1\) requests
- requests 는 주로 파드(Pod)가 노드 내에 배포될 때 노드 내에서 파드 하나가 확보해야 하는 자원의 크기를 의미한다.

<br/>

2\) limits
- limits 는 파드가 노드 내에서 최대한도로 사용할 수 있는 제한(Limit)을 의미한다

<br/>

## memory, cpu 의 단위 (Mi, Gi, m)
memory 에는 Mi, Gi 를 주로 단위를 사용한다. 일반적으로는 Mi는 MB, Gi 는 GB와 비슷한 의미로 인식된다. 세부적으로 따지면 조금은 다른 의미이긴 하지만 MB, GB와 비슷한 단위로 파악하는 것이 완전하게 틀려지는 방식은 아니다.<br/>

cpu 에는 주로 `m` 이라는 단위를 사용한다. 컨테이너가 할당받는 CPU Time 을 코어로 환산한다. 1 코어당 `1000m` 으로 환산해서 계산한다. <br/>
예를 들어 1코어(=1000m) 기반의 노드에서 `500m` 은 1/2 코어를 의미한다. 만약 8코어(=8000m) 기반의 노드에서 `2000m` 은 1/5 x 8 = 5/8 = 1.6 코어 를 의미한다.
<br/>

## JVM 메모리 설정
어... 이거 좀 설명할게 좀 길다. 이건 한번 커밋 후에 다시 가다듬은 후 설명이 필요!!
<br/>

## Replica 조정 (Deployment)
Deployment 에는 `replicas` 를 조정해서 Pod 의 수량을 조절할 수 있다.
```yaml filename="deployment.yaml" {0} copy
kind: Deployment
metadata:
  name: my-app
spec: ### spec 내의 replicas 를 수정해서 Pod 의 갯수를 조정할 수 있다.
  replicas: 5
```
<br/>

주로 `spec.replicas` 를 조정해서 수량을 조정할 수 있다.<br/>

아래의 명령어를 통해 동적으로 변경하는 것이 가능하다.<br/>
```bash filename="bash" {0} copy
$ kubectl scale deployment my-app --replicas=5
```
<br/>

## Pod 의 성능, 자원, Replicas 설정 기준
- CPU, Memory 의 크기를 성능테스트 or 모니터링을 통해 결정
- Pod 의 수량을 늘린다고 해서 성능을 선형적으로 올려주지는 않는다. 
- 비즈니스의 동작 방식에 따라 수직적, 수평적 스케일링의 효과가 달라진다.
- 노드의 자원이 허용되는 한도 내에서 어느 정도의 여유를 두고 스케일링 설정을 하자.

<br/>

