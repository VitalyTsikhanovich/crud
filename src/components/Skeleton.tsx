import React from "react"
import ContentLoader, { IContentLoaderProps } from "react-content-loader"
import {JSX} from "react/jsx-runtime"

export const MyLoader = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
    <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3eded"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="200" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="300" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <rect x="0" y="1" rx="0" ry="0" width="47" height="50" />
        <rect x="101" y="9" rx="0" ry="0" width="32" height="4" />
        <rect x="298" y="56" rx="0" ry="0" width="83" height="3" />
        <rect x="78" y="57" rx="0" ry="0" width="0" height="2" />
    </ContentLoader>
)



