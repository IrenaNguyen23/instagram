export const uploadToCloudinary = async (image) => {
    if (image) {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "instagram");  // Đúng là "upload_preset"
        data.append("cloud_name", "du1zhypcz");

        try {
            const res = await fetch('https://api.cloudinary.com/v1_1/du1zhypcz/upload', {
                method: "POST",
                body: data,
            });

            if (!res.ok) {
                throw new Error("Failed to upload image/video");
            }

            const fileData = await res.json();
            console.log("file data: ", fileData);
            return fileData.url.toString();
        } catch (error) {
            console.error("Upload error: ", error);
            return null;
        }
    }
};
