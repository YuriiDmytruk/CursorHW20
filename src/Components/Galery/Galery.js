import Image from "./Image.js";

import book from "../../Pictures/Galery/book.jpg"
import forest from "../../Pictures/Galery/forest.jpg"
import mountains from "../../Pictures/Galery/mountains.jpg"
import tree from "../../Pictures/Galery/tree.jpg"

function Galery() {
  return (
    <div>
      <Image src={book} alt="book" desc="Some book"/>
      <Image src={forest} alt="forest" desc="Some forest"/>
      <Image src={mountains} alt="mountains" desc="Some mountains"/>
      <Image src={tree} alt="tree" desc="Some tree"/>
    </div>
  );
}

export default Galery;
