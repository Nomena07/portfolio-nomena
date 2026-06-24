import { useState, useEffect } from 'react'
import './Modal.css'

export default function Modal({ isOpen, onClose, title, icon, color, bg, fullscreen, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content ${fullscreen ? 'modal-fullscreen' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="modal-header" style={{ background: bg }}>
          <div className="modal-icon" style={{ color }}>
            <i className={icon}></i>
          </div>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <h3 className="modal-title">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  )
}
