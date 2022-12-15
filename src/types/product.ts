import { Entity } from "./common";

interface category{
      id: number
      name: string
      image: string

}
export interface Product extends Entity {
/* complete Product interface with some chosen properties */
id: number
title: string
price: number
description:string
category: category
images: string[]
}

