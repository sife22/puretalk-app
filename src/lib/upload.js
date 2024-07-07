import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const upload = async (file) => {

    return new Promise((resolve, reject)=>{

        
        const storage = getStorage();
        const date = new Date();
        const storageRef = ref(storage, `images/${date + file.name}`);
        
        const uploadTask = uploadBytesResumable(storageRef, file);
        
  
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        reject('Something went wrong!' + error.code)
    }, 
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
        });
    }
);
});
}

export default upload