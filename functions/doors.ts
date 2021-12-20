import DoorModel from "../model/door";

export function createDoorsArray(qtty: number, doorWithGift: number): DoorModel [] {
  return Array.from({length: qtty}, (_, i) => {
    const number = i + 1
    const hasGift = number === doorWithGift
    return new DoorModel(number, hasGift)

  })
}

export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
return doors.map(currentDoor => {
  const sameAsModified = currentDoor.number === modifiedDoor.number

  if(sameAsModified) {
    return modifiedDoor
  } else {
    return modifiedDoor.open ? currentDoor : currentDoor.toggleOffSelection()
  }
})
}