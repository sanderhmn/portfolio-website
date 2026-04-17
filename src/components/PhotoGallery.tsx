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
        return () => { document.body.style.overflow = ""; };
    }, [selected]);

    return (
        <>
            <RowsPhotoAlbum
                photos={photos}
                targetRowHeight={300}
                onClick={({ photo }) => setSelected(photo as Photo)}
            />

            {selected && (
                <div
                    onClick={() => setSelected(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0, 0, 0, 0.75)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                        cursor: "default",
                        padding: "2rem",
                        boxSizing: "border-box",
                    }}
                >
                    <img
                        src={selected.src}
                        alt=""
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            borderRadius: "4px",
                            cursor: "default",
                            boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
                        }}
                    />
                </div>
            )}
        </>
    );
}
