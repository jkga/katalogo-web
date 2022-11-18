import style from './style.module.css'
import * as React from "react"

export default function ProgressBar (e: any) {
  return e.show && <>
    <div className="progress" style={{height: '10px'}}>
      <div className={`progress-bar ${style.animatedProgressbar}`} style={{width: '5%', background: '#fcd000'}}></div>
    </div>
  </>
}