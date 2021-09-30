import React, { useState } from 'react';
import config from './../../config';
import Loader from '../../common/Loader/Loader';
import useStyles from './index.styles';

const UploadPage = () => {
  const classes = useStyles();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [status, setStatus] = useState(0);

  const changeHandler = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmission = () => {
    setStatus(1);
    const formData = new FormData();
    Array.from(selectedFiles).forEach((file) => {
      formData.append('vid', file);
    });
    fetch(`${config.apiUri}/upload`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setStatus(2);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  switch (status) {
    case 0:
      return (
        <div>
          <div className={classes.uploadButtonContainer}>
            <input type='file' name='file' multiple onChange={changeHandler} />
          </div>
            <button onClick={handleSubmission}>Upload Video</button>
        </div>
      );
    case 1:
      return <Loader />;
    case 2:
      return 'good';

    default:
      break;
  }
};

export default UploadPage;
