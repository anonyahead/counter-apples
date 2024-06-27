import { useState } from "react"
import styles from "./container.module.css"

export default function MidComponent() {
  const x = 10;
  const [leftCount, setLeftCount] = useState(x);
  const [rightCount, setRightCount] = useState(0);


  function handleLeftClick() {
    setLeftCount(leftCount+1);
    setRightCount(rightCount-1);
  }

  function handleRightClick() {
    
    setRightCount(rightCount+1);

    setLeftCount(leftCount-1);
  }

  return (
    <div className={styles.wholeContainer}>
      {/* Left Basket */}
      <div className={styles.leftContainer}>
        <h3>Left Basket</h3>
        <p>(Apples )</p>
        {leftCount} <br />
        {leftCount === 0 ? "Empty" : (leftCount === x ? "Full" : "")}
      </div>

      {/* Mid Controller */}
      <div className={styles.midContainer}>
        <button onClick={()=>{
          if(rightCount >0) handleLeftClick();
        }} className={styles.leftButton}>Left</button>
        <button  onClick={() => {
            if (leftCount > 0) handleRightClick();
          }}className={styles.rightButton}>Right</button>
      </div>

      {/* Right Basket */}
      <div className={styles.rightContainer}>
        <h3>Right Basket</h3>
        <p>(Apples)</p>
        {rightCount} <br />
        {rightCount === 0 ? "Empty" : (rightCount === x) ? "Full" : (x <=0)?"Empty":"" }
      </div>
    </div>
  )
}