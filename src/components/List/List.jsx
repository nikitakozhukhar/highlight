
import { Hightlights } from "../../hoc/Hightlights";
import { ItemHightlight } from "../ItemHightlight/ItemHightlight";

export function List(props) {
const MyHightLightsChanger = Hightlights(ItemHightlight)

  return props.list.map((item, index) => <MyHightLightsChanger key={index} item={item}/>);
};