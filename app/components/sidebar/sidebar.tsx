
"use client"
import React, { useState } from 'react'

import './sidebar.scss'
import Image from 'next/image';
import logo from '../../assets/logo.png'

export default function sidebar({ collapsed }: any) {


  return (
    <div className={` ${collapsed ? 'collapsed ps-0 pb-3 pt-3 pe-0  ' : 'p-3'} d-flex flex-column flex-shrink-0 min-vh-100 col-md-3 col-md-2 sidebar shadow-sm mb-5 bg-body rounded`}>
      
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <Image src={logo} height={65} width={70} alt="Collab" />
          <span className="fs-2 fw-bolder logo-color">ollab</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis active">
              <i className="bi bi-speedometer2"></i>
              {!collapsed && <span >Dashboard</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis">
              <i className="bi bi-columns-gap"></i>
              {!collapsed && <span>Projects</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis">
              <i className="bi bi-people"></i>
              {!collapsed && <span>Clients</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis">
              <i className="bi bi-trophy"></i>
              {!collapsed && <span>Sprints</span>}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis">
              <i className="bi bi-layout-three-columns"></i>
              {!collapsed && <span>TaskBoard</span>}
            </a>
          </li>
        </ul>
        <hr />

      
    </div>
  )
}
