import './style.scss';

export const ImageHero = ({
                            avif,
                            webp,
                            png,
                            alt = "Image Hero",
                            className = "",
                            width,
                            height,
                            ...props
                          }) => {
  return (
      <picture className={`imageHero ${className}`} {...props}>
        {avif && (
            <source
                type="image/avif"
                srcSet={Array.isArray(avif) ? avif.join(', ') : avif}
            />
        )}

        {webp && (
            <source
                type="image/webp"
                srcSet={Array.isArray(webp) ? webp.join(', ') : webp}
            />
        )}

        <img
            src={png}
            alt={alt}
            loading="lazy"
            decoding="async"
            width={width}
            height={height}
            className="imageHero"
        />
      </picture>
  );
};