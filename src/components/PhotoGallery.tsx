import { useState, useEffect } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { photos } from "../data/photos";

type Photo = (typeof photos)[number];

export default function PhotoGallery() {
    const [selected, setSelected] = useState<Photo | null>(null);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelected(null);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    useEffect(() => {
        document.body.style.overflow = selected ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [selected]);

    return (
        <>
            <RowsPhotoAlbum
                photos={photos}
                targetRowHeight={280}
                rowConstraints={{ maxPhotos: 4 }}
                spacing={6}
                onClick={({ photo }) => setSelected(photo as Photo)}
            />

            {selected && (
                <div
                    onClick={() => setSelected(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0, 0, 0, 0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                        cursor: "zoom-out",
                        padding: "2rem",
                    }}
                >
                    <img
                        src={selected.src}
                        alt=""
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                        }}
                    />
                </div>
            )}
        </>
    );
}
