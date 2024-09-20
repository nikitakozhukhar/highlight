import { Video } from "../Video/Video";
import { Article } from "../Article/Article";

export function ItemHightlight({ item }) {

  const getContent = (item) => {
    const content = {
      video: <Video {...item} />,
      article: <Article {...item} />
    };

    return content[item.type] || null;
  };

  return (
    <div className={'highlight__item item-highlight'}>
      <div className={'item-highlight__body'}>
        {getContent(item)}
      </div>
    </div>
  );
}