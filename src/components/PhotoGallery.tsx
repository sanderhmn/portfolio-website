import { MasonryPhotoAlbum, RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { photos } from "../data/photos";

export default function PhotoGallery() {
    return (< div > <RowsPhotoAlbum photos={photos} targetRowHeight={150} /></div >);
}