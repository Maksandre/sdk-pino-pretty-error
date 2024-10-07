'use client'

import {UniqueChain} from "@unique-nft/sdk";
import {Sr25519Account} from "@unique-nft/sr25519";
import { useEffect } from "react";



async function getData() {
  const account = Sr25519Account.fromUri("humor excess unknown large account spot tiger virtual family brand lend army");
  const sdk = UniqueChain({baseUrl: "https://rest.unique.network/v2/opal", account });
}

export default async function Page() {
  useEffect(() => {
    console.log('X')
    getData();
    console.log('Y')

  }, []);
 
  
  return <main><>Hwwemwqp</></main>
}
