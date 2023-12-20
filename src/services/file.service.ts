import firebase from "../core/firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const db = getStorage(firebase);

export async function loadFile({
  file,
  name,
  path,
}: {
  file: File;
  name: String;
  path: String;
}): Promise<string> {
  try {
    // Create a file reference

    console.log(`${path}/${name}.${file.name.split(".").pop()}`);

    const storageRef = ref(db, `${path}/${name}.${file.name.split(".").pop()}`);

    // Upload file
    const snapshot = await uploadBytes(storageRef, file);

    // Get download URL
    const downloadURL = await snapshot.ref.fullPath;

    return downloadURL;
  } catch (error: any) {
    throw new Error(error.message ?? "Something went wrong");
  }
}
