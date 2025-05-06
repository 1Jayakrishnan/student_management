import React from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import img from "../assets/images/school.png"

function Home() {
  return (
    <div style={{
        backgroundImage: `url(${img})`,
        height: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        {/* Overlay for better text visibility */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
        }}></div>
  
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Teacher Management System</h1>
          <p style={{ fontSize: '1.5rem', marginTop: '10px' }}>
            Efficiently manage teachers, schedules, and records with ease.
          </p>
        </div>
      </div>
  )
}

export default Home
