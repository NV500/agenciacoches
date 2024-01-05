// Importa las funciones necesarias de los SDKs que necesitas
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDkxyG7cXeItlbhGwH1TLXKWGW0fMW4Gqk",
  authDomain: "agencia-e641f.firebaseapp.com",
  projectId: "agencia-e641f",
  storageBucket: "agencia-e641f.appspot.com",
  messagingSenderId: "989881680402",
  appId: "1:989881680402:web:e32660195ecc8275f28ecb",
  measurementId: "G-L0GXGC01L5"
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

/**
 * Guarda una nueva tarea en Firestore
 * @param {string} model - Modelo del coche
 * @param {string} brand - Marca del coche
 * @param {number} year - Año de fabricación
 * @param {number} price - Precio del coche
 * @param {string} releaseDate - Fecha de lanzamiento
 */
export const saveTask = (model, brand, year, price, releaseDate) =>
  addDoc(collection(db, "tasks"), { model, brand, year, price, releaseDate });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 * Elimina una tarea de Firestore
 * @param {string} id - ID de la tarea
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

/**
 * Obtiene una tarea de Firestore
 * @param {string} id - ID de la tarea
 * @returns {Promise} - Objeto de tarea
 */
export const getTask = (id) => getDoc(doc(db, "tasks", id));

/**
 * Actualiza una tarea en Firestore
 * @param {string} id - ID de la tarea
 * @param {Object} newFields - Nuevos campos de la tarea
 */
export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

/**
 * Obtiene todas las tareas de Firestore
 * @returns {Promise} - Objeto de consulta
 */
export const getTasks = () => getDocs(collection(db, "tasks"));
