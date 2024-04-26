import { Loader } from "@mantine/core";

export default function Loading() {
    return (
        <main className="bg-[#141414] flex flex-col justify-center items-center w-screen h-screen">
            <img src="https://png.pngtree.com/png-vector/20230901/ourmid/pngtree-the-earth-logo-in-color-line-design-vector-png-image_7017998.png" alt="Logo" />

            <Loader color="green" type="dots" size="lg" />
        </main>
    )
}