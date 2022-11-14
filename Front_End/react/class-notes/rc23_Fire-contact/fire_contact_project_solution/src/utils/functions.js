import {getDatabase, onValue, push, ref, remove, set} from "firebase/database";
import { useEffect, useState } from "react";
import firebase from "./firebase";


export const AddUser= (info) =>{
  const db=getDatabase(firebase);
  const userRef = rf(db,"user/")
  const newUserRef = push(userRef)

  set(newUserRef, {
    username:info.username,
    phoneNumber: info.phoneNumber,
    gender:info.gender

  })

}

//READ INFO ISLEMI

export const useFetch = ()=>{
  const [isLoading, setIsLoading] = useState()
  const [contactList, setContactList] = useState()

  useEffect(() =>{
    const db=getDatabase(firebase);
  const userRef = rf(db,"user/")
  onValue(userRef, (snapshot) =>{
    const data = snapshot.val();
    const userArray = []
    for (let id in data){
      userArray.push({id, ...data[i]})
    }
    setContactList(userArray)
    setIsLoading(false)
  })
}, [])
return {isLoading, contactList}
}

export const  DeleteUser= (id) =>{
  const db=getDatabase(firebase);
  const userRef = rf(db,"user/")
  remove(ref)
}