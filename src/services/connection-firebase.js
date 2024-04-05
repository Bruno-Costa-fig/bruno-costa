import { ref, watchEffect } from "vue";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_API_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

async function enviarDepoimento(depoimento) {
  try {
    const depoimentoRef = collection(db, "depoimentos");
    console.log(db);
    const result = await addDoc(depoimentoRef, depoimento);

    console.log(result);
  } catch (error) {
    console.error("Erro ao enviar depoimento: ", error);
  }
}

function getCollection() {
  const filaRef = collection(db, "depoimentos");
  const listaDepoimentos = ref([]);
  const erro = ref(null);

  const unsub = onSnapshot(
    filaRef,
    (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      listaDepoimentos.value = results;
    },
    (err) => {
      console.log(err.message);
      erro.value = "Não foi possível obter os dados";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { listaDepoimentos, erro };
}

async function reportarDepoimento(id) {
  try {
    const filaRef = doc(db, "depoimentos", id);

    await updateDoc(filaRef, { reported: true });

  } catch (error) {
    console.error("Erro ao reportar depoimento: ", error);
  }
}

export { getCollection, enviarDepoimento, reportarDepoimento };
