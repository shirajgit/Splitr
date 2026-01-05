"use client";

import { ConvexProvider,  ConvexReactClient } from "convex/react";
import {ConvexProviderWithClerk} from 'convex/react-clerk'
import {useAuth} from '@clerk/nextjs'

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)

export function ConvexProvider({children}){
    return(
        <ConvexProviderWithClerk 
        client= {convex}
        useAuth={useAuth}
        >
           
        </ConvexProviderWithClerk >
    )
    
}