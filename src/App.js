import React from 'react';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode'

import './App.css';

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrcodeLink(url)
    })
  }

  function handleQrcode(e) {
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <dvi className='container-main'>
      <div className='container'>
        <QRCode value={link} className='qrcode' />
        <input
          type='url'
          value={link}
          className='input'
          placeholder='Cole seu link aqui...'
          onChange={(e) => handleQrcode(e)}
        />

        <a className='link' href={qrcodeLink} download={`qrcode.png`}>Baixar QRCode</a>
      </div>
      <p>Cole o link que deseja gerar um QRCode, aponte o leitor ou câmera do seu celular para o QRCode e pronto!</p>
    </dvi>
  )
}

export default App;
