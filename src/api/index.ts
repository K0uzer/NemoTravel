import { METHODS, URL_API } from '../constants'

interface getContentProps {
    lat: number
    long: number
    variables: string[]
}

export const getContent = ({ lat, long, variables }: getContentProps) => {
    const arrayOfVariables = variables.join(',')

    return fetch(
        `${URL_API}v1/forecast?latitude=${lat}&longitude=${long}&daily=${arrayOfVariables}&timezone=Europe/Moscow&past_days=10`,
        { method: METHODS.GET },
    )
        .then((result) => {
            if (!result.ok) {
                throw new Error(`HTTP error! status: ${result.status}`)
            }
            return result.json()
        })
        .then((result) => {
            if (
                !result.daily ||
                !result.daily.time ||
                !result.daily.time.length
            ) {
                throw new Error('Данные пришли, но они пустые')
            }
            return result
        })
}
