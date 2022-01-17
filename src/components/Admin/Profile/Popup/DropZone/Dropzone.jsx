import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import {
  uploadImageAction,
  modalControl,
} from "../../../../../redux/actions/uploadAction";
import { useSelector } from "react-redux";

export default function Dropzone() {
  const language = useSelector((store) => {
    return store.languageReducer;
  });
  const dispatch = useDispatch();

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles[0]);
      dispatch(uploadImageAction(acceptedFiles[0]));
      dispatch(modalControl(false));
    },
    [dispatch]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <i>
          {language === "rus" && "Перетащите сюда изображение ..."}
          {language === "ukr" && "Перетягніть зображення сюди ..."}
        </i>
      ) : (
        <i>
          {language === "rus" &&
            "Перетащите сюда изображение или нажмите, чтобы выбрать файлы"}
          {language === "ukr" &&
            "Перетягніть зображення сюди або натисніть, щоб вибрати файли"}
        </i>
      )}
    </div>
  );
}
