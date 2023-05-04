import './App.css'

import React, { useState } from 'react'

export const Floors = ({}) => {

  const [arrOfFloors, setArrOfFloors] = useState([3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])


  return (
      arrOfFloors.map(floor => <option key={floor} value={floor}>{floor}</option>)
  )
}

export const Rooms = () => {

  const [arrOfFloors, setArrOfFloors] = useState([1,2,3,4,5,6,7,8,9,10])

  return (
      arrOfFloors.map(floor => <option key={floor} value={floor}>{floor}</option>)
  )
}


function App() {

  const [tower, setTower] = useState('Башня')
  const [floor, setFloor] = useState('Этаж')
  const [room, setRoom] = useState('Переговорная')
  const [date, setDate] = useState('')
  const [time, setTime] = useState(0)
  const [comms, setComms] = useState('')

  const submitForm = () => {
    let formToSend = {
      tower: tower,
      floor: floor,
      room: room,
      date: date,
      time: time,
      comms: comms,
    }
    console.log(JSON.stringify(formToSend))
  }

  const resetForm = (event) => {
    console.log('123')
    event.preventDefault()
    setTower('Башня')
    setFloor('')
    setRoom('Переговорная')
    setDate('')
    setTime('')
    setComms('')
  }

  return (
    <form className='form' onSubmit={() => submitForm()}>
      <div className='form_inputs'>
        <div className='form__inputs_left'>
          <select className='form__input from__input_tower' name='tower' defaultValue={tower} value={tower} required onChange={(e) => setTower(e.target.value)}>
            <option>Башня</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
          <select className='form__input form__input_floor' name='Floor' defaultValue='Этаж' value={floor} required onChange={(e) => setFloor(e.target.value)}>
            <option value='Этаж'>Этаж</option>
            <Floors/>
          </select>
          <select className='form__input form__input_room' name='Room' defaultValue='Переговорная' value={room} required onChange={(e) => setRoom(e.target.value)}>
            <option value='Переговорная'>Переговорная</option>
            <Rooms/>
          </select>
        </div>
        <div className="form__inputs_right">
          <input className='form__input form__input_date' type='date'  value={date} required onChange={(e) => setDate(e.target.value)}></input>
          <input className='form__input form__input_time'type="time" value={time} required onChange={(e) => setTime(e.target.value)}></input>
          <textarea className='form__input from__input_comms' type='text' value={comms} placeholder='Для чего нужна переговорная?' required onChange={(e) => setComms(e.target.value)}></textarea>
        </div>
      </div>
      <div className="form_buttons">
        <button type="submit">Забронировать</button>
        <button onClick={(event) => resetForm(event)}>Сбросить</button>
      </div>
    </form>
  )
}

export default App
