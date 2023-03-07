//Image size reducer
export const imageReducer = (imagepath, size) => {
    const image = imagepath.match(/media\/screenshots/)
        ? imagepath.replace(
            "media/screenshots",
            `media/resize/${size}/-/screenshots`
        )
        : imagepath.replace("media/games", `media/resize/${size}/-/games`);
        return image;
}