"use client"

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useState, useTransition } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";


const Page = () => {

    const api = process.env.NEXT_API_URL || '';
    const { toast } = useToast()

    const [isDragOver, setIsDragOver] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isPending, startTransition] = useTransition();
    const [isUploading, setIsUploading] = useState(false);

    const onDropRejected = (files) => {

        const [file] = files

        setIsDragOver(false)

        toast({
            variant: "primary",
            title: "Uh oh! Something went wrong.",
            description: "Error uploading file.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
    }
    const onDropAccepted = async (files) => {
        const file = files[0];

        setIsUploading(true);
        setUploadProgress(0);

        try {

            const { name, type } = file;

            const response = await axios.post(`${api}/uploads`, {
                name,
                contentType: type
            })

            if (response.status !== 201) {
                throw new Error('Failed to get signed URL');
            }

            const { signedUrl } = response.data;

            await axios.put(signedUrl, file, {
                headers: {
                    'Content-Type': type,
                },
                onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(progress);
                }
            })

            toast({
                description: "File upload sucessfully!",
            })
            
        } catch (error) {
            console.error('Error uploading file!', error);
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <div className={cn("relative size-full flex-1 my-16 roudend-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center", {
            "ring-blue-900/25 bg-blue-900/10": isDragOver,
        })}>
            <div className="relative flex flex-1 flex-col items-center w-full">
                <Dropzone
                    onDropRejected={onDropRejected}
                    onDropAccepted={onDropAccepted}
                    accept={{
                        "image/png": [".png"],
                        "image/jpeg": [".jpeg"],
                        "image/jpg": [".jpg"],
                    }}
                    onDragEnter={() => setIsDragOver(true)}
                    onDragLeave={() => setIsDragOver(false)}
                >
                    {({ getRootProps, getInputProps }) => (
                        <div className="size-full flex-1 flex flex-col items-center justify-center" {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isDragOver ? (
                                <MousePointerSquareDashed className="size-6 text-zinc-500 mb-2" />
                            ) : isUploading || isPending ? (
                                <Loader2 className="animate-spin size-6 text-zinc-500 mb-2" />
                            ) : (
                                <Image className="size-6 text-zinc-500 mb-2" />
                            )
                            }
                            <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                                {isUploading ? (
                                    <div className="flex flex-col items-center">
                                        <p>
                                            Uploading...
                                        </p>
                                        <Progress value={uploadProgress} className="mt-2 w-40 h-2 bg-gray-300" />
                                    </div>
                                ) : isPending ? (
                                    <div className="flex flex-col items-center">
                                        <p>Rerirecting, please wait...</p>
                                    </div>
                                ) : isDragOver ? (
                                    <p>
                                        <span className="font-semibold">Drop File</span> to upload
                                    </p>
                                ) : (
                                    <p>
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                )}
                            </div>
                            {isPending ? null : <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>}
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    )
}

export default Page;