# Implementar Firebase a tu proyecto con REACT

**1. Instala Firebase con NPM:**

```
$ npm install --save firebase
```

**2. Inicializa Firebase y crea un objeto de app de Firebase**
Puedes hacer este paso en un archivo .js aparte en caso de que necesites usar Firebase en varios componentes
```javascript=
import { initializeApp } from "firebase/app";

// El siguiente onjeto contiene la configuración de tu projecto de Firebase
const firebaseConfig = {
    apiKey:"AIza...",
    authDomain: "minga-bla...",
    projectId: "minga-bla...",
    storageBucket: "minga-blan...",
    messagingSenderId: "847...",
    appId: "1:847835..."
}

const appFirebase = initializeApp(firebaseConfig);
export default appFirebase
```

**3. Acceder a Firebase desde el proyecto**
Este paso se hace en el componente donde necesitas usar Firebase

```javascript=
// importa las credenciales o lo que sería la inicialización de Firebase
import credentials from '../credentials.js'
//Importa las funciones y/o metodos para acceder a los servicios de Firestore y/o Storage
import { getFirestore, collection, addDoc } from 'firebase/firestore' 
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
// Definir una instancia de Firestore con las credenciales
// "db" se puede usar para interactuar con las base de datos de Firestore y poder leer, escribir, actualizar, y eliminar datos
const db = getFirestore(credentials)
//Definor una instancia de Storage 
// storage se puede usar para interactuar con almacenamiento de la nube y poder cargar o descargar archivos, y gestionar el almacenamiento
const storage = getStorage(credentials)
```
**3.2 Definir la funcion que va a subir la imagen del usuario al storage**
Dentro de la función que "render" de nuestro proyecto vamos a definir lo siguiente:
```javascript=12
//Antes de definir las funciones vamos a inicializar una variable que usaremos mas tarde para almacenar la URL de la img del usuario
let urlImg;
// Funcion para guardar la información en la base de datos (storage)
const fileHandler = async(e) => {
    e.preventDefault()
// Definicion de una variable que contiene la imagen como archivo
    let imgFile = //Definir metodo propio para obtener la img
// Cargar o subir la img al storage dentro de un directorio
    const reFile = ref(storage, `authorDocs/${imgFile.name}`)
// Cargar o subir el archivo con la imagen
    await uploadBytes(refFile, imgFile)
// Obtener la url de la imagen y definirla en la variable "urlImg" que se inicializó antes
    urlImg = getDownloadURL(refFile)
}
```

:::info
:information_source: Hasta aquí ya hemos usado el storage para almacenar imagenes que el usuario nos proporciona atraves del front.
Lo siguiente es algo opcional que sirve para almacenar datos del usuario (nombre, apellido, etc...) en la base de datos Firebase ademas de tambien poder almacenar la URL de la imagen que no proporciona
:::

**3.2 Definir la funcion que va a subir datos del usuario a Firebase**

```javascript=26
const saveInfo = async(e) => {
    e.preventDefault()
    const data = {
//Objeto con la info del usuario(definir metodo propio para obtenerla)
    }
//Enviar la información obtenida
    try{
// Definir el nombre de la coleecion en la instancia que definimos antes
      await addDocs(collection(db, 'AuthorInfo'),{
//Enviar el objeto con la información que se desea guardar, pero como un objeto nuevo
            ...data
        })  
    } catch(error) {
        console.log(error)
    }
}
```

:::success
:thumbsup: Por ultimo faltaría definir como y en que momento se van vamos a usar la funciones que acabamos de defnir.
A continuación dejo un ejemplo de como invocar una de las funciones por medio de un onChange={}:
:::

```javascript
<input type="file" ref={photo} className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white text-white/50 | xl:text-3xl' onChange={fileHandler}/>
```