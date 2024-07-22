# 리액트 과제 Repository
## 마크업
1. 디자인 시안 자체가 list > item 으로 구성되어있어 전체적인 구조는 ul과 li로 마크업 하였습니다.
2. figure 요소를 배우고 몇 번 사용해보질 않아서 figure와 figcaption으로 작성해보았습니다.
3. img alt 에 이미지의 정보를 작성해야 하는데 어떤 이미지인지 봐도 잘 모르겠어서 보이는대로 적었습니다.
4. alt를 제외한 내부 정보가 모두 영어인데 html lang을 kr로 해야하나 en으로 해야하나 고민하다가 kr로 했습니다.
5. 혹시 몰라서 link:css는 절대경로로 작성하였습니다.

## 스타일링
1. 디자인 시안이 Pretendard 라 웹폰트 font-face로 불러왔습니다.
2. 간단한 시안이라 일단은 reset.css를 따로 작성하지 않고 전체에 margin,padding만 초기화 해주었습니다.
3. 공통으로 들어가는 부분은 body 에 주었습니다. 그런데 나중에 다른 컴포넌트들이 추가될 것을 고려하여 li.item > figure 또는 li.item 자체로 옮겨주어야 할 것 같습니다.
4. figure로 마크업을 진행하였더니 li 에 한 번 list-style-type을 주고 그 안 figure에 나머지 스타일을 정의해야 해서 figure를 쓸 경우에는 ul,li가 아닌 div로 감싸주어야 하나 고민했습니다.
