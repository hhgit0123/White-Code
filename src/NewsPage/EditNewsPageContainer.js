import React, { useState, useEffect } from "react";
import EditNewsPage from "./EditNewsPage";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) => {
  return {
    saveNews: (x) => {
      dispatch({ type: "saveNews", payload: x });
    },
  };
};
function EditNewsPageContainer(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    image: false,
    title: false,
    description: false,
  });
  function handleChange(e) {
    if (Object.values(validationErrors).indexOf(true) !== -1) {
      setValidationErrors({
        image: false,
        title: false,
        description: false,
      });
    }
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "image":
        const file = e.target.files[0];
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
          uploadImage(file);
        } else {
          setValidationErrors({ ...validationErrors, image: true });
        }
      default:
        break;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      let currentTime = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
      });
      props.saveNews({
        index: props.index,
        title,
        description,
        image,
        edited: currentTime,
      });
      window.location.href = "/#/myAccount/";
    }
  }
  function validateForm() {
    let isFormValid = true;
    let newValidationErrors = {
      title: false,
      description: false,
      image: false,
    };
    if (title == "") {
      isFormValid = false;
      newValidationErrors.title = true;
    }
    if (description == "") {
      isFormValid = false;
      newValidationErrors.description = true;
    }
    if (image == "") {
      isFormValid = false;
      newValidationErrors.image = true;
    }
    setValidationErrors(newValidationErrors);
    return isFormValid;
  }
  function uploadImage(file) {
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    toBase64(file).then((src) => {
      setImage(src);
    });
  }
  useEffect(() => {
    if (props.news) {
      setTitle(props.news.title);
      setDescription(props.news.description);
      setImage(props.news.image);
    }
  }, []);
  return (
    <EditNewsPage
      title={title}
      description={description}
      image={image}
      validationErrors={validationErrors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
export default connect(null, mapDispatchToProps)(EditNewsPageContainer);
