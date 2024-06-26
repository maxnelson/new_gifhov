import { firestore_database } from "@/utility_functions/firebaseConfig";
import { doc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { uploadGifhovFile } from "@/utility_functions/uploadGifhovFile";

export const uploadGifhov = async (
  userUid: string,
  file1: File,
  file2: File
) => {
  const gifFileURL = await uploadGifhovFile(file1);
  const audioFileURL = await uploadGifhovFile(file2);
  const new_firestore_object = {
    gifURL: gifFileURL,
    audioURL: audioFileURL,
    uploadTime: serverTimestamp(),
  };
  const new_firestore_record = await addDoc(
    collection(
      doc(collection(firestore_database, "users"), userUid),
      "gifhovs"
    ),
    new_firestore_object
  );
  return new_firestore_record.id;
};
