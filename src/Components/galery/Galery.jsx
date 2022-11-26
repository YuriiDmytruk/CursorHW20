import Image from "./Image";

import book from "../../pictures/galery/book.jpg"
import forest from "../../pictures/galery/forest.jpg"
import mountains from "../../pictures/galery/mountains.jpg"
import tree from "../../pictures/galery/tree.jpg"

import ImageModel from "../models/imageModel"

function Galery() {
  const IMAGES = [
    new ImageModel(book, "book", "Some book"),
    new ImageModel(forest, "forest", "Some forest"),
    new ImageModel(mountains, "mountains", "Some mountains"),
    new ImageModel(tree, "tree", "Some tree"),
  ]


  return (
    <div>
      {IMAGES.map((e) => (
        <Image image={e} />
      ))}
    </div>
  );
}

export default Galery;
