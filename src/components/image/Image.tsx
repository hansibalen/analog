import React from 'react';

const Image = ({
  src,
  srcSet,
  fallback,
  type,
  alt,
  media,
}: {
  src: string;
  srcSet: string;
  fallback: string;
  type: 'image/webp';
  alt: string;
  media: string;
}): React.ReactElement => {
  return (
    <picture>
      <source media={media} srcSet={srcSet} />
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
  );
};

export default Image;
