import { ColorSlice, getColor } from '../slicers/color'
import { useSelector,  useDispatch } from 'react-redux'
import { Naving } from './navig'
import { Inp } from '../Component/input'

export const Page2 = () => {
  const color = useSelector(getColor);
  const { setColor } = ColorSlice.actions;
  const dispatch = useDispatch();
  const updateColor = (value) => {
    dispatch(setColor(value))
  };

  return (
    <>
        <Naving />
      <Inp color={color} setColor={updateColor} />
    </>
  )
}   