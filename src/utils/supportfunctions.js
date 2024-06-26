import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 2, name: "Hiphop", value: "hiphop" },
  { id: 3, name: "Love", value: "love" },
  { id: 4, name: "Sad", value: "sad" },
  { id: 5, name: "Party", value: "party"},
];

export const filterByLanguage = [
  { id: 1, name: "Tamil", value: "Tamil" },
  { id: 2, name: "English", value: "English" },
  { id: 3, name: "Malayalam", value: "Malayalam" },
  { id: 4, name: "Telungu", value: "Telungu" },
  { id: 5, name: "Hindi", value: "Hindi" },
];

export const deleteAnObject = (referenceUrl) => {
  const deleteRef = ref(storage, referenceUrl);
  deleteObject(deleteRef)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
