const Image = ({
  src,
  fallback,
  type,
  alt,
}: {
  src: string
  fallback: string
  type: 'image/webp'
  alt: string
}): React.ReactElement => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
  )
}

export default Image
