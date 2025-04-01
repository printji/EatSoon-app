# EatSoon

> 자취생을 위한 음식 재고 관리 앱 🍽

**EatSoon**은 자취생들이 냉장고 속 재고를 효과적으로 관리할 수 있도록 도와주는 모바일 앱입니다. 유통기한 기반 분류, 사진 첨부, Firebase 연동 등 다양한 기능을 통해 재고를 쉽게 등록하고 확인할 수 있어요.

---

## 📱 주요 기능

- 재고 목록 카드형 UI
- 유통기한 기준 그룹화 (3일 이내, 1주일 이내 등)
- 재고 추가: 품목명, 수량, 유통기한, 사진
- 사진 갤러리 선택 + Firebase Storage 업로드
- Firestore에 실시간 저장 및 불러오기
- 재고 삭제, 재고 수정 기능

---

## 🔧 기술 스택

- **React Native (Expo)**
- **Firebase (Firestore, Storage)**
- **React Navigation**
- **Expo Image Picker**

---

## 📆 개발 히스토리

### 2025.03.24 ~ 03.25
- 프로젝트 생성, 기본 구조 설계
- 카드형 UI 및 화면 이동 구조 구현

### 2025.03.26 ~ 03.28
- Firebase 연동, 재고 등록 → 저장 기능 완성

### 2025.03.29 ~ 03.31
- 홈화면에서 Firestore 데이터 불러오기
- 삭제 / 수정 기능 구현
- 유통기한 그룹핑 및 날짜 유효성 검증

### 2025.04.01
- 갤러리 이미지 선택 → Firebase Storage 업로드 연동

---

## 💡 향후 계획

- STT(음성 입력)으로 재고 등록
- GPT 연동 → 자연어로 재고 입력 시 품목 자동 추출
- 재고 임박 시 알림 기능
- 바코드 스캔 등록 기능

---

## 📁 프로젝트 구조 (일부)

```
EatSoon-app/
├── App.js
├── components/
│   └── ItemCard.js
├── screens/
│   ├── AddScreen.js
│   └── DetailScreen.js
├── firebase/
│   └── firebaseConfig.js
└── assets/
```

---

## 🔗 GitHub 링크

> https://github.com/printji/EatSoon-app

---

## 👨‍👩‍👧‍👦 제작자 및 기여자

- EatSoon 개발팀
- 주 개발자: @printji

