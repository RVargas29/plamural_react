const ImageLink = (redirectUrl, image, altTex, target="_blank",) => {
    if(redirectUrl) {
        return (
            <a href={redirectUrl} target={target}>
                <img src={image} alt={altTex}/>
            </a>
        )
    }

    return (
        <img src={image} alt={altTex}/>
    )
}

export default ImageLink;