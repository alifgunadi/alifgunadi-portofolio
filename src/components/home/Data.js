import { saveAs } from 'file-saver';
import React from 'react'

const Data = () => {
  const downloadFile = () => {
    const fileUrl = '/CV.pdf';
    const fileName = 'CV.pdf';
    saveAs(fileUrl, fileName);
  };

  return (
    <div className='home__data'>
      <h1 className='home__title'>Hallo.. Saya,<br/>Muhammad Alif Gunadi</h1>
      <h3 className='home__subtitle'>Fullstack Developer</h3>
      <p className='home__description'>Junior Fullstack developer yang mampu menggunakan aplikasi MERN Stack untuk membuat Website.&nbsp;
      {/* <br/>  */}
      Saya sangat bersemangat dan berdedikasi pada pekerjaan saya.</p>
      <button onClick={downloadFile} download className='btn button--flex'><p>&nbsp;&nbsp;&nbsp;Download CV&nbsp;</p><i class="uil uil-file"></i></button>
    </div>
  )
}

export default Data
