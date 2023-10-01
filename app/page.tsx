"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import React, { useEffect } from 'react';

export default function Home() {
   useEffect(() => {
    if(typeof document !== 'undefined') {
     require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);
  return (
    <>
    <p>this is home</p>
    </>
  )
}
