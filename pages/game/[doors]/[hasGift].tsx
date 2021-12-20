import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoorsArray, updateDoors } from "../../../functions/doors";
import styles from '../../../styles/game.module.css'
import Link from "next/link";
import { useRouter } from "next/router";


export default function Game() {
  const router = useRouter()
  const [valid, setValid] = useState(false)
  const [doors, setDoors] = useState([])

useEffect(() => {
  const doors = +router.query.doors
  const hasGift = +router.query.hasGift

  const validDoorsQtty = doors >= 3 && doors <= 100
  const hasValidGift = hasGift >=1 && hasGift <= doors

  setValid(validDoorsQtty && hasValidGift)
}, [doors, router.query.doors, router.query.hasGift])


useEffect(() => {
  const doors = +router.query.doors
  const hasGift = +router.query.hasGift
  setDoors(createDoorsArray(doors, hasGift))
}, [router?.query])


  function renderDoorsArray() {
    return doors.map(door => {
      return <Door key={door.number} value={door} 
        onChange={newDoor => {
        setDoors(updateDoors(doors, newDoor))}
      } />
      })
    }
  
  return (
    <div>
      <div id={styles.game}>
        <div className={styles.doors}>
          {valid ? renderDoorsArray() : <h2>Invalid input. Please make sure the number of doors is superior to the value of door with gift.</h2> }
        </div>
        <div className={styles.buttons}>
          <Link href="/" passHref>
            <button>Restart game</button>
          </Link>

        </div>
      </div>
    </div>
  )
}