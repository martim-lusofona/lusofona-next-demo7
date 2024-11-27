'use client'

import useSWR from "swr"
import { MealsResponse } from "../_models/Meals"
import CardComponent from "../_components/CardComponent"

const fetcher = (url: string) => fetch(url).then(res => res.json())


export default function MealsPage() {

    const { data, error, isLoading } = useSWR<MealsResponse, Error>('/api/meals', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    if (data === undefined) return <div>error</div>

    return <>
        {data.meals.map((meal) => {
            return <CardComponent key={meal.idMeal} title={meal.strMeal} imgSrc={meal.strMealThumb}></CardComponent>
        })}
    </>
}