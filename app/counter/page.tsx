'use client'

import { useEffect, useState } from "react"
import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";

export default function Counter() {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("pagina Loaded")
    }, [])

    useEffect(() => {
        console.log("valor do counter alterou", counter)
    }, [counter])

    return <>
        <Card className="max-w-[400px] m-20">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">Counter</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <div className="flex justify-center align-center m-10">
                    <p className="text-4xl">{counter}</p>
                </div>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button onClick={() => {
                    setCounter(counter + 1)
                }}>Aumentar counter</Button>
            </CardFooter>
        </Card>
    </>
}