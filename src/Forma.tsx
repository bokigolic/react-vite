import { FC, useState, ChangeEvent, MouseEvent } from 'react'
const Uncontrolled: FC = () => {
  const [value, setValue] = useState<string>('')
  return (
    <form>
        <input type="text" />
        <button>Submit</button>
    </form>
  )
}
export default Uncontrolled