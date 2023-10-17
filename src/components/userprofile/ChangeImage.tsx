import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropimage";
import { useMutation, useQueryClient } from "react-query";
import { updateProfilePictureApi } from "../../services/api";
import { toast } from "react-hot-toast";

const ChangeImage = ({ photo }: { photo: { url: string; file: File } }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const handleCropComplete = (cropedAreaPixels: any) => {
    setCroppedAreaPixels(cropedAreaPixels);
  };

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ formData }: { formData: any }) =>
      updateProfilePictureApi({ formData: formData }),
    onSuccess: (data: any) => {
      toast.success("profile picture updated");
      console.log("this data : ", data);
      queryClient.invalidateQueries(["profile"]);
    },
  });

  const handleCropImage = async () => {
    const croppedImg: any = await getCroppedImg(photo?.url, croppedAreaPixels);
    const file = new File([croppedImg.file], `${photo?.file.name}`, {
      type: photo?.file.type,
    });
    const formData = new FormData();
    formData.append("profilePicture", file);

    mutate({ formData: formData });
  };

  return (
    <div className="w-[300px] flex flex-col gap-y-4">
      <div className=" relative w-full aspect-square rounded-lg overflow-hidden bg-slate-100 ">
        <Cropper
          image={photo?.url}
          crop={crop}
          zoom={zoom}
          aspect={3 / 2}
          onZoomChange={setZoom}
          onCropChange={setCrop}
          onCropComplete={handleCropComplete}
        />
      </div>

      <input
        type="range"
        value={zoom}
        min={1}
        max={3}
        step={0.1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setZoom(Number(e.target.value))
        }
      />
      <button
        onClick={handleCropImage}
        className="w-full bg-primary p-3 rounded-md font-opensans text-white"
      >
        {isLoading ? "loading..." : "Update Picture"}
      </button>
    </div>
  );
};

export default ChangeImage;
