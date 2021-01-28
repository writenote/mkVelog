import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBCw4D1QRT3MlNF_CysC046Sid7CDYcxTc',
  authDomain: 'velogtest.firebaseapp.com',
  projectId: 'velogtest',
  storageBucket: 'velogtest.appspot.com',
  messagingSenderId: '389561626332',
  appId: '1:389561626332:web:d919765e484a7259b14e19',
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

const firebaseInstance = firebase;
const authService = firebase.auth(); // 로그인 모듈
const dbService = firebase.firestore(); // 데이터베이스
const storageService = firebase.storage(); // 이미지 저장 스토리지

export { firebase, firebaseInstance, authService, dbService, storageService };
