import styles from "../styles/Door.module.css"
import DoorModel from "../model/door"
import Gift from "./Gift"


interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}


export default function Door(props: DoorProps) {
  const door = props.value
  const selected = door.selected && !door.open ? styles.selected : ''
  const toggleOnSelection = e => props.onChange(door.toggleOnSelection())
  const toOpen = e => {
    e.stopPropagation()
    props.onChange(door.toOpen())
  }
  

function renderDoor() {
  return (
    
        <div className={styles.door}>
          <div className={styles.doornumber}>{door.number}</div>
          <div className={styles.doorhandle} onClick={toOpen}></div>
        </div>
  )
}

  return (
    <div className={styles.area} onClick={toggleOnSelection} >
      <div className={`${styles.frame} ${selected}`}>
        {door.closed ? renderDoor() : door.hasGift ? <Gift /> : false }
        </div>
      <div className={styles.floor}></div>
    </div>
  )
}