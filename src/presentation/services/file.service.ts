import firebase from "../../core/firebase";
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
    const storageRef = ref(db, `${path}/${name}.${file.name.split(".").pop()}`);

    // create a load file with custom metadata
    const metadata = {
      contentType: file.type,
    };

    // Upload file
    const snapshot = await uploadBytes(storageRef, file);

    // Get download URL
    const downloadURL = await snapshot.ref.fullPath;

    return downloadURL;
  } catch (error: any) {
    throw new Error(error.message ?? "Something went wrong");
  }
}

function getFileExtension(filename: string): string | undefined {
  return filename.split(".").pop();
}

function getFileType(extension: string): String {
  return extension === "pdf" ? "application/pdf" : "image/jpeg";
}
