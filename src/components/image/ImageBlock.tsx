import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from './Image';

const ImageBlock = ({
  posX,
  posY,
  variants,
  id,
}: {
  posX?: number;
  posY?: number;
  variants: Variants;
  id: string;
}) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        media='(max-width: 481px)'
        srcSet={require(`@assets/images/loader/${id}-m.webp`)}
        src={require(`@assets/images/loader/${id}.webp`)}
        fallback={`@assets/images/loader/${id}.jpg`}
        alt={id}
        type={'image/webp'}
      />
    </motion.div>
  );
};

export default ImageBlock;
