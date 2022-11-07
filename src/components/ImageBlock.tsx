/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from './Image';
import { motion } from 'framer-motion';
import React from 'react';

const ImageBlock = ({
  posX,
  posY,
  variants,
  id,
}: {
  posX?: number;
  posY?: number;
  variants: any;
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
        src={require(`@assets/images/${id}.webp`)}
        fallback={`@assets/images/${id}.jpg`}
        alt={id}
        type={'image/webp'}
      />
    </motion.div>
  );
};

export default ImageBlock;
