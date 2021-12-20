import Card from "../components/Card";
import styles from "../styles/form.module.css"
import Link from "next/link";
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [doorsQtty, setDoorsQtty] = useState(3)
  const [withGift, setWithGift] = useState(1)

  
  
  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="How many doors?" value={doorsQtty} onChange={newQtty => setDoorsQtty(newQtty)}/>
        </Card>
      </div>

      <div>
        <Card>
          <NumberInput text="Which door has a gift?" value={withGift} onChange={newDoorWithGift => setWithGift(newDoorWithGift)} />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${doorsQtty}/${withGift}`}  passHref>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
   
    </div>
  )
}