import { New } from '../components/New/New'
import { Popular } from '../components/Popular/Popular'

export function Hightlights(Component) {
  return function HightlightChanger(props) {
    
    const types = {
      new: <New children={<Component {...props}/>} />,
      popular: <Popular children={<Component {...props}/>} />,
      default: <Component {...props}/>,      
    }

    const { views } = props.item
    let type = 'default'
    if (views < 100) type = 'new';
		else if (views > 1000) type = 'popular';

    return types[type]    
  }
}