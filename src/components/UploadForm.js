import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

const UpoadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/jpg', 'image/jpeg', 'image/png'];

  const changeHandler = (evt) => {
    let selected = evt.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png/jpg/jpeg)');
    }
  };

  return (
    <form className="upload-form">
      <label>
        <input type="file" onChange={changeHandler} />
        <span>Upload a photo</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UpoadForm;