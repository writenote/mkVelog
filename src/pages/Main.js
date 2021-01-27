import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Main.css';
import styled from '@emotion/styled';
import { firestore } from '../firebase';

const Container = styled.div``;

const admin = require('firebase-admin');
const db = admin.database();
const ref = db.ref('/');

ref.on(
  'value',
  function (snapshot) {
    console.log(snapshot.val());
  },
  function (errorObject) {
    console.log('The read failed: ' + errorObject.code);
  }
);

function Main() {
  const [sumnail, setSumnail] = useState('');
  const [preview, setPreview] = useState('');
  const [registed, setRegisted] = useState('');
  const [id, setId] = useState('');

  function dataS() {
    firestore
      .collection('users')
      .add({
        email: 'hansol1773@gmail.com',
        last: 'Lovelace',
        born: 1815,
      })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  }

  return (
    <Container>
      <div>
        <div>
          <span>트렌딩</span>
        </div>
      </div>
    </Container>
  );
}

export default Main;
